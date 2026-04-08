import type { PublishConfig } from "../publishConfig.ts";
import type { UploadAsset } from "./cloudinary.ts";

const BUFFER_GRAPHQL_URL = "https://api.buffer.com/graphql";

type BufferChannel = {
  id: string;
  organizationId: string;
  service: string;
  type: string;
  isDisconnected: boolean;
};

async function bufferRequest<TData>(query: string, variables: Record<string, unknown>) {
  const response = await fetch(BUFFER_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.BUFFER_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`Buffer request failed with status ${response.status}.`);
  }

  const payload = (await response.json()) as {
    data?: TData;
    errors?: Array<{ message?: string }>;
  };

  if (payload.errors?.length) {
    const message = payload.errors.map((error) => error.message || "Unknown Buffer error").join("; ");
    throw new Error(message);
  }

  if (!payload.data) {
    throw new Error("Buffer request returned no data.");
  }

  return payload.data;
}

export async function validateBufferChannel(config: PublishConfig) {
  const data = await bufferRequest<{ channel: BufferChannel }>(
    `
      query GetChannel($id: ChannelId!) {
        channel(input: { id: $id }) {
          id
          organizationId
          service
          type
          isDisconnected
        }
      }
    `,
    { id: config.channelId }
  );

  const channel = data.channel;

  if (!channel) {
    throw new Error("Buffer channel not found.");
  }

  if (channel.organizationId !== config.organizationId) {
    throw new Error("publishConfig.ts organizationId does not match the selected Buffer channel.");
  }

  if (channel.isDisconnected) {
    throw new Error("The selected Buffer channel is disconnected.");
  }

  if (channel.service !== "linkedin") {
    throw new Error("This script currently supports LinkedIn channels only.");
  }
}

export async function createBufferPost(config: PublishConfig, asset?: UploadAsset) {
  const input: Record<string, unknown> = {
    channelId: config.channelId,
    schedulingType: "automatic",
    mode: config.scheduledAt ? "customScheduled" : "shareNow",
  };

  if (config.copy) {
    input.text = config.copy;
  }

  if (config.scheduledAt) {
    input.dueAt = config.scheduledAt;
  }

  if (asset?.kind === "document") {
    input.assets = {
      documents: [
        {
          url: asset.url,
          title: asset.title,
          thumbnailUrl: asset.thumbnailUrl,
        },
      ],
    };
  }

  if (asset?.kind === "image") {
    input.assets = {
      images: [
        {
          url: asset.url,
        },
      ],
    };
  }

  const data = await bufferRequest<{
    createPost:
      | {
          __typename: "PostActionSuccess";
          post: {
            id: string;
            status: string;
            dueAt?: string | null;
          };
        }
      | {
          __typename:
            | "InvalidInputError"
            | "UnauthorizedError"
            | "UnexpectedError"
            | "RestProxyError"
            | "LimitReachedError"
            | "NotFoundError";
          message: string;
          code?: number | null;
          link?: string | null;
        };
  }>(
    `
      mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
          __typename
          ... on PostActionSuccess {
            post {
              id
              status
              dueAt
            }
          }
          ... on InvalidInputError {
            message
          }
          ... on UnauthorizedError {
            message
          }
          ... on UnexpectedError {
            message
          }
          ... on RestProxyError {
            message
            code
            link
          }
          ... on LimitReachedError {
            message
          }
          ... on NotFoundError {
            message
          }
        }
      }
    `,
    { input }
  );

  if (data.createPost.__typename !== "PostActionSuccess") {
    const code =
      "code" in data.createPost && typeof data.createPost.code === "number"
        ? ` (code ${data.createPost.code})`
        : "";
    const link =
      "link" in data.createPost && data.createPost.link ? ` ${data.createPost.link}` : "";

    throw new Error(`${data.createPost.message}${code}${link}`);
  }

  return data.createPost.post;
}

type PublishContent =
  | {
      copy: string;
      asset?: string;
      mediaName?: string;
    }
  | {
      copy?: string;
      asset: string;
      mediaName: string;
    };

export type PublishConfig = PublishContent & {
  channelId: string;
  organizationId: string;
  scheduledAt?: string;
};

const publishConfig: PublishConfig = {
  copy: "My test post",
  asset: "src/content/demo/example-1.pdf",
  mediaName: "example-1",
  channelId: "6892b59fcdb92dce19af7c4b", // Add your channel ID
  organizationId: "6892b571424c8eb9396cb4df", // Add your organization ID
  scheduledAt: new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000 /*One week*/,
  ).toISOString(),
};

export default publishConfig;

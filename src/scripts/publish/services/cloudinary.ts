import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import type { PublishConfig } from "../publishConfig.ts";

export type UploadAsset =
  | {
      kind: "document";
      title: string;
      url: string;
      thumbnailUrl: string;
    }
  | {
      kind: "image";
      url: string;
    };

type PublishConfigWithAsset = Extract<PublishConfig, { asset: string; mediaName: string }>;

export function hasMedia(config: PublishConfig): config is PublishConfigWithAsset {
  return Boolean(config.asset);
}

function isRemoteUrl(value: string) {
  return /^https?:\/\//i.test(value);
}

function getAssetExtension(assetPath: string) {
  return path.extname(assetPath).replace(".", "").toLowerCase();
}

function getPublicId(mediaName: string) {
  return mediaName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9/_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getDocumentThumbnailUrl(publicId: string) {
  return cloudinary.url(publicId, {
    secure: true,
    resource_type: "image",
    format: "png",
    transformation: [{ page: 1 }],
  });
}

async function uploadLocalAsset(assetPath: string, mediaName: string) {
  const resolvedPath = path.resolve(process.cwd(), assetPath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`Asset file not found: ${resolvedPath}`);
  }

  const publicId = getPublicId(mediaName);

  const result = await cloudinary.uploader.upload(resolvedPath, {
    resource_type: "image",
    public_id: publicId,
    overwrite: true,
    invalidate: true,
    use_filename: false,
    unique_filename: false,
    filename_override: mediaName,
  });

  return {
    secureUrl: result.secure_url,
    publicId: result.public_id,
  };
}

export function configureCloudinary() {
  cloudinary.config(true);
}

export async function resolveAsset(config: PublishConfig): Promise<UploadAsset | undefined> {
  if (!hasMedia(config)) {
    return undefined;
  }

  const extension = getAssetExtension(config.asset);

  let assetUrl: string;
  let thumbnailUrl: string | undefined;

  if (isRemoteUrl(config.asset)) {
    assetUrl = config.asset;
  } else {
    const uploaded = await uploadLocalAsset(config.asset, config.mediaName);
    assetUrl = uploaded.secureUrl;

    if (extension === "pdf") {
      thumbnailUrl = getDocumentThumbnailUrl(uploaded.publicId);
    }
  }

  if (extension === "pdf") {
    if (!thumbnailUrl) {
      throw new Error(
        "PDF publishing requires a thumbnail URL. Use a local asset so Cloudinary can generate it."
      );
    }

    return {
      kind: "document",
      title: config.mediaName,
      url: assetUrl,
      thumbnailUrl,
    };
  }

  if (["png", "jpg", "jpeg", "webp", "gif"].includes(extension)) {
    return {
      kind: "image",
      url: assetUrl,
    };
  }

  throw new Error(`Unsupported asset type '.${extension}'. Use PDF or a common image format.`);
}

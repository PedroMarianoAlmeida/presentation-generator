import type { PublishConfig } from "../publishConfig.ts";
import { hasMedia } from "./cloudinary.ts";

export function validateEnv(config: PublishConfig) {
  const bufferToken = process.env.BUFFER_TOKEN?.trim();

  if (!bufferToken) {
    throw new Error("Missing BUFFER_TOKEN. Add it to .env before publishing.");
  }

  if (hasMedia(config)) {
    const cloudinaryUrl = process.env.CLOUDINARY_URL?.trim();

    if (!cloudinaryUrl) {
      throw new Error("Missing CLOUDINARY_URL. Media publishing requires Cloudinary.");
    }
  }
}

export function validateConfig(config: PublishConfig) {
  if (!config.scheduledAt) {
    return;
  }

  const scheduledAt = Date.parse(config.scheduledAt);

  if (Number.isNaN(scheduledAt)) {
    throw new Error("publishConfig.ts field 'scheduledAt' must be a valid date string.");
  }

  if (scheduledAt <= Date.now()) {
    throw new Error("publishConfig.ts field 'scheduledAt' must be a date in the future.");
  }
}

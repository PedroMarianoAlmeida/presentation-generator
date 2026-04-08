import dotenv from "dotenv";
import publishConfig from "./publishConfig.ts";
import { createBufferPost, validateBufferChannel } from "./services/buffer.ts";
import { configureCloudinary, hasMedia, resolveAsset } from "./services/cloudinary.ts";
import { validateConfig, validateEnv } from "./services/validation.ts";

async function main() {
  try {
    dotenv.config({ override: false });
    console.log("Loaded environment variables.");
    validateConfig(publishConfig);
    validateEnv(publishConfig);
    console.log("Validated config and environment.");

    if (hasMedia(publishConfig)) {
      configureCloudinary();
      console.log("Configured Cloudinary.");
    }

    console.log("Validating Buffer channel...");
    await validateBufferChannel(publishConfig);
    console.log("Buffer channel validated.");

    console.log("Resolving asset...");
    const asset = await resolveAsset(publishConfig);
    console.log("Asset resolved.");

    console.log("Creating Buffer post...");
    const post = await createBufferPost(publishConfig, asset);

    console.log(`Post created successfully: ${post.id}`);
    console.log(`Status: ${post.status}`);

    if (post.dueAt) {
      console.log(`Scheduled at: ${post.dueAt}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Publish failed:", message);
    process.exit(1);
  }
}

main();

import { renderToFile } from "@react-pdf/renderer";
import React from "react";
import path from "path";
import fs from "fs";
import os from "os";
import { pdf } from "pdf-to-img";
import buildConfig from "./buildConfig.ts";

async function main() {
  try {
    if (!buildConfig.source || (!buildConfig.destinyPdf && !buildConfig.destinyImage)) {
      console.error(
        "buildConfig.ts must contain 'source' and at least one of 'destinyPdf' or 'destinyImage' fields"
      );
      process.exit(1);
    }

    const componentPath = buildConfig.source;
    // Resolve the component path relative to the project root
    const resolvedComponentPath = path.resolve(process.cwd(), componentPath);

    // Dynamic import of the component
    const componentModule = await import(resolvedComponentPath);
    const Component = componentModule.default || componentModule;

    const resolvedPdfPath = buildConfig.destinyPdf
      ? path.resolve(process.cwd(), buildConfig.destinyPdf)
      : path.join(os.tmpdir(), `presentation-generator-${Date.now()}.pdf`);

    const pdfDir = path.dirname(resolvedPdfPath);
    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir, { recursive: true });
    }

    await renderToFile(<Component />, resolvedPdfPath);

    if (buildConfig.destinyPdf) {
      console.log(`PDF generated successfully: ${resolvedPdfPath}`);
    }

    if (buildConfig.destinyImage) {
      const imagePath = path.resolve(process.cwd(), buildConfig.destinyImage);
      const imageDir = path.dirname(imagePath);

      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true });
      }

      const document = await pdf(resolvedPdfPath, { scale: 2 });
      let pageNumber = 1;

      for await (const image of document) {
        const finalImagePath = pageNumber === 1
          ? imagePath
          : imagePath.replace(/(\.[^.]+)$/, `-${pageNumber}$1`);

        fs.writeFileSync(finalImagePath, image);
        console.log(`Image generated successfully: ${finalImagePath}`);
        pageNumber++;
      }
    }

    if (!buildConfig.destinyPdf && fs.existsSync(resolvedPdfPath)) {
      fs.unlinkSync(resolvedPdfPath);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Error generating PDF:", message);
    process.exit(1);
  }
}

main();

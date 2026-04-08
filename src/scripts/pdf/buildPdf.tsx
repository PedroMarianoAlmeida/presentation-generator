import { renderToFile } from "@react-pdf/renderer";
import React from "react";
import path from "path";
import fs from "fs";
import { pdf } from "pdf-to-img";
import buildPdfConfig from "./buildPdfConfig.ts";

async function main() {
  try {
    if (!buildPdfConfig.source || !buildPdfConfig.destiny) {
      console.error("buildPdfConfig.ts must contain 'source' and 'destiny' fields");
      process.exit(1);
    }

    const componentPath = buildPdfConfig.source;
    const outputPath = buildPdfConfig.destiny;
    // Resolve the component path relative to the project root
    const resolvedComponentPath = path.resolve(process.cwd(), componentPath);
    
    // Dynamic import of the component
    const componentModule = await import(resolvedComponentPath);
    const Component = componentModule.default || componentModule;
    
    // Resolve output path
    const resolvedOutputPath = path.resolve(process.cwd(), outputPath);
    
    // Ensure output directory exists
    const outputDir = path.dirname(resolvedOutputPath);
    await import('fs').then(fs => {
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
    });
    
    // Render the PDF
    await renderToFile(<Component />, resolvedOutputPath);

    console.log(`PDF generated successfully: ${resolvedOutputPath}`);

    // Generate image if destiniy-image is specified
    if (buildPdfConfig["destiniy-image"]) {
      const imagePath = path.resolve(process.cwd(), buildPdfConfig["destiniy-image"]);
      const imageDir = path.dirname(imagePath);

      // Ensure image output directory exists
      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true });
      }

      // Convert PDF to image
      const document = await pdf(resolvedOutputPath, { scale: 2 });
      let pageNumber = 1;

      for await (const image of document) {
        // For single page, use the exact path; for multiple pages, append page number
        const finalImagePath = pageNumber === 1
          ? imagePath
          : imagePath.replace(/(\.[^.]+)$/, `-${pageNumber}$1`);

        fs.writeFileSync(finalImagePath, image);
        console.log(`Image generated successfully: ${finalImagePath}`);
        pageNumber++;
      }
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Error generating PDF:", message);
    process.exit(1);
  }
}

main();

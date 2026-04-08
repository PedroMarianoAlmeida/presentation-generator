export interface BuildPdfConfig {
  source: string;
  destiny: string;
  "destiniy-image"?: string;
}

const buildPdfConfig: BuildPdfConfig = {
  source: "src/content/demo/example-1.tsx",
  destiny: "src/content/demo/example-1.pdf",
};

export default buildPdfConfig;

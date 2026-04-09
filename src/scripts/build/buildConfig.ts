export interface BuildConfig {
  source: string;
  destinyPdf?: string;
  destinyImage?: string;
}

const buildConfig: BuildConfig = {
  source: "src/content/demo/example-1.tsx",
  destinyPdf: "src/content/demo/example-1.pdf",
  // destinyImage: "src/content/demo/example-1/imgages.png",
};

export default buildConfig;

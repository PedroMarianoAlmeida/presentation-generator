import { Font } from "@react-pdf/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_FONTS = path.resolve(__dirname, "../../assets/assets/fonts");
const SHARED_FONTS = path.resolve(__dirname, "../../assets/fonts");

// Register all custom fonts used across presentations
export function registerFonts() {
  // Register Kode Mono font
  Font.register({
    family: "KodeMono",
    fonts: [
      {
        src: path.join(ASSETS_FONTS, "Kode_Mono/static/KodeMono-Regular.ttf"),
        fontWeight: "normal",
      },
      {
        src: path.join(ASSETS_FONTS, "Kode_Mono/static/KodeMono-Medium.ttf"),
        fontWeight: "medium",
      },
      {
        src: path.join(ASSETS_FONTS, "Kode_Mono/static/KodeMono-SemiBold.ttf"),
        fontWeight: "semibold",
      },
      {
        src: path.join(ASSETS_FONTS, "Kode_Mono/static/KodeMono-Bold.ttf"),
        fontWeight: "bold",
      },
    ],
  });

  // Register Inter font
  Font.register({
    family: "Inter",
    fonts: [
      {
        src: path.join(ASSETS_FONTS, "Inter/static/Inter_18pt-Regular.ttf"),
        fontWeight: "normal",
      },
      {
        src: path.join(ASSETS_FONTS, "Inter/static/Inter_18pt-Medium.ttf"),
        fontWeight: "medium",
      },
      {
        src: path.join(ASSETS_FONTS, "Inter/static/Inter_18pt-SemiBold.ttf"),
        fontWeight: "semibold",
      },
      {
        src: path.join(ASSETS_FONTS, "Inter/static/Inter_18pt-Bold.ttf"),
        fontWeight: "bold",
      },
      {
        src: path.join(ASSETS_FONTS, "Inter/static/Inter_18pt-Italic.ttf"),
        fontWeight: "normal",
        fontStyle: "italic",
      },
      {
        src: path.join(ASSETS_FONTS, "Inter/static/Inter_18pt-BoldItalic.ttf"),
        fontWeight: "bold",
        fontStyle: "italic",
      },
    ],
  });

  // Register Borel font
  Font.register({
    family: "Borel",
    src: path.join(ASSETS_FONTS, "Borel/Borel-Regular.ttf"),
  });

  // Register Noto Emoji font (using static version for better PDF compatibility)
  Font.register({
    family: "NotoEmoji",
    src: path.join(SHARED_FONTS, "Noto_Emoji/static/NotoEmoji-Regular.ttf"),
  });
}

// Font family constants for consistent usage
export const FONTS = {
  KODE_MONO: "KodeMono",
  INTER: "Inter",
  BOREL: "Borel",
  NOTO_EMOJI: "NotoEmoji",
  HELVETICA: "Helvetica",
  TIMES: "Times-Roman",
  COURIER: "Courier",
} as const;

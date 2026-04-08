import { Font } from "@react-pdf/renderer";

// Register all custom fonts used across presentations
export function registerFonts() {
  // Register Kode Mono font
  Font.register({
    family: "KodeMono",
    fonts: [
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Kode_Mono/static/KodeMono-Regular.ttf",
        fontWeight: "normal",
      },
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Kode_Mono/static/KodeMono-Medium.ttf",
        fontWeight: "medium",
      },
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Kode_Mono/static/KodeMono-SemiBold.ttf",
        fontWeight: "semibold",
      },
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Kode_Mono/static/KodeMono-Bold.ttf",
        fontWeight: "bold",
      },
    ],
  });

  // Register Inter font
  Font.register({
    family: "Inter",
    fonts: [
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Inter/static/Inter_18pt-Regular.ttf",
        fontWeight: "normal",
      },
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Inter/static/Inter_18pt-Medium.ttf",
        fontWeight: "medium",
      },
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf",
        fontWeight: "semibold",
      },
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Inter/static/Inter_18pt-Bold.ttf",
        fontWeight: "bold",
      },
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Inter/static/Inter_18pt-Italic.ttf",
        fontWeight: "normal",
        fontStyle: "italic",
      },
      {
        src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Inter/static/Inter_18pt-BoldItalic.ttf",
        fontWeight: "bold",
        fontStyle: "italic",
      },
    ],
  });

  // Register Borel font
  Font.register({
    family: "Borel",
    src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/assets/fonts/Borel/Borel-Regular.ttf",
  });

  // Register Noto Emoji font (using static version for better PDF compatibility)
  Font.register({
    family: "NotoEmoji",
    src: "/Users/pedroalmeida/Documents/GitHub/personal/presentation-generator/src/content/shared/fonts/Noto_Emoji/static/NotoEmoji-Regular.ttf",
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

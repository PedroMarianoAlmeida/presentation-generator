# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React PDF presentation generator for LinkedIn carousel content. Converts TSX components into PDF slide decks using `@react-pdf/renderer`. Also used for course materials and other presentation formats.

## Key Commands

- `npm run build-pdf` - Generate PDF from the component configured in `src/scripts/pdf/buildPdfConfig.json`
- `npm run watch` - Watch `src/` for changes and auto-regenerate

## Architecture

### Content Flow

1. **Reusable components** (`src/template/components/`) - Layout and content building blocks
2. **Presentation files** (`src/content/`) - TSX files that compose components with content data
3. **Build config** (`src/scripts/pdf/buildPdfConfig.json`) - Points to source TSX and output paths
4. **Generated output** - PDF (and optionally PNG) files co-located with the source TSX

### Build System

`src/scripts/pdf/buildPdf.tsx` dynamically imports the TSX component specified in `buildPdfConfig.json`, renders it with `@react-pdf/renderer`, and optionally converts pages to PNG via `pdf-to-img`.

Config fields:
- `source` - Path to TSX component (relative to project root)
- `destiny` - Output PDF path
- `destiniy-image` - (Optional) Output PNG path. Note: property name is intentionally `destiniy` (typo preserved for compatibility)

### Presentation File Pattern

Each presentation TSX file follows this structure:
1. Import and call `registerFonts()` at top level
2. Build slide components using page wrappers (`HeaderFooter`, `TwoRectangles`, `HandWrittenNoteSlide`)
3. Export a default `Document` component containing `Page` elements (1080x1080)

Three page wrapper patterns:
- **`HeaderFooter`** - Standard slide with header signature and "swipe" footer
- **`TwoRectangles`** - Two-column layout with content area and colored side panel
- **`HandWrittenNoteSlide`** - Flexible card with icon, title, subtitle, and handwritten-style note

### Font System

`src/template/fonts/fontConfig.ts` provides `registerFonts()` and `FONTS` constants (KODE_MONO, INTER, BOREL, NOTO_EMOJI, HELVETICA, TIMES, COURIER).

Font file paths in `fontConfig.ts` are resolved at runtime relative to the file using `import.meta.url`, so the project works on any machine without editing paths.

For emoji support, some presentations also register an emoji source from a CDN (Google Noto Emoji) in addition to the local NotoEmoji font.

## Content Organization

- `src/content/demo/` - Demo/example presentations
- `src/assets/` - Shared assets (fonts, icons)

## Important Conventions

- **Absolute paths for assets**: All image/font references in components use absolute filesystem paths, not relative imports
- **Page size**: Always 1080x1080 for LinkedIn carousels
- **Styling**: Uses `@react-pdf/renderer` `StyleSheet` (React Native-like, not CSS)
- **Icons**: `IconProvider` component (`src/template/components/icons/`) maps string names to SVG components. Inline SVG icon components are in `src/assets/icons/svg-icons.tsx`
- **Signatures**: Default author/role/avatar configured in `src/template/components/signatures/signatureDefault.ts`
- **Components are position-based**: Reusable components handle layout/positioning; colors and content come from props

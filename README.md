# Presentation Generator

Write React components, get PDF and PNG slides. Built for LinkedIn carousels, course materials, and any slide-based content.

[Example slides generated with Presentation Generator](src/content/demo/example-1.pdf)

## How It Works

Each presentation is a TSX file that exports a `Document` with `Page` elements. The build system renders it to PDF (and optionally PNG) using [`@react-pdf/renderer`](https://react-pdf.org/).

```
TSX Component  -->  npm run build-pdf  -->  PDF / PNG slides
```

## Quick Start

```bash
# Clone and install
git clone https://github.com/palmeida-dev/presentation-generator.git
cd presentation-generator
npm install
```

Build the demo:

```bash
npm run build-pdf
```

The generated PDF will appear at `src/content/demo/example-1.pdf`.

## Usage

### 1. Create a presentation file

Create a new `.tsx` file inside `src/content/`. Here's a minimal example:

```tsx
import React from "react";
import { Document, Text, View } from "@react-pdf/renderer";
import { HeaderFooter } from "../../template/components/page-wrappers/HeaderFooter";
import { BulletsList } from "../../template/components/lists/BulletsList";
import { registerFonts } from "../../template/fonts/fontConfig";

registerFonts();

export default function MyPresentation() {
  return (
    <Document>
      <HeaderFooter
        author="Your Name"
        role="Your Tagline"
        backgroundColor="#1A1A2E"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 72, fontWeight: "bold", color: "#EAEAEA" }}>
            My First Slide
          </Text>
          <BulletsList
            bullets={[
              { emoji: "1️⃣", text: "First point" },
              { emoji: "2️⃣", text: "Second point" },
              { emoji: "3️⃣", text: "Third point" },
            ]}
            textColor="#EAEAEA"
            accentColor="#16A085"
            fontSize={32}
            gap={30}
            maxWidth={1000}
            itemWidth={900}
          />
        </View>
      </HeaderFooter>
    </Document>
  );
}
```

### 2. Point the build config to your file

Edit `src/scripts/pdf/buildPdfConfig.ts`:

```ts
export default {
  source: "src/content/my-presentation.tsx",
  destiny: "src/content/my-presentation.pdf",
};
```

Add `"destiniy-image"` to also export PNG:

```ts
export default {
  source: "src/content/my-presentation.tsx",
  destiny: "src/content/my-presentation.pdf",
  "destiniy-image": "src/content/my-presentation.png",
};
```

### 3. Build

```bash
# One-off build
npm run build-pdf

# Watch mode — auto-rebuilds on file changes
npm run watch
```

## Components

### Page Wrappers

These wrap your slide content with consistent layout and structure. Every slide should use one of these (or a raw `<Page>`).

| Component | Description |
|---|---|
| `HeaderFooter` | Standard slide with author header and "Swipe for more" footer |
| `TwoRectangles` | Two-column layout with a content area and colored side panel |
| `HandWrittenNoteSlide` | Card layout with icon, title, subtitle, and a handwritten-style note |

### Content Components

Compose these inside page wrappers to build your slides.

| Component | Description |
|---|---|
| `BulletsList` | List of items with icons or emojis |
| `ItemRow` | Check/X rows, great for do's and don'ts |
| `ContentText` | Text with `title` or `description` variants |
| `ContentImage` | Responsive image from a URL or absolute file path |
| `HeaderSignature` | Author name, role, and avatar in a header bar |
| `SocialMediaSignature` | Compact author signature for footers |
| `IconProvider` | Maps icon names (e.g. `"rocket"`, `"target"`) to SVG components |

### Customization

All components accept color, size, and content via props. There are no hardcoded themes — you control the look of every slide.

To set your default author identity across all slides, edit `src/template/components/signatures/signatureDefault.ts`:

```ts
export const signatureDefault = {
  author: "Your Name",
  avatarSrc: "https://your-avatar-url.com/photo.jpg",
  role: "Your tagline",
};
```

## Project Structure

```
src/
  content/              # Your presentations
    demo/               #   Example presentation
    shared/             #   Shared assets
      assets/fonts/     #     Font files (Inter, Kode Mono, Borel)
      fonts/            #     Noto Emoji font
      icons/            #     Inline SVG icon components
  template/             # Reusable slide system
    components/         #   All slide components
      page-wrappers/    #     HeaderFooter, TwoRectangles, HandWrittenNoteSlide
      lists/            #     BulletsList
      items/            #     ItemRow, BulletItem
      text/             #     ContentText
      images/           #     ContentImage
      headers/          #     HeaderSignature
      signatures/       #     SocialMediaSignature, signatureDefault
      icons/            #     IconProvider
      cards/            #     FinalCard
    fonts/              #   Font registration (fontConfig.ts)
  scripts/pdf/          # Build system
    buildPdf.tsx        #   PDF/PNG renderer
    buildPdfConfig.ts   #   Points to source and output paths
```

## Fonts

The project includes these fonts (all open-source, SIL Open Font License):

- **Inter** — clean sans-serif for body text
- **Kode Mono** — monospace for code/technical content
- **Borel** — handwritten style for notes
- **Noto Emoji** — emoji rendering in PDFs

## MCP Integrations

This project pairs well with MCP (Model Context Protocol) servers for a full content pipeline:

- **Buffer MCP** — schedule and publish carousels directly to LinkedIn
- **Cloudinary MCP** — upload and manage slide images in the cloud

## License

MIT

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import {
  FileHeartIcon,
  MoveRightIcon,
  CodeIcon,
  WandSparklesIcon,
  RocketIcon,
} from "../shared/icons/svg-icons";
import { HeaderSignature } from "../../template/components/headers/HeaderSignature";
import { SocialMediaSignature } from "../../template/components/signatures/SocialMediaSignature";
import { BulletsList } from "../../template/components/lists/BulletsList";
import { ItemRow } from "../../template/components/items/ItemRow";
import { ContentText } from "../../template/components/text/ContentText";
import { ContentImage } from "../../template/components/images/ContentImage";
import { HeaderFooter } from "../../template/components/page-wrappers/HeaderFooter";
import { TwoRectangles } from "../../template/components/page-wrappers/TwoRectangles";
import { HandWrittenNoteSlide } from "../../template/components/page-wrappers/HandWrittenNoteSlide";
import { registerFonts, FONTS } from "../../template/fonts/fontConfig";

// Register fonts including emoji support
registerFonts();

// Register emoji source
Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});

const styles = StyleSheet.create({
  contentTitle: {
    fontSize: 72,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  contentDescription: {
    fontSize: 40,
    lineHeight: 1.5,
    textAlign: "center",
    maxWidth: 900,
  },
});

function ExampleDocument() {
  return (
    <Document>
      {/* Slide 1 - Title (Custom Page + HeaderSignature) */}
      <Page
        size={[1080, 1080]}
        style={{
          width: 1080,
          height: 1080,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A1A2E",
        }}
      >
        <HeaderSignature
          author="Pedro Almeida"
          role="Sharing Code & Career Insights"
          textColor="#EAEAEA"
        />
        <View
          style={{
            flex: 1,
            padding: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ textAlign: "center", alignItems: "center", width: "100%" }}
          >
            <Text
              style={{
                fontSize: 84,
                fontWeight: "bold",
                lineHeight: 1.3,
                marginBottom: 40,
                textAlign: "center",
                color: "#EAEAEA",
              }}
            >
              {"Presentation\nGenerator"}
            </Text>
            <Text
              style={{
                fontSize: 40,
                textAlign: "center",
                lineHeight: 1.4,
                color: "#16A085",
              }}
            >
              Generate slides from React components. A complete guide to
              this repo.
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#EAEAEA" }}>
            Swipe for more
          </Text>
          <MoveRightIcon color="#EAEAEA" width={40} height={40} />
        </View>
      </Page>

      {/* Slide 2 - What Is This? (HeaderFooter + ContentText) */}
      <HeaderFooter
        author="Pedro Almeida"
        role="Sharing Code & Career Insights"
        backgroundColor="#0F3460"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.contentTitle, { color: "#EAEAEA" }]}>
            What Is This?
          </Text>
          <ContentText variant="description" color="#EAEAEA">
            A React PDF presentation generator for LinkedIn carousels, course
            materials, and more.
          </ContentText>
          <View style={{ marginTop: 30 }}>
            <ContentText variant="description" color="#16A085">
              Write TSX components, get PDF/JPEG slides.
            </ContentText>
          </View>
        </View>
      </HeaderFooter>

      {/* Slide 3 - BulletsList with Icons */}
      <HeaderFooter
        author="Pedro Almeida"
        role="Sharing Code & Career Insights"
        backgroundColor="#16213E"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.contentTitle, { color: "#EAEAEA" }]}>
            Page Wrappers
          </Text>
          <BulletsList
            bullets={[
              {
                icon: "clipboard-list",
                text: "HeaderFooter - standard slide layout with header and swipe footer",
              },
              {
                icon: "scale",
                text: "TwoRectangles - two-column layout with colored side panel",
              },
              {
                icon: "target",
                text: "HandWrittenNoteSlide - flexible card with icon, title, subtitle, and note",
              },
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

      {/* Slide 4 - BulletsList with Emojis */}
      <HeaderFooter
        author="Pedro Almeida"
        role="Sharing Code & Career Insights"
        backgroundColor="#2C3A47"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.contentTitle, { color: "#EAEAEA" }]}>
            Content Components
          </Text>
          <BulletsList
            bullets={[
              { emoji: "📝", text: "BulletsList - icons or emojis with text" },
              { emoji: "✅", text: "ItemRow - check/x rows for comparisons" },
              { emoji: "🖼️", text: "ContentImage - responsive image display" },
              {
                emoji: "📖",
                text: "ContentText - title and description variants",
              },
            ]}
            textColor="#EAEAEA"
            accentColor="#16A085"
            fontSize={32}
            gap={30}
            maxWidth={1000}
            itemWidth={900}
            iconMarginTop={30}
          />
        </View>
      </HeaderFooter>

      {/* Slide 5 - TwoRectangles Layout + ContentText */}
      <TwoRectangles
        variant="default"
        slideBackgroundColor="#16A085"
        leftBackgroundColor="#EAEAEA"
        rightBackgroundColor="#1A1A2E"
        arrowColor="#1A1A2E"
      >
        <View style={{ marginBottom: 40, alignSelf: "center" }}>
          <WandSparklesIcon width={60} height={60} color="#1A1A2E" />
        </View>
        <ContentText variant="title" color="#1A1A2E">
          TwoRectangles
        </ContentText>
        <ContentText variant="description" color="#1A1A2E">
          This slide uses the TwoRectangles page wrapper with ContentText
          components inside.
        </ContentText>
        <View style={{ marginTop: 20 }}>
          <ContentText variant="description" color="#16A085">
            Alternating colors between slides creates a smooth transition effect
            in carousels.
          </ContentText>
        </View>
        <View style={{ marginTop: 15 }}>
          <ContentText variant="description" color="#1A1A2E">
            {"See note on code to a demo"}
            {/** https://www.linkedin.com/posts/palmeida-dev_open-source-secret-activity-7377357297896935424-w4Bp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAb9HFEBsP2eXbciI3E5LX0tWfvkOT9bo_U */}
          </ContentText>
        </View>
        <View style={{ position: "absolute", bottom: 20, left: 20 }}>
          <SocialMediaSignature textColor="#1A1A2E" />
        </View>
      </TwoRectangles>

      {/* Slide 6 - ContentImage */}
      <HeaderFooter
        author="Pedro Almeida"
        role="Sharing Code & Career Insights"
        backgroundColor="#2C3A47"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.contentTitle, { color: "#EAEAEA" }]}>
            ContentImage
          </Text>
          <ContentImage src="https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Text
            style={{
              fontSize: 28,
              marginTop: 20,
              textAlign: "center",
              color: "#16A085",
            }}
          >
            Use ContentImage to display images in your slides
          </Text>
          <Text
            style={{
              fontSize: 24,
              marginTop: 15,
              textAlign: "center",
              fontStyle: "italic",
              color: "#EAEAEA",
              opacity: 0.7,
            }}
          >
            Supports absolute file paths or direct image URLs from the internet
          </Text>
        </View>
      </HeaderFooter>

      {/* Slide 7 - HandWrittenNoteSlide */}
      <HandWrittenNoteSlide
        backgroundColor="#FFD93D"
        variant="content"
        icon={<RocketIcon width={60} height={60} color="#FFFFFF" />}
        iconBackgroundColor="#16A085"
        title="HandWrittenNoteSlide"
        subtitle="A flexible layout with icon, title, subtitle, and note"
        note="This is a handwritten-style note!"
        footer={
          <View style={{ alignItems: "flex-start" }}>
            <SocialMediaSignature textColor="#2C3E50" />
          </View>
        }
      >
        <Text>Card Content</Text>
      </HandWrittenNoteSlide>

      {/* Slide 8 - ItemRow Component */}
      <HeaderFooter
        author="Pedro Almeida"
        role="Sharing Code & Career Insights"
        backgroundColor="#1A1A2E"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.contentTitle, { color: "#EAEAEA" }]}>
            ItemRow
          </Text>
          <Text
            style={{
              fontSize: 32,
              marginBottom: 30,
              textAlign: "center",
              fontStyle: "italic",
              color: "#16A085",
            }}
          >
            Perfect for do's and don'ts
          </Text>
          <View style={{ gap: 20, width: 800 }}>
            <ItemRow
              type="check"
              text="Compose slides with reusable components"
              textColor="#EAEAEA"
            />
            <ItemRow
              type="check"
              text="Use HeaderFooter or TwoRectangles wrappers"
              textColor="#EAEAEA"
            />
            <ItemRow
              type="check"
              text="Customize colors, fonts, and icons via props"
              textColor="#EAEAEA"
            />
            <ItemRow
              type="x"
              text="Hardcode styles across every slide"
              textColor="#EAEAEA"
            />
            <ItemRow
              type="x"
              text="Skip registerFonts() at the top"
              textColor="#EAEAEA"
            />
          </View>
        </View>
      </HeaderFooter>

      {/* Slide 9 - signatureDefault */}
      <HeaderFooter
        author="Pedro Almeida"
        role="Sharing Code & Career Insights"
        backgroundColor="#16213E"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.contentTitle, { color: "#EAEAEA" }]}>
            Your Signature
          </Text>
          <Text
            style={{
              fontSize: 32,
              marginBottom: 30,
              textAlign: "center",
              color: "#16A085",
            }}
          >
            Edit signatureDefault.ts to set your identity
          </Text>
          <BulletsList
            bullets={[
              {
                icon: "users",
                text: "author - your name displayed on every slide",
              },
              { icon: "speech", text: "role - your tagline or description" },
              {
                icon: "search",
                text: "avatarSrc - URL or absolute path to your photo",
              },
            ]}
            textColor="#EAEAEA"
            accentColor="#16A085"
            fontSize={32}
            gap={30}
            maxWidth={1000}
            itemWidth={900}
          />
          <Text
            style={{
              fontSize: 24,
              marginTop: 30,
              textAlign: "center",
              fontStyle: "italic",
              color: "#EAEAEA",
              opacity: 0.7,
            }}
          >
            All header and signature components use these defaults automatically
          </Text>
        </View>
      </HeaderFooter>

      {/* Slide 10 - Generating Output */}
      <HeaderFooter
        author="Pedro Almeida"
        role="Sharing Code & Career Insights"
        backgroundColor="#0F3460"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.contentTitle, { color: "#EAEAEA" }]}>
            Generating Output
          </Text>
          <BulletsList
            bullets={[
              {
                icon: "code",
                text: "Configure buildPdfConfig.json with source and destiny paths",
              },
              {
                icon: "target",
                text: 'Run "npm run build-pdf" to generate your PDF',
              },
              {
                icon: "repeat",
                text: 'Run "npm run watch" to auto-regenerate on changes',
              },
            ]}
            textColor="#EAEAEA"
            accentColor="#16A085"
            fontSize={32}
            gap={30}
            maxWidth={1000}
            itemWidth={900}
          />
          <Text
            style={{
              fontSize: 28,
              marginTop: 30,
              textAlign: "center",
              color: "#16A085",
            }}
          >
            Add "destiniy-image" to config for PNG export
          </Text>
        </View>
      </HeaderFooter>

      {/* Slide 8 - MCP Integrations */}
      <HeaderFooter
        author="Pedro Almeida"
        role="Sharing Code & Career Insights"
        backgroundColor="#2D4059"
        textColor="#EAEAEA"
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.contentTitle, { color: "#EAEAEA" }]}>
            {"MCP\nIntegrations"}
          </Text>
          <Text
            style={[
              styles.contentDescription,
              { color: "#EAEAEA", marginBottom: 30 },
            ]}
          >
            This project works best paired with MCP servers:
          </Text>
          <BulletsList
            bullets={[
              {
                icon: "git-branch",
                text: "Buffer MCP - schedule and publish carousels directly to LinkedIn",
              },
              {
                icon: "search",
                text: "Cloudinary MCP - upload and manage slide images in the cloud",
              },
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

      {/* Slide 9 - CTA (Custom Page + HeaderSignature) */}
      <Page
        size={[1080, 1080]}
        style={{
          width: 1080,
          height: 1080,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A1A2E",
        }}
      >
        <HeaderSignature
          author="Pedro Almeida"
          role="Sharing Code & Career Insights"
          textColor="#EAEAEA"
        />
        <View
          style={{
            flex: 1,
            padding: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 72,
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: 1.2,
                marginBottom: 40,
                color: "#EAEAEA",
              }}
            >
              {"Start Building\nYour Slides"}
            </Text>
            <Text
              style={{
                fontSize: 36,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 30,
                color: "#16A085",
              }}
            >
              Check the README and the example files to get started!
            </Text>
            <FileHeartIcon
              style={{
                width: 32,
                height: 32,
                alignSelf: "center",
                marginTop: 20,
              }}
              color="#16A085"
              width={32}
              height={32}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ExampleDocument;

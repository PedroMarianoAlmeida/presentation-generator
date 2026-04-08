import React, { ReactNode } from "react";
import { Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { FONTS } from "../../fonts/fontConfig";

interface HandWrittenNoteSlideProps {
  children: ReactNode;
  backgroundColor: string;
  variant: "cover" | "content";
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  note?: string;
  footer?: ReactNode;
  iconBackgroundColor?: string;
}

const styles = StyleSheet.create({
  page: {
    width: 1080,
    height: 1080,
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  iconTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 40,
  },
  titleContainer: {
    flex: 1,
  },
  childrenContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 40,
  },
  noteContainer: {
    position: "absolute",
    bottom: 180,
    left: 60,
    transform: "rotate(-2deg)",
  },
  footerContainer: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    left: 0,
    paddingHorizontal: 60,
  },
});

export const HandWrittenNoteSlide = ({
  children,
  backgroundColor,
  variant,
  icon,
  title,
  subtitle,
  note,
  footer,
  iconBackgroundColor = "#FF9BA8",
}: HandWrittenNoteSlideProps) => {
  const pageStyle = {
    ...styles.page,
    backgroundColor,
    padding: variant === "cover" ? 80 : 60,
  };

  return (
    <Page size={[1080, 1080]} style={pageStyle}>
      {/* Icon and Title Row */}
      {(icon || title) && (
        <View style={styles.iconTitleRow}>
          {icon && (
            <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
              {icon}
            </View>
          )}
          {title && (
            <View style={styles.titleContainer}>
              <Text
                style={[
                  handWrittenNoteSlideStyles.title,
                  variant === "cover"
                    ? handWrittenNoteSlideStyles.coverTitle
                    : handWrittenNoteSlideStyles.contentTitle,
                  { fontFamily: "Helvetica" },
                ]}
              >
                {title}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Subtitle */}
      {subtitle && (
        <Text style={[handWrittenNoteSlideStyles.subtitle, { fontFamily: "Helvetica" }]}>
          {subtitle}
        </Text>
      )}

      {/* Children Content */}
      <View style={styles.childrenContainer}>{children}</View>

      {/* Note */}
      {note && (
        <View style={styles.noteContainer}>
          <Text
            style={[
              handWrittenNoteSlideStyles.handwrittenText,
              { fontFamily: FONTS.BOREL },
            ]}
          >
            {note}
          </Text>
        </View>
      )}

      {/* Footer */}
      {footer && <View style={styles.footerContainer}>{footer}</View>}
    </Page>
  );
};

export const handWrittenNoteSlideStyles = StyleSheet.create({
  // Title styles
  title: {
    fontWeight: "bold",
    color: "#2C3E50",
    lineHeight: 1.1,
  },

  coverTitle: {
    fontSize: 72,
  },

  contentTitle: {
    fontSize: 64,
  },

  // Subtitle styles
  subtitle: {
    fontSize: 32,
    color: "#2C3E50",
    marginBottom: 20,
    textAlign: "center",
  },

  // Handwritten text styles
  handwrittenText: {
    fontSize: 28,
    color: "#2C3E50",
  },
});

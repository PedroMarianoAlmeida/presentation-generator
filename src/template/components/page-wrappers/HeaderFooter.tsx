import React from "react";
import { Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { HeaderSignature } from "../headers/HeaderSignature";
import { MoveRightIcon } from "../../../content/shared/icons/svg-icons";

interface HeaderFooterProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
  backgroundColor?: string;
  textColor?: string;
  isLast?: boolean;
  footerContent?: React.ReactNode;
}

const styles = StyleSheet.create({
  page: {
    width: 1080,
    height: 1080,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    padding: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  swipeText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  arrow: {
    width: 40,
    height: 40,
  },
});

export function HeaderFooter({
  children,
  author = "Pedro Almeida",
  role = "Sharing Code & Career Insights",
  backgroundColor = "#F5F5DC",
  textColor = "#000000",
  isLast = false,
  footerContent,
}: HeaderFooterProps) {
  const pageStyle = {
    ...styles.page,
    backgroundColor,
  };

  return (
    <Page size={[1080, 1080]} style={pageStyle}>
      <HeaderSignature
        author={author}
        role={role}
        textColor={textColor}
      />

      <View style={styles.content}>
        {children}
      </View>

      {!isLast && (
        <View style={styles.footer}>
          {footerContent ? (
            footerContent
          ) : (
            <>
              <Text style={[styles.swipeText, { color: textColor }]}>
                Swipe for more
              </Text>
              <MoveRightIcon
                style={styles.arrow}
                color={textColor}
                width={40}
                height={40}
              />
            </>
          )}
        </View>
      )}
    </Page>
  );
}
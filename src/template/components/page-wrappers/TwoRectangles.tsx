import React, { ReactNode } from "react";
import { View, Page, StyleSheet } from "@react-pdf/renderer";
import { CircleArrowRightIcon } from "../../../content/shared/icons/svg-icons";

interface TwoRectanglesProps {
  children: ReactNode;
  variant?: "first" | "default" | "last";
  slideBackgroundColor: string;
  leftBackgroundColor: string;
  rightBackgroundColor: string;
  arrowColor: string;
}

const styles = StyleSheet.create({
  page: {
    width: 1080,
    height: 1080,
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },
  contentSlide: {
    position: "relative",
  },
  leftCard: {
    position: "absolute",
    top: 40,
    left: 0,
    width: 668,
    height: 1000,
    backgroundColor: "white",
    borderRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightArea: {
    position: "absolute",
    top: 40,
    right: 0,
    width: 372,
    height: 1000,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  contentArrowContainer: {
    position: "absolute",
    bottom: 50,
    right: 60,
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export function TwoRectangles({
  children,
  variant = "default",
  slideBackgroundColor,
  leftBackgroundColor,
  rightBackgroundColor,
  arrowColor,
}: TwoRectanglesProps) {
  return (
    <Page
      size={[1080, 1080]}
      style={[
        styles.page,
        styles.contentSlide,
        { backgroundColor: slideBackgroundColor },
      ]}
    >
      {variant !== "last" && (
        <View
          style={[styles.rightArea, { backgroundColor: rightBackgroundColor }]}
        />
      )}
      {variant === "default" && (
        <View
          style={[styles.leftCard, { backgroundColor: leftBackgroundColor }]}
        >
          {children}
        </View>
      )}
      {variant === "first" && <View style={{ flex: 1 }}>{children}</View>}
      {variant === "last" && (
        <View
          style={[
            styles.leftCard,
            { backgroundColor: leftBackgroundColor, width: 1040 },
          ]}
        >
          {children}
        </View>
      )}
      {variant !== "last" && (
        <View style={styles.contentArrowContainer}>
          <CircleArrowRightIcon color={arrowColor} width={40} height={40} />
        </View>
      )}
    </Page>
  );
}

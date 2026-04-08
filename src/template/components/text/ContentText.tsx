import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

interface ContentTextProps {
  children: React.ReactNode;
  variant: "title" | "description";
  color?: string;
}

const styles = StyleSheet.create({
  contentTitle: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    lineHeight: 1.1,
    textAlign: "center",
  },
  contentDescription: {
    fontSize: 22,
    color: "#666",
    lineHeight: 1.5,
    textAlign: "center",
  },
});

export function ContentText({ children, variant, color }: ContentTextProps) {
  const baseStyle = variant === "title" ? styles.contentTitle : styles.contentDescription;
  const textColor = color || baseStyle.color;

  return <Text style={[baseStyle, { color: textColor }]}>{children}</Text>;
}
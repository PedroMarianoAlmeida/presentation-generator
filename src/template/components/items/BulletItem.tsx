import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

interface BulletItemProps {
  icon: React.ReactNode;
  text: string;
  subtitle?: string;
  textColor?: string;
  subtitleColor?: string;
  fontSize?: number;
  width?: number;
  gap?: number;
  marginTop?: number;
  iconMarginTop?: number;
}

const styles = StyleSheet.create({
  bulletItemWithSubtitle: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: 450,
    gap: 15,
  },
  bulletItemSingleLine: {
    flexDirection: "row",
    alignItems: "center", 
    width: 1000,
    gap: 15,
  },
  bulletText: {
    fontSize: 24,
    lineHeight: 1.2,
    flex: 1,
  },
  bulletSubtitle: {
    fontSize: 11,
    lineHeight: 1.1,
    color: "#666666",
    marginTop: 100,
    fontStyle: "italic",
  },
  bulletTextContainer: {
    flex: 1,
  },
});

export function BulletItem({
  icon,
  text,
  subtitle,
  textColor = "#000000",
  subtitleColor = "#666666",
  fontSize = 36,
  width,
  gap = 15,
  marginTop = 100,
  iconMarginTop = 0,
}: BulletItemProps) {
  const containerStyle = subtitle
    ? { ...styles.bulletItemWithSubtitle, width: width || 450, gap }
    : { ...styles.bulletItemSingleLine, width: width || 1000, gap };

  return (
    <View style={containerStyle}>
      <View style={{ marginTop: iconMarginTop }}>
        {icon}
      </View>
      <View style={styles.bulletTextContainer}>
        <Text style={[styles.bulletText, { color: textColor, fontSize: fontSize }]}>
          {text}
        </Text>
        {subtitle && (
          <Text style={[styles.bulletSubtitle, { color: subtitleColor, fontSize: fontSize * 0.72, marginTop }]}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
}

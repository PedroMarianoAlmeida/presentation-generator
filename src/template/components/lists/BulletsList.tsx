import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { BulletItem } from "../items/BulletItem";
import { IconProvider } from "../icons/IconProvider";

interface BulletData {
  icon?: string;
  emoji?: string;
  text: string;
  subtitle?: string;
}

interface BulletsListProps {
  bullets: BulletData[];
  textColor?: string;
  accentColor?: string;
  subtitleColor?: string;
  fontSize?: number;
  gap?: number;
  maxWidth?: number;
  paddingLeft?: number;
  itemWidth?: number;
  itemGap?: number;
  subtitleMarginTop?: number;
  iconMarginTop?: number;
}

const styles = StyleSheet.create({
  bulletsContainer: {
    gap: 40,
    alignItems: "flex-start",
    maxWidth: 500,
    paddingLeft: 20,
  },
});

export function BulletsList({
  bullets,
  textColor = "#000000",
  accentColor = "#9BAE23",
  subtitleColor = "#666666",
  fontSize,
  gap = 40,
  maxWidth = 500,
  paddingLeft = 20,
  itemWidth,
  itemGap,
  subtitleMarginTop,
  iconMarginTop,
}: BulletsListProps) {
  // Use a darker green for better contrast
  const iconColor = accentColor === "#C4D62E" ? "#9BAE23" : accentColor;

  return (
    <View style={[styles.bulletsContainer, { gap, maxWidth, paddingLeft }]}>
      {bullets.map((bullet, idx) => {
        // Determine whether to render an icon or emoji
        const emojiSize = fontSize || 32;
        const iconElement = bullet.emoji ? (
          <View style={{ width: emojiSize, height: emojiSize, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: emojiSize, lineHeight: 1 }}>
              {bullet.emoji}
            </Text>
          </View>
        ) : bullet.icon ? (
          <IconProvider
            iconType={bullet.icon}
            color={iconColor}
            hasSubtitle={!!bullet.subtitle}
          />
        ) : null;

        return (
          <BulletItem
            key={idx}
            icon={iconElement}
            text={bullet.text}
            subtitle={bullet.subtitle}
            textColor={textColor}
            subtitleColor={subtitleColor}
            fontSize={fontSize}
            width={itemWidth}
            gap={itemGap}
            marginTop={subtitleMarginTop}
            iconMarginTop={iconMarginTop}
          />
        );
      })}
    </View>
  );
}

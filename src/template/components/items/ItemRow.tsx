import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { CheckIcon, XIcon } from "../../../assets/icons/svg-icons";

interface ItemRowProps {
  text: string;
  type: "check" | "x";
  textColor?: string;
}

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    gap: 10,
  },
  itemText: {
    fontSize: 24,
  },
});

export function ItemRow({ text, type, textColor = "#666" }: ItemRowProps) {
  const Icon = type === "check" ? CheckIcon : XIcon;
  const iconColor = type === "check" ? "#22c55e" : "#ef4444";

  return (
    <View style={styles.itemRow}>
      <Icon color={iconColor} width={20} height={20} />
      <Text style={[styles.itemText, { color: textColor }]}>{text}</Text>
    </View>
  );
}
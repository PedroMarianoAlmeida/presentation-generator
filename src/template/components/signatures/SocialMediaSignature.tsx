import React from "react";
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { signatureDefault } from "./signatureDefault";

interface SocialMediaSignatureProps {
  author?: string;
  role?: string;
  avatarSrc?: string;
  textColor?: string;
  fontFamily?: string;
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    zIndex: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  authorInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  authorName: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "KodeMono",
  },
  authorRole: {
    fontSize: 28,
    fontFamily: "KodeMono",
  },
});

export function SocialMediaSignature({
  author = signatureDefault.author,
  role = signatureDefault.role,
  avatarSrc = signatureDefault.avatarSrc,
  textColor = "#00FF41",
  fontFamily = "KodeMono",
}: SocialMediaSignatureProps) {
  return (
    <View style={styles.header}>
      <Image style={styles.avatar} src={avatarSrc} />
      <View style={styles.authorInfo}>
        <Text style={[styles.authorName, { color: textColor, fontFamily }]}>
          {author}
        </Text>
        <Text style={[styles.authorRole, { color: textColor, fontFamily }]}>
          {role}
        </Text>
      </View>
    </View>
  );
}
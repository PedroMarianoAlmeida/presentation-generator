import React from "react";
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { signatureDefault } from "../signatures/signatureDefault";

interface HeaderSignatureProps {
  author?: string;
  role?: string;
  avatarSrc?: string;
  textColor?: string;
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
    paddingBottom: 20,
  },
  authorInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  authorName: {
    fontSize: 28,
    fontWeight: "bold",
  },
  authorRole: {
    fontSize: 28,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export function HeaderSignature({
  author = signatureDefault.author,
  role = signatureDefault.role,
  avatarSrc = signatureDefault.avatarSrc,
  textColor = "#000000",
}: HeaderSignatureProps) {
  return (
    <View style={styles.header}>
      <View style={styles.authorInfo}>
        <Text style={[styles.authorName, { color: textColor }]}>
          {author}
        </Text>
        <Text style={[styles.authorRole, { color: textColor }]}>
          {role}
        </Text>
      </View>
      <Image style={styles.avatar} src={avatarSrc} />
    </View>
  );
}
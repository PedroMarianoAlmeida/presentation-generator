import React from "react";
import { Image, StyleSheet } from "@react-pdf/renderer";

interface ContentImageProps {
  src: string;
  variant?: "default" | "square";
}

const styles = StyleSheet.create({
  contentImage: {
    width: 486,
    height: 438,
    borderRadius: 15,
    marginBottom: 30,
    alignSelf: "center",
  },
  contentImageSquare: {
    width: 480,
    height: 396,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: "center",
    objectFit: "cover",
    objectPosition: "0% 80%",
  },
});

export function ContentImage({ src, variant = "default" }: ContentImageProps) {
  const imageStyle = variant === "square" ? styles.contentImageSquare : styles.contentImage;

  return <Image style={imageStyle} src={src} />;
}
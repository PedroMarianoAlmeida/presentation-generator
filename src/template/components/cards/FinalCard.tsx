import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

interface FinalCardProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  finalCard: {
    position: "absolute",
    top: 40,
    left: 40,
    right: 40,
    bottom: 200,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  finalTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 1.1,
  },
  finalSubtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 1.4,
  },
});

export function FinalCard({ children }: FinalCardProps) {
  return <View style={styles.finalCard}>{children}</View>;
}

// Export styles for external use if needed
export { styles as finalCardStyles };
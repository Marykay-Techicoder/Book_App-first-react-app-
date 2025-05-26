import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Meeting Roommates</Text>
      <Text style={styles.content}>
        Alex meets two roommates: Claire, a tech genius, and Jordan, an aspiring
        athlete. Despite their differences, the trio bonds over late-night
        snacks and shared dreams. Alex begins to feel more at home.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});

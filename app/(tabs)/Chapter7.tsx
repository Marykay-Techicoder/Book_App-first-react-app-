import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter7() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> The Big Challenge</Text>
      <Text style={styles.content}>
        Alex learns about a campus-wide storytelling competition. Nervous but
        determined, Alex enters, crafting a story inspired by personal struggles
        and the journey so far.
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

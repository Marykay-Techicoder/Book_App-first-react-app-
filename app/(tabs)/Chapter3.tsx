import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter3() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Secret Talent</Text>
      <Text style={styles.content}>
        In a campus open-mic night, Claire discovers Alex’s hidden talent for
        storytelling. Encouraged by the roommates, Alex reluctantly shares a
        story that captivates the audience, earning applause and newfound
        confidence.
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

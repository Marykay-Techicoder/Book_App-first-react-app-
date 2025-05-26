import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter8() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Finding Confidence</Text>
      <Text style={styles.content}>
        With help from Dr. Evans and the roommates, Alex refines the story and
        practices public speaking. Alex starts to believe in their own
        abilities.
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

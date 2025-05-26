import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter4() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A Rough Start</Text>
      <Text style={styles.content}>
        Academics prove challenging. Alex fails the first test and considers
        quitting, but a motivational call from a supportive parent inspires a
        fresh start.
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

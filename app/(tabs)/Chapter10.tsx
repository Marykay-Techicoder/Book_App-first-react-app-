import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter10() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Looking Back, Moving Forward</Text>
      <Text style={styles.content}>
        The story ends with Alex reflecting on the transformative campus
        journey, from a shy freshman to a confident storyteller, ready to face
        new challenges.
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

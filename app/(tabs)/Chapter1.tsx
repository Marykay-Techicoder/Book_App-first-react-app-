import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Day Jitters</Text>
      <Text style={styles.content}>
        A small-town student, Alex, arrives at a big city university.
        Overwhelmed by the sheer size of the campus and the diversity of
        students, Alex feels out of place and struggles to navigate the new
        environment.
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

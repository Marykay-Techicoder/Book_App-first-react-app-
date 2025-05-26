import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter6() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Friendship Pact</Text>
      <Text style={styles.content}>
        Claire, Jordan, and Alex form a pact to help each other succeed. They
        organize study groups, attend events together, and support each other's
        goals.
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

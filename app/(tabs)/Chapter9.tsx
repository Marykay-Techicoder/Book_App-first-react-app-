import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter9() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> The Unexpected Reward</Text>
      <Text style={styles.content}>
        On the day of the competition, Alex delivers a moving performance that
        resonates with the audience. Though Alex doesn't win first place, a
        publisher in the audience offers to collaborate on a book..
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

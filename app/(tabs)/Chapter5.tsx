import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chapter5() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Mysterious Professor</Text>
      <Text style={styles.content}>
        Alex befriends Dr. Evans, an enigmatic literature professor with a
        reputation for being tough but fair. Dr. Evans becomes a mentor,
        teaching Alex the art of storytelling and the importance of
        perseverance.
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>todoAPP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    // marginTop: "40%",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#f35a5a",
    marginBottom: 44,
  },
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#003f5c",
    fontFamily: "Arial",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  linkItem: {
    backgroundColor: "#f35a5a",
    width: "90%",
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  linkItemText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

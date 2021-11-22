import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <View>
      <Text>Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import axios from "axios";
import React from "react";
import { StyleSheet, View } from "react-native";
import Router from "./src/Router/Router";

// http://192.168.0.21:5002/api/todos
// axios
//   .get("http://192.168.0.21:5002/api/todos")
//   .then((data) => console.log(data.data));

export default function App() {
  return (
    <View style={styles.container}>
      <Router />
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

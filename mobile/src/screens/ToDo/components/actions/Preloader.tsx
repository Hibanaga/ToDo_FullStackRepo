import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Preloader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        style={styles.indicator}
        color="#f35a5a"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    zIndex: 20,
  },
  indicator: {
    zIndex: 21,
    position: "absolute",
    left: "45%",
    top: "45%",
  },
});

export default Preloader;

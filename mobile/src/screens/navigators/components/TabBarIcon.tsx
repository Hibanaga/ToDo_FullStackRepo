import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

interface IStateProp {
  src: HTMLImageElement;
  title: string;
  focused: any;
}

export default function TabBarIcon({ src, title, focused }: IStateProp) {
  return (
    <View style={styles.container}>
      <Image source={src} style={styles.img} resizeMode="contain" />
      <Text
        style={
          focused
            ? { ...styles.textRoute, ...styles.activeTextRoute }
            : styles.textRoute
        }
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  img: {
    width: 30,
    height: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textRoute: {
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
  activeTextRoute: {
    color: "green",
  },
});

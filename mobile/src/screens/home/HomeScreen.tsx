import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IToDoScreenProp } from "../../types/navigation.type";

const HomeScreen: React.FC<IToDoScreenProp> = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>todoAPP</Text>

      <View>
        <TouchableOpacity
          style={styles.linkItem}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={styles.linkItemText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkItem}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.linkItemText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    // marginTop: "40%",
    fontSize: 48,
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
    width: 200,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  linkItemText: {
    fontWeight: "700",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
});

export default HomeScreen;

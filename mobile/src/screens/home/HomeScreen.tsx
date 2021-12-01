import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IToDoScreenProp } from "../../types/navigation.type";
import { getTokenInfo } from "../ToDo/utils/useToken";
import instance from "../../service/user.service";

const HomeScreen: React.FC<IToDoScreenProp> = ({ navigation }) => {
  const { token, isExist } = getTokenInfo();

  useEffect(() => {
    instance
      .auth(token, isExist)
      .then(
        (status: number) => status === 200 && navigation.navigate("ToDoScreen")
      );
  }, [token]);

  const navigationLoginHandler = () => {
    return navigation.navigate("LoginScreen");
  };

  const navigationRegisterHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.title}>todoAPP</Text>
        <View>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={navigationRegisterHandler}
          >
            <Text style={styles.linkItemText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={navigationLoginHandler}
          >
            <Text style={styles.linkItemText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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

export default React.memo(HomeScreen);

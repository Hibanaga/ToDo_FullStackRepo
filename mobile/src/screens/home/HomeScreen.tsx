import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useLoginContext } from "../Auth/hooks/contextLoggin";
import { getTokenInfo } from "../ToDo/utils/useToken";
import instance from "../../service/user.service";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { setLoggenIn } = useLoginContext();
  const { token, isExist } = getTokenInfo();
  useEffect(() => {
    instance
      .auth(token, isExist)
      .then((status: number) => status === 200 && setLoggenIn(true));
  }, [token]);
  const { navigate } = useNavigation<{ navigate: (p: string) => void }>();
  const navigationLoginHandler = () => navigate("LoginScreen");
  const navigationRegisterHandler = () => navigate("RegisterScreen");

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

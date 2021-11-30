import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IStateProp {
  errorMessage: string | undefined;
}

const ErrorNotification = ({ errorMessage }: IStateProp) => {
  return (
    <View>
      {errorMessage !== undefined && errorMessage !== "" ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: { fontSize: 10, color: "red" },
});

export default ErrorNotification;

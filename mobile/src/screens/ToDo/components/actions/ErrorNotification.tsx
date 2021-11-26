import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IStateProp {
  errorMessage: string | undefined;
}

const ErrorNotification = ({ errorMessage }: IStateProp) => {
  return (
    <View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: { fontSize: 10, color: "red" },
});

export default ErrorNotification;

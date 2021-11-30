import React from "react";
import { View, Text } from "react-native";

interface IStateProp {
  message: string | undefined;
}

export default function ErrorNotifications({ message }: IStateProp) {
  return <View>{message ? <Text>{message}</Text> : null}</View>;
}

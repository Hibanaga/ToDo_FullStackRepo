import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ToDoCreateScreen from "../ToDo/components/CRUD/ToDoCreateScreen";
import ToDoEditScreen from "../ToDo/components/CRUD/ToDoEditScreen";
import ToDoContainer from "../ToDo/ToDoContainer";

export type AuthStackParamList = {
  TodoAdd: undefined;
  ToDoScreen: undefined;
  ToDoEdit: { _id: string };
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="ToDoScreen" component={ToDoContainer} />
      <AuthStack.Screen name="TodoAdd" component={ToDoCreateScreen} />
      <AuthStack.Screen name="ToDoEdit" component={ToDoEditScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthFlowNavigator;

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ToDoCreateScreen from "../ToDo/components/CRUD/ToDoCreateScreen";
import ToDoEditScreen from "../ToDo/components/CRUD/ToDoEditScreen";
import ToDoContainer from "../ToDo/ToDoContainer";
import LoginScreen from "../Auth/login/LoginScreen";
import RegisterScreen from "../Auth/register/RegisterScreen";
import HomeScreen from "../home/HomeScreen";

export type AuthStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  TodoAdd: undefined;
  ToDoScreen: undefined;
  ToDoEdit: { _id: string };
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="ToDoScreen" component={ToDoContainer} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <AuthStack.Screen name="TodoAdd" component={ToDoCreateScreen} />
      <AuthStack.Screen name="ToDoEdit" component={ToDoEditScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthFlowNavigator;

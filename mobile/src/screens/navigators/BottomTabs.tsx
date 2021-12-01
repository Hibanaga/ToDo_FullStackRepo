import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthStackParamList } from "../../types/navigation.type";
import LoginScreen from "../Auth/login/LoginScreen";
import RegisterScreen from "../Auth/register/RegisterScreen";
import HomeScreen from "../home/HomeScreen";
import ToDoCreateScreen from "../ToDo/components/CRUD/ToDoCreateScreen";
import ToDoEditScreen from "../ToDo/components/CRUD/ToDoEditScreen";
import ToDoContainer from "../ToDo/ToDoContainer";
import TabBarIcon from "./components/TabBarIcon";
import { home, login, register, add, all } from "./images/imageExporter";

const Tab = createBottomTabNavigator<AuthStackParamList>();

interface IStateProp {
  isLoggenIn: boolean;
}

const HomeBottomTabs = ({ isLoggenIn }: IStateProp) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
    >
      {isLoggenIn ? (
        <>
          <Tab.Screen
            name="ToDoScreen"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} src={all} title="ToDos" />
              ),
            }}
            component={ToDoContainer}
          />

          <Tab.Screen
            name="TodoAdd"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} src={add} title="Add" />
              ),
            }}
            component={ToDoCreateScreen}
          />

          <Tab.Screen
            name="ToDoEdit"
            options={{
              tabBarLabel: "",
              tabBarItemStyle: styles.hiddenScreenButton,
            }}
            component={ToDoEditScreen}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="HomeScreen"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} src={home} title="Home" />
              ),
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="LoginScreen"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} src={login} title="Login" />
              ),
            }}
            component={LoginScreen}
          />
          <Tab.Screen
            name="RegisterScreen"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} src={register} title="Register" />
              ),
            }}
            component={RegisterScreen}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 4,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 90,
  },
  hiddenScreenButton: {
    display: "none",
  },
});

export default HomeBottomTabs;

import React from "react";
import { Route, Routes } from "react-router-native";
import Login from "../screens/Auth/login/Login";
import RegisterScreen from "../screens/Auth/register/RegisterScreen";
import HomeScreen from "../screens/home/HomeScreen";
import { home, login, register } from "./routes";

export default function Router() {
  return (
    <Routes>
      <Route path={home} element={<HomeScreen />} />
      <Route path={login} element={<Login />} />
      <Route path={register} element={<RegisterScreen />} />
    </Routes>
  );
}

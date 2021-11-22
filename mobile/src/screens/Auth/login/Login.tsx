import React, { useCallback } from "react";

import LoginScreen from "./LoginScreen";

export default function Login() {
  const submitLoginFormHandler = useCallback((objValues: any) => {
    console.log(objValues);
  }, []);

  return <LoginScreen onSubmitLoginFormHandler={submitLoginFormHandler} />;
}

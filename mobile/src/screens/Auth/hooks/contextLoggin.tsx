import { createContext, useContext } from "react";

export type TypeContextLogin = {
  isLoggenIn: boolean;
  setLoggenIn: (prop: boolean) => void;
};

export const LogInContext = createContext<TypeContextLogin>({
  isLoggenIn: false,
  setLoggenIn: () => {},
});

export const useLoginContext = () => useContext(LogInContext);

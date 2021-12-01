import { StackNavigationProp } from "@react-navigation/stack";

export type AuthStackParamList = {
  HomeScreen: { onSetLoggenIn: (p: boolean) => void } | undefined;
  LoginScreen: { onSetLoggenIn: (p: boolean) => void } | undefined;
  RegisterScreen: { onSetLoggenIn: (p: boolean) => void } | undefined;
  TodoAdd: undefined;
  ToDoScreen: undefined;
  ToDoEdit: { _id: string };
};

type ToDoAddScreenNavigationProps = StackNavigationProp<AuthStackParamList>;
interface IToDoScreenProp {
  navigation: ToDoAddScreenNavigationProps;
}

export { IToDoScreenProp };

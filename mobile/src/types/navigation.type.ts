import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../screens/navigators/index";

type ToDoAddScreenNavigationProps = StackNavigationProp<AuthStackParamList>;
interface IToDoScreenProp {
  navigation: ToDoAddScreenNavigationProps;
}

export { IToDoScreenProp };

import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../screens/navigators/index";

type ToDoAddScreenNavigationProps = StackNavigationProp<AuthStackParamList>;
interface IToDoScreenProp {
  navigation: ToDoAddScreenNavigationProps;
}

interface IRedirectScreenProp {
  navigation: ToDoAddScreenNavigationProps;
  firstScreenRouteName: string;
  firstScreenRouteTitle: string;
  secondScreenRouteName: string;
  secondScreenRouteTitle: string;
}

export { IToDoScreenProp, IRedirectScreenProp };

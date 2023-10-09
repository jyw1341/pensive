import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackNavigatorParamList = {
  Welcome: undefined;
  SignUp: undefined;
  LogIn: undefined;
};

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  "SignUp",
  "LogIn"
>;

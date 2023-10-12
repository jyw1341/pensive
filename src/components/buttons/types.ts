import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  $backgroundColor?: string;
  $rounded?: boolean;
  $outlined?: boolean;
  $shadow?: boolean;
}

export interface LinkButtonProps extends TouchableOpacityProps {
  $textStyle?: StyleProp<TextStyle>;
}

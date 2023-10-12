import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  $backgroundColor?: string;
  $rounded?: boolean;
  $outlined?: boolean;
  $shadow?: boolean;
}

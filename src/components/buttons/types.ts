import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  $rounded?: boolean;
  $outlined?: boolean;
  $shadow?: boolean;
}

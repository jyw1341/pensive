import { TextProps } from "react-native";

export interface CustomTextProps extends TextProps {
  $color?: string;
}

export interface LabelProps extends CustomTextProps {
  $outlined?: boolean;
}

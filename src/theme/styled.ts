import { DefaultTheme } from "styled-components/native";
import { lightPalette, darkPalette } from "./palette";

const font = {
  size: {
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "20px",
    xlarge: "24px",
    xxlarge: "34px",
  },
  family: {
    thin: "LineSeedKR-Th",
    regular: "LineSeedKR-Rg",
    bold: "LineSeedKR-Bd",
  },
};

const icon = {
  size: {
    medium: "25px",
  },
};

const border = {
  radius: {
    default: "4px",
    round: "50px",
  },
};

export const lightTheme: DefaultTheme = {
  fontSize: font.size,
  iconSize: icon.size,
  fontFamily: font.family,
  borderRadius: border.radius,
  background: lightPalette.background,
  text: lightPalette.text,
  primary: lightPalette.primary,
  border: lightPalette.border,
  secondary: lightPalette.secondary,
};

import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    fontSize: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };

    fontFamily: {
      thin: string;
      regular: string;
      bold: string;
    };

    borderRadius: {
      default: string;
      round: string;
    };

    background: {
      dp0: string;
      google: string;
      kakao: string;
    };

    border: {
      light: string;
      strong: string;
    };

    text: {
      placeholder: string;
      onBackground: string;
      onPrimary: string;
      onSurface: string;
      dark: string;
    };
    primary: string;
    secondary: string;
  }
}

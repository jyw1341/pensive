import React from "react";
import { Platform, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import Label from "../texts/Label";
import { ButtonProps } from "./types";

const Container = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;

  justify-content: center;

  align-items: center;

  background-color: ${(props) => {
    if (props.$outlined) return "transparent";
    return props.$backgroundColor || props.theme.primary;
  }};

  opacity: ${(props) => (props.disabled ? "0.6" : "1")};

  border: ${(props) =>
    props.$outlined ? `1px solid ${props.theme.border.strong}` : "none"};

  border-radius: ${(props) =>
    props.$rounded
      ? props.theme.borderRadius.round
      : props.theme.borderRadius.default};

  padding: 16px 24px;

  ${(props) =>
    props.$shadow &&
    !props.$outlined &&
    Platform.select({
      ios: `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
  `,
      android: `
    elevation: 1;
  `,
    })}
`;

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  style,
  $backgroundColor,
  $rounded,
  $outlined,
  $shadow,
}) => {
  return (
    <Container
      onPress={onPress}
      style={style}
      $backgroundColor={$backgroundColor}
      $rounded={$rounded}
      $outlined={$outlined}
      $shadow={$shadow}
    >
      {typeof children === "string" ? (
        <Label $outlined={$outlined}>{children}</Label>
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;

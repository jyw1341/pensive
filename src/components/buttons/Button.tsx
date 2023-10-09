import React from "react";
import { Platform, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import Label from "../texts/Label";

const Container = styled.TouchableOpacity<{
  $rounded?: boolean;
  $outlined?: boolean;
  $shadow?: boolean;
}>`
  flex-direction: row;

  justify-content: center;

  align-items: center;

  background-color: ${(props) => {
    if (props.$outlined) return "transparent";
    return props.theme.primary;
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

interface ButtonProps extends TouchableOpacityProps {
  $rounded?: boolean;
  $outlined?: boolean;
  $shadow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  style,
  $rounded,
  $outlined,
  $shadow,
}) => {
  return (
    <Container
      onPress={onPress}
      style={style}
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

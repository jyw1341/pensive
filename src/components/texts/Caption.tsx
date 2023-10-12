import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";

const Caption = styled.Text<{
  $color?: string;
}>`
  font-size: ${(props) => props.theme.fontSize.xsmall};
  font-family: ${(props) => props.theme.fontFamily.thin};
  color: ${(props) => props.$color || props.theme.text.onBackground};

  text-align: center;
`;

export default Caption;

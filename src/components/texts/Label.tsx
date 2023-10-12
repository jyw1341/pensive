import React from "react";
import styled from "styled-components/native";
import { LabelProps } from "./types";

const Label = styled.Text<LabelProps>`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => {
    if (props.$outlined) {
      return props.$color || props.theme.text.onBackground;
    } else {
      return props.$color || props.theme.text.onPrimary;
    }
  }};

  text-align: center;
`;

export default Label;

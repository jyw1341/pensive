import React from "react";
import styled from "styled-components/native";
import { CustomTextProps } from "./types";

const Link = styled.Text<CustomTextProps>`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-family: ${(props) => props.theme.fontFamily.thin};
  color: ${(props) => props.$color || props.theme.text.onBackground};

  text-align: center;
`;

export default Link;

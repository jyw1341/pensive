import React from "react";
import styled from "styled-components/native";
import { CustomTextProps } from "./types";

const H5 = styled.Text<CustomTextProps>`
  font-size: ${(props) => props.theme.fontSize.xlarge};
  font-family: ${(props) => props.theme.fontFamily.bold};
  color: ${(props) => props.$color || props.theme.text.onBackground};

  text-align: center;
`;

export default H5;

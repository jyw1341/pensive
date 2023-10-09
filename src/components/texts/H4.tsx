import React from "react";
import styled from "styled-components/native";

const H4 = styled.Text<{
  $color?: string;
}>`
  font-size: ${(props) => props.theme.fontSize.xxlarge};
  font-family: ${(props) => props.theme.fontFamily.bold};
  color: ${(props) => props.$color || props.theme.text.onBackground};

  text-align: left;
  width: 100%;
  letter-spacing: 0.15px;
`;

export default H4;

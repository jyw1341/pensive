import React from "react";
import styled from "styled-components/native";

const Subtitle1 = styled.Text<{
  $color?: string;
}>`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.$color || props.theme.text.onBackground};

  text-align: left;
  width: 100%;
  letter-spacing: 0.15px;
`;

export default Subtitle1;

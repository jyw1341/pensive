import React from "react";
import styled from "styled-components/native";

const H5 = styled.Text<{
  $color?: string;
}>`
  font-size: ${(props) => props.theme.fontSize.xlarge};
  font-family: ${(props) => props.theme.fontFamily.bold};
  color: ${(props) => props.$color || props.theme.text.onBackground};

  text-align: center;
  letter-spacing: 0.15px;
`;

export default H5;

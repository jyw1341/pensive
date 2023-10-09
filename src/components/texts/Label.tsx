import React from "react";
import styled from "styled-components/native";

const Label = styled.Text<{
  $color?: string;
  $outlined?: boolean;
}>`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) =>
    props.$outlined
      ? props.theme.text.onBackground
      : props.theme.text.onPrimary};

  text-align: center;
`;

export default Label;

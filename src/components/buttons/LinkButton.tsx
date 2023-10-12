import styled from "styled-components/native";
import React from "react";
import { LinkButtonProps } from "./types";
import Link from "../texts/Link";

const Container = styled.TouchableOpacity`
  border-bottom-width: 0.5px; /* 하단 경계선 두께 설정 */
  border-color: ${(props) =>
    props.theme.text.onBackground}; /* 경계선 색상 설정 */
  padding: 1px;
`;

const LinkButton: React.FC<LinkButtonProps> = ({
  onPress,
  children,
  style,
  $textStyle,
}) => {
  return (
    <Container onPress={onPress} style={style}>
      <Link>{children}</Link>
    </Container>
  );
};

export default LinkButton;

import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import AnimatedInput from "../components/inputs/AnimatedInput";
import { margin } from "../theme/commonStyles";

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export default function LogIn() {
  return (
    <Container>
      <AnimatedInput placeholder="이메일" style={margin.bottom[8]} />
    </Container>
  );
}

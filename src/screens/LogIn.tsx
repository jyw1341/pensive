import React, { useCallback } from "react";
import styled from "styled-components/native";
import AnimatedInput from "../components/inputs/AnimatedInput";
import { margin } from "../theme/commonStyles";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalLineCenteredText from "../components/dividers/HorizontalLineCenteredText";

const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export default function LogIn() {
  return (
    <Container behavior="position" keyboardVerticalOffset={-1000}>
      <ScrollView>
        <AnimatedInput placeholder="이메일" style={margin.bottom[8]} />
        <AnimatedInput placeholder="이메일" style={margin.bottom[8]} />
        <HorizontalLineCenteredText>안녕</HorizontalLineCenteredText>
      </ScrollView>
    </Container>
  );
}

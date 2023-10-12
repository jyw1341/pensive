import React, { useCallback } from "react";
import styled, { useTheme } from "styled-components/native";
import AnimatedInput from "../components/inputs/AnimatedInput";
import layoutStyles from "../theme/layoutStyles";
import HorizontalLineCenteredText from "../components/dividers/HorizontalLineCenteredText";
import { useTranslation } from "react-i18next";
import H4 from "../components/texts/H4";
import { WithLocalSvg } from "react-native-svg";
import Label from "../components/texts/Label";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const Dummy = styled.View`
  width: ${(props) => props.theme.iconSize.medium};
  height: ${(props) => props.theme.iconSize.medium};
`;

export default function SignUp() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container behavior="position" keyboardVerticalOffset={-1000}>
      <H4>로그인</H4>
      <AnimatedInput />
      <Button
        $backgroundColor={theme.background.google}
        style={[
          layoutStyles.margin.bottom[8],
          layoutStyles.flex.justifyContent.spaceBetween,
        ]}
      >
        <WithLocalSvg
          width={theme.iconSize.medium}
          height={theme.iconSize.medium}
          asset={require("../assets/images/google-logo.svg")}
        />
        <Label $color={theme.text.dark}>구글로 로그인</Label>
        <Dummy />
      </Button>
    </Container>
  );
}

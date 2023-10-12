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
import VerticalLine from "../components/dividers/VerticalLine";
import Subtitle1 from "../components/texts/Subtitle1";
import { LogInScreenNavigationProp } from "../navigators/types";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  padding: 24px;
`;

const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled(H4)`
  color: ${(props) => props.theme.secondary};
`;

const LinkContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Dummy = styled.View`
  width: ${(props) => props.theme.iconSize.medium};
  height: ${(props) => props.theme.iconSize.medium};
`;

export default function LogIn() {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigation = useNavigation<LogInScreenNavigationProp>();

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Container
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      keyboardVerticalOffset={-1000}
    >
      <TitleContainer>
        <Title>{t("appName")}</Title>
        <Subtitle1>반갑습니다</Subtitle1>
      </TitleContainer>

      <AnimatedInput
        placeholder={t("email")}
        style={layoutStyles.margin.bottom[8]}
      />

      <AnimatedInput
        secureTextEntry={true}
        placeholder={t("password")}
        style={layoutStyles.margin.bottom[24]}
      />

      <Button $shadow={true} style={[layoutStyles.margin.bottom[24]]}>
        {t("logIn")}
      </Button>

      <LinkContainer>
        <LinkButton>{t("findId")}</LinkButton>
        <VerticalLine />
        <LinkButton>{t("findPassword")}</LinkButton>
        <VerticalLine />
        <LinkButton onPress={handleSignUpPress}>{t("signUp")}</LinkButton>
      </LinkContainer>

      <HorizontalLineCenteredText>
        {t("loginPageDividerText")}
      </HorizontalLineCenteredText>

      <Button
        $backgroundColor={theme.background.google}
        $shadow={true}
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
        <Label $color={theme.text.dark}>{t("googleLoginLabel")}</Label>
        <Dummy />
      </Button>

      <Button
        $backgroundColor={theme.background.kakao}
        $shadow={true}
        style={[
          layoutStyles.margin.bottom[8],
          layoutStyles.flex.justifyContent.spaceBetween,
        ]}
      >
        <WithLocalSvg
          width={theme.iconSize.medium}
          height={theme.iconSize.medium}
          asset={require("../assets/images/kakao-logo.svg")}
        />
        <Label $color={theme.text.dark}>{t("kakaoLoginLabel")}</Label>
        <Dummy />
      </Button>
    </Container>
  );
}

import React from "react";
import styled from "styled-components/native";
import Button from "../components/buttons/Button";
import { margin, dimension } from "../theme/commonStyles";
import H4 from "../components/texts/H4";
import Subtitle1 from "../components/texts/Subtitle1";
import { useNavigation } from "@react-navigation/native";
import { WelcomeScreenNavigationProp } from "../navigators/types";
import { useTranslation } from "react-i18next";

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const WelcomeImage = styled.Image`
  margin-top: 100px;
`;

const AccentText = styled.Text`
  color: ${(props) => props.theme.primary};
`;

const TextContainer = styled.View`
  width: 100%;
`;

const ButtonContainer = styled.View`
  width: 100%;
`;

export default function Welcome() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const { t, i18n } = useTranslation();

  function handleLogInPress() {
    navigation.navigate("LogIn");
  }

  function handleSignUpPress() {
    navigation.navigate("SignUp");
  }

  return (
    <Container>
      <WelcomeImage
        source={require("../assets/images/welcome.png")}
        resizeMode="contain"
      />
      <TextContainer>
        <H4>
          Welcome to <AccentText>Pensive.</AccentText>
        </H4>
        <Subtitle1>
          Lorem ipsum dolor sit amet consectetur. Nulla mi justo nunc ultrices.
        </Subtitle1>
      </TextContainer>

      <ButtonContainer>
        <Button
          onPress={handleLogInPress}
          style={[margin.bottom[16], dimension.width.full]}
        >
          {t("logIn")}
        </Button>
        <Button
          onPress={handleSignUpPress}
          $outlined={true}
          style={[dimension.width.full]}
        >
          {t("signUp")}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

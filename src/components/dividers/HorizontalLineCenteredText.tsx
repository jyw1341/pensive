import React from "react";
import Caption from "../texts/Caption";
import styled from "styled-components/native";
import { useTheme } from "styled-components/native";
import { ViewProps } from "react-native";
import HorizontalLine from "./HorizontalLine";

const DividerCaption = styled(Caption)`
  margin: 0 10px 0 10px;
`;

const SvgContainer = styled.View`
  flex: 1;
`;

const CaptionContainer = styled.View`
  flex: 0.5;
`;

const Container = styled.View`
  width: 100%;
  height: 64px;
  align-items: center;
  flex-direction: row;
`;

const HorizontalLineCenteredText: React.FC<ViewProps> = ({
  children,
  style,
}) => {
  const theme = useTheme();

  return (
    <Container style={style}>
      <SvgContainer>
        <HorizontalLine />
      </SvgContainer>
      <CaptionContainer>
        <DividerCaption $color={theme.text.onBackground}>
          {children}
        </DividerCaption>
      </CaptionContainer>
      <SvgContainer>
        <HorizontalLine />
      </SvgContainer>
    </Container>
  );
};

export default HorizontalLineCenteredText;

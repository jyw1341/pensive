import React, { useState } from "react";
import { styled, useTheme } from "styled-components/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { TextInputProps } from "react-native";

const Input = styled.TextInput`
  padding: 24px 10px 8px 10px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const AnimatedInput: React.FC<TextInputProps> = ({
  placeholder,
  secureTextEntry,
  style,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [inputText, setInputText] = useState("");
  const yDistance = 14;
  const translateY = useSharedValue(0); // translateY를 저장할 공유값

  const fontSize = 14;
  const translateFont = useSharedValue(fontSize); // 초기 폰트 크기 설정

  const borderWidth = 1;
  const translateBorderWidth = useSharedValue(1);

  const theme = useTheme();

  const animDuration = 200;

  const handleFocus = () => {
    setFocused(true);
    if (!inputText) {
      translateY.value -= yDistance;
      translateFont.value = fontSize - 2;
    }
    translateBorderWidth.value = borderWidth + 1;
  };

  const handleBlur = () => {
    setFocused(false);
    if (!inputText) {
      translateY.value += yDistance;
      translateFont.value = fontSize;
    }
    translateBorderWidth.value = borderWidth;
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      borderWidth: withTiming(translateBorderWidth.value, {
        duration: animDuration,
      }),
      width: "100%",
      borderStyle: "solid",
      borderColor: isFocused ? theme.secondary : theme.border.strong,
      borderRadius: 10,
      position: "relative",
    };
  });

  const animatedViewStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, { duration: animDuration }),
        },
      ],
      position: "absolute",
      top: "33%",
      left: "3%",
    };
  });

  const animatedLabelStyles = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(translateFont.value, { duration: animDuration }),
      color: theme.text.placeholder,
    };
  });

  return (
    <Animated.View style={[animatedContainerStyles, style]}>
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleInputChange}
        secureTextEntry={secureTextEntry}
      />
      <Animated.View style={[animatedViewStyles]} pointerEvents="none">
        <Animated.Text style={[animatedLabelStyles]}>
          {placeholder}
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

export default AnimatedInput;

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
  const theme = useTheme();

  const yTravelDistance = 14;
  const translateY = useSharedValue(0); // translateY를 저장할 공유값

  const defaultFontSize = 14;
  const fontSizeChange = 2;
  const translateFont = useSharedValue(defaultFontSize); // 초기 폰트 크기 설정

  const defaultBorderWidth = 1;
  const boderWidthChange = 1;
  const translateBorderWidth = useSharedValue(1);

  const animDuration = 200;

  const handleInputFocus = () => {
    setFocused(true);
    if (!inputText) {
      translateY.value -= yTravelDistance;
      translateFont.value = defaultFontSize - fontSizeChange;
    }
    translateBorderWidth.value = defaultBorderWidth + boderWidthChange;
  };

  const handleInputBlur = () => {
    setFocused(false);
    if (!inputText) {
      translateY.value += yTravelDistance;
      translateFont.value = defaultFontSize;
    }
    translateBorderWidth.value = defaultBorderWidth;
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

  const animatedVerticalTravelStyles = useAnimatedStyle(() => {
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

  const animatedFontStyles = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(translateFont.value, { duration: animDuration }),
      color: theme.text.placeholder,
    };
  });

  return (
    <Animated.View style={[animatedContainerStyles, style]}>
      <Input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleInputChange}
        secureTextEntry={secureTextEntry}
      />
      <Animated.View
        style={[animatedVerticalTravelStyles]}
        pointerEvents="none"
      >
        <Animated.Text style={[animatedFontStyles]}>
          {placeholder}
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

export default AnimatedInput;

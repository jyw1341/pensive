import React from "react";
import Svg, { Line } from "react-native-svg";
import { useTheme } from "styled-components/native";

const HorizontalLineDivider = () => {
  const theme = useTheme();

  return (
    <Svg height="1" width="100%">
      {/* 선 그리기 */}
      <Line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke={theme.border.light}
        strokeWidth="1"
      />
    </Svg>
  );
};

export default HorizontalLineDivider;

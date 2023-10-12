import React from "react";
import Svg, { Line } from "react-native-svg";
import { useTheme } from "styled-components/native";

const VerticalLine = () => {
  const theme = useTheme();

  return (
    <Svg height="100%" width="1">
      {/* 선 그리기 */}
      <Line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke={theme.border.light}
        strokeWidth="1"
      />
    </Svg>
  );
};

export default VerticalLine;

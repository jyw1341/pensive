import { StyleSheet } from "react-native";

const commonStyles = {
  margin: {
    bottom: StyleSheet.create({
      8: {
        marginBottom: 8,
      },
      16: {
        marginBottom: 16,
      },
      24: {
        marginBottom: 24,
      },
      32: {
        marginBottom: 32,
      },
    }),
  },
  dimension: {
    width: StyleSheet.create({
      full: {
        width: "100%",
      },
    }),
  },
  flex: {
    justifyContent: StyleSheet.create({
      spaceBetween: {
        justifyContent: "space-between",
      },
      center: {
        justifyContent: "center",
      },
    }),
  },
};

export default commonStyles;

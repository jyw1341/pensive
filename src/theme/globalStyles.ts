import { StyleSheet } from "react-native";

const margin = {
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
  }),
};

const dimension = {
  width: StyleSheet.create({
    full: {
      width: "100%",
    },
  }),
};

const flex = {
  justifyContent: StyleSheet.create({
    spaceBetween: {
      justifyContent: "space-between",
    },
    center: {
      justifyContent: "center",
    },
  }),
};

const bgColor = StyleSheet.create({
  kakao: {
    backgroundColor: "#FEE500",
  },
  google: {
    backgroundColor: "#FFFFFF",
  },
});

export { margin, dimension, flex, bgColor };

import React from "react";
import { View, StyleSheet } from "react-native";

export const SelectCircle = ({
  selected,
  selectedColor,
  deselectedColor,
  style
}) => {
  const outerCircleStyles = [
    SelectCircleStyles.outerCircle,
    {
      borderColor: deselectedColor
    },
    style
  ];

  const innerCircleStyles = [
    SelectCircleStyles.innerCircle,
    {
      backgroundColor: deselectedColor
    }
  ];

  if (selected) {
    outerCircleStyles.push({
      backgroundColor: selectedColor,
      borderColor: selectedColor
    });
    innerCircleStyles.push({
      backgroundColor: "white"
    });
  }

  return (
    <View style={outerCircleStyles}>
      <View style={innerCircleStyles} />
    </View>
  );
};

SelectCircle.defaultProps = {
  selectedColor: "rgb(0, 175, 115)",
  deselectedColor: "rgba(129, 161, 186, 0.5)"
};

const SelectCircleStyles = StyleSheet.create({
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#fff"
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderRadius: 4
  }
});

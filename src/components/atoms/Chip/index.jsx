import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const Chip = ({
  isSelected,
  label,
  itemCount,
  left,
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        // Estilos del chip
      }}
    >
      {!!left && <View style={{ marginRight: 8 }}>{left}</View>}
      <Text
        style={{
          // Estilos del texto
        }}
      >
        {label} [{itemCount}]
      </Text>
    </View>
  );
};

export default Chip;

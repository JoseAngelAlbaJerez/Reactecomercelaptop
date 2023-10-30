import React from "react";
import { Text, Pressable, View } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import Icon from "../../atoms/icons";

interface TabItemProps {
  routeName: string;
  isActive: boolean;
  navigation: any; // Ajusta el tipo de 'navigation' según tu configuración
}

const TabItem: React.FC<TabItemProps> = ({ routeName, isActive, navigation }) => {
  const { colors } = useTheme();

  const onTap = () => {
    navigation.navigate(routeName);
  };

  return (
    <Pressable
      onPress={onTap}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 8,
      }}
    >
      <Animated.View
        style={[
          {
            width: 36,
            height: 36,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 32,
            backgroundColor: isActive ? colors.primary : "transparent",
          },
        ]}
      >
        <Icon
          name={
            routeName === "Home"
              ? "home"
              : routeName === "Cart"
              ? "shopping-cart"
              : routeName === "Payment"
              ? "account-balance-wallet"
              : "person"
          }
          size={24}
          color={isActive ? colors.card : colors.text}
          style={{
            opacity: isActive ? 1 : 0.5,
          }}
        />
      </Animated.View>
      {isActive && (
        <Text
          style={{
            marginLeft: 8,
            fontSize: 12,
            fontWeight: "600",
            color: colors.text,
          }}
        >
          {routeName}
        </Text>
      )}
    </Pressable>
  );
};

export default TabItem;

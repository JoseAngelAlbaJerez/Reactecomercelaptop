import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageStyle, TextStyle, ViewStyle } from 'react-native';

interface CardProps {
  price: number;
  imageUrl: string;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ price, imageUrl, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
      }}
    >
      <Image
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
        style={imageStyle}
      />
      <View style={overlayStyle}>
        <Text style={textStyle}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const imageStyle: ImageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const overlayStyle: ViewStyle = {
  position: "absolute",
  left: 12,
  top: 12,
  paddingHorizontal: 12,
  paddingVertical: 8,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  borderRadius: 100,
};

const textStyle: TextStyle = {
  fontSize: 14,
  fontWeight: "600",
  color: "#fff",
};

export default Card;

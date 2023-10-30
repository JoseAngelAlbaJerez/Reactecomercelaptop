import MasonryList from "reanimated-masonry-list";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import products from "../../../data/products";
import { useTheme } from "@react-navigation/native";
import ImageLoader from "../../atoms/Image";

interface MasonryProps {
  // Puedes agregar las propiedades necesarias aquí si las hay
}
interface Product {
  imageUrl: string;
  title: string;
  price: number;
  // Otros campos necesarios
}

const Masonary: React.FC<MasonryProps> = ({}) => {
  const { colors } = useTheme();

  const renderMasonryItem = ({ item }: {item : Product}) => (
    <View style={{ flex: 1, padding: 8 }}>
      <ImageLoader
        source={{ uri: item.imageUrl }}
        style={{ flex: 1, borderRadius: 12, overflow: 'hidden', aspectRatio: 1 }}
      />
      <View style={{ padding: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: colors.text }}>
          {item.title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, color: colors.primary }}>
            ${item.price / 100}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <Text
        style={{ fontSize: 20, paddingLeft: 16, fontWeight: "700", color: colors.text }}
      >
        Productos Más Vendidos
      </Text>
      <MasonryList
        data={products}
        numColumns={2}
        renderItem={renderMasonryItem}
      />
    </View>
  );
};

export default Masonary;

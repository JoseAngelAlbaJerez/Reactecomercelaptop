import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import products from "../../../data/products";

interface CartItemProps {
  product: {
    imageUrl: string;
    title: string;
    description: string;
    price: number; // Cambiar a 'price' si corresponde
    unit_price: number;
    total: number;
    quantity: number;
  };
}


const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>
            {product.description} • ${product.unit_price / 100}
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>${product.total / 100}</Text>
          <Text style={styles.quantity}>x{product.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#e6e6e6",
  },
  image: {
    width: 80, // Ajusta el ancho de la imagen según tus necesidades
    height: 80, // Ajusta la altura de la imagen según tus necesidades
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    flex: 1, // Permite que el contenido se expanda para ocupar todo el espacio disponible
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 10, // Agrega un margen a la izquierda para separar la imagen y la información
  },
  description: {
    color: "#8e8e93",
  },
  price:{
    color: "#8e8e93",
  },
  quantity:{
    color: "#8e8e93",
  }
  
});

export default CartItem;

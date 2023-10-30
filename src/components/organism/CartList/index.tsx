import React from 'react';
import { View } from 'react-native';
import CartItem from '../../molecules/CartItem';
interface CartItem {
  id: number;
  product: {
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    unit_price: number;
    total: number;
    quantity: number;
  };
  onRemove: () => void; // Agregar la propiedad 'onRemove' a la interfaz
  onUpdateQuantity: (quantity: number) => void;
}



interface CartListProps {
  items: CartItem[];
  onRemove: (itemId: number) => void;
  onUpdateQuantity: (itemId: number, quantity: number) => void;
}


const CartList: React.FC<CartListProps> = ({ items, onRemove, onUpdateQuantity }) => (
  <View>
    {items.map((item) => (
      <CartItem
        key={item.id}
        product={item.product}
        onRemove={() => onRemove(item.id)}
        onUpdateQuantity={(quantity) => onUpdateQuantity(item.id, quantity)}
      />
    ))}
  </View>
);

export default CartList;

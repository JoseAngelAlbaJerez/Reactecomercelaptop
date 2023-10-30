import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from '../../atoms/Button';
import CartItem from '../../molecules/CartItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  totalText: {
    fontSize: 18,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutButton: {
    flex: 1,
   
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 100,
    marginRight: 50,
  },
  continueShoppingButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 100,
  },
});

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

interface CartPageProps {
  cartItems: CartItem[];
  total: number;
  onCheckout: () => void;
  onContinueShopping: () => void;
  onRemoveItem: (itemId: number) => void;
  onUpdateQuantity: (itemId: number, quantity: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, total, onCheckout, onContinueShopping, onRemoveItem, onUpdateQuantity }) => (
  <View style={styles.container}>
    {cartItems.map((item) => (
      <CartItem
        key={item.id}
        product={item.name}
        quantity={item.quantity}
        onRemove={() => onRemoveItem(item.id)}
        onUpdateQuantity={(quantity) => onUpdateQuantity(item.id, quantity)}
      />
    ))}
    <Text style={styles.totalText}>{`Total: $${total.toFixed(2)}`}</Text>
    <View style={styles.buttonContainer}>
      <ButtonComponent title="Checkout" style={styles.checkoutButton} onPress={onCheckout} />
      <ButtonComponent title="Continue Shopping" style={styles.continueShoppingButton} onPress={onContinueShopping} />
    </View>
  </View>
);


export default CartPage;

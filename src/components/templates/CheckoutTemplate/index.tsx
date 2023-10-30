import React, { useState } from 'react';
import CartPage from '../../organism/CartPage';
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Ejemplo de productos en el carrito
    {
      id: 1,
      name: "Producto 1",
      price: 10.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 15.99,
      quantity: 1,
    },
  ]);

  const handleRemoveItem = (itemId: number) => {
    // Elimina un producto del carrito según su id
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    // Actualiza la cantidad de un producto en el carrito según su id
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    // Lógica para proceder al pago
  };

  const handleContinueShopping = () => {
    // Lógica para seguir comprando
  };

  // Calcula el total del carrito sumando el precio de cada producto
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartPage
      cartItems={cartItems}
      total={total}
      onCheckout={handleCheckout}
      onContinueShopping={handleContinueShopping}
    />
  );
}

export default Cart;

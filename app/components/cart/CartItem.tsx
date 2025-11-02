"use client";

import { CartItem as CartItemType } from "./CartContext";
import { useCart } from "./CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <div className="bg-gray-dark rounded-lg w-16 h-16">
          {/* Product image */}
        </div>
        <div>
          <h3 className="body text-black font-bold">{item.name}</h3>
          <p className="body text-black text-opacity-50">${item.price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center bg-gray-light">
        <button 
          className="px-3 py-1 body text-black text-opacity-50 hover:text-black"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="px-3 py-1 body text-black font-bold">{item.quantity}</span>
        <button 
          className="px-3 py-1 body text-black text-opacity-50 hover:text-black"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
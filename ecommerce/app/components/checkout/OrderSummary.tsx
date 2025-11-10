// components/OrderSummary.tsx
"use client";

import { OrderSummaryProps } from '@/types/checkout';
import { useCart } from '@/app/components/cart/CartContext';

const OrderSummary: React.FC<OrderSummaryProps> = ({ onCheckout, isLoading = false }) => {
  const { state, getTotal } = useCart();
  
  // FIX: Access items from state instead of cartItems
  const cartItems = state.items;

  const shipping = 50;
  const vat = Math.round(getTotal() * 0.2);
  const grandTotal = getTotal() + shipping + vat;

  return (
    <div className="bg-white rounded-lg p-8">
      <h2 className="h6 text-black mb-8">SUMMARY</h2>

      <div className="space-y-6 mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 rounded-lg w-16 h-16 flex items-center justify-center">
                <span className="text-xs text-gray-500">IMG</span>
              </div>
              <div>
                <h3 className="body text-black font-bold">{item.name}</h3>
                <p className="body text-black text-opacity-50">${item.price}</p>
              </div>
            </div>
            <span className="body text-black text-opacity-50">x{item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="body text-black text-opacity-50">TOTAL</span>
          <span className="body text-black font-bold">${getTotal().toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="body text-black text-opacity-50">SHIPPING</span>
          <span className="body text-black font-bold">${shipping}</span>
        </div>
        <div className="flex justify-between">
          <span className="body text-black text-opacity-50">VAT (INCLUDED)</span>
          <span className="body text-black font-bold">${vat.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="body text-black text-opacity-50">GRAND TOTAL</span>
          <span className="h6 text-primary">${grandTotal.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={onCheckout}
        disabled={isLoading || cartItems.length === 0}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "PROCESSING..." : "CONTINUE & PAY"}
      </button>
    </div>
  );
};

export default OrderSummary;
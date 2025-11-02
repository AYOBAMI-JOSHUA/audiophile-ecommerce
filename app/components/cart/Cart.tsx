// components/Cart.tsx
"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import Link from "next/link";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, removeAll, getTotal, getItemCount, updateQuantity } = useCart();
  
  // Use state.items instead of cartItems
  const cartItems = state.items;

  const handleCheckout = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Icon in Header */}
      <div className="cursor-pointer relative" onClick={() => setIsOpen(true)}>
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 20C8.82843 20 9.5 19.3284 9.5 18.5C9.5 17.6716 8.82843 17 8 17C7.17157 17 6.5 17.6716 6.5 18.5C6.5 19.3284 7.17157 20 8 20Z" fill="white"/>
          <path d="M19 20C19.8284 20 20.5 19.3284 20.5 18.5C20.5 17.6716 19.8284 17 19 17C18.1716 17 17.5 17.6716 17.5 18.5C17.5 19.3284 18.1716 20 19 20Z" fill="white"/>
          <path d="M0 1C0 0.447715 0.447715 0 1 0H4L7.2 12.4C7.35127 13.0125 7.79591 13.5135 8.38563 13.748C8.97535 13.9825 9.63630 13.9228 10.1733 13.586L19.3 8H22C22.5523 8 23 7.55228 23 7C23 6.44772 22.5523 6 22 6H19.8L17.2 1.6C16.9378 1.12464 16.4327 0.833333 15.88 0.833333H4.12C3.5673 0.833333 3.06217 1.12464 2.8 1.6L0.2 6H1C1.55228 6 2 6.44772 2 7C2 7.55228 1.55228 8 1 8H0V1Z" fill="white"/>
        </svg>
        {/* Cart Item Count Badge */}
        {getItemCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {getItemCount()}
          </span>
        )}
      </div>

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop - LIGHTLY DIMMED */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Cart Content - SHIFTED FROM EDGE */}
          <div className="relative bg-white w-full max-w-[377px] h-full max-h-[488px] rounded-lg m-8 p-8 overflow-y-auto">
            {/* Cart Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="h6 text-black">CART ({getItemCount()})</h2>
              <button 
                onClick={removeAll}
                className="body text-black text-opacity-50 underline hover:text-primary"
              >
                Remove all
              </button>
            </div>

            {/* Cart Items */}
            <div className="space-y-6 mb-8">
              {cartItems.length === 0 ? (
                <p className="body text-black text-opacity-50 text-center py-8">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
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
                ))
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mb-6">
              <span className="body text-black text-opacity-50">TOTAL</span>
              <span className="h6 text-black">${getTotal()}</span>
            </div>

            {/* Checkout Button - UPDATED WITH LINK */}
            <Link 
              href="/checkout" 
              onClick={handleCheckout}
              className="btn btn-primary w-full block text-center"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
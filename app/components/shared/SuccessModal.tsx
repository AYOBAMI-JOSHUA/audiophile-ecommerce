"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
  items: CartItem[];
  grandTotal: number;
  shipping: number;
  vat: number;
}

export default function SuccessModal({
  isOpen,
  onClose,
  orderNumber,
  items = [],
  grandTotal = 0,
  shipping = 0,
  vat = 0
}: SuccessModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 max-h-[80vh] overflow-y-auto">
        {/* Checkmark Icon */}
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
          <svg
            width="16"
            height="12"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8L7 14L19 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Thank You Message */}
        <h2 className="text-xl text-black font-bold mb-1">THANK YOU</h2>
        <h3 className="text-md text-black font-bold mb-4">FOR YOUR ORDER</h3>
        <p className="text-gray-500 text-sm mb-4">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary - Side by side layout */}
        <div className="flex flex-col md:flex-row rounded-lg mb-4 overflow-hidden">
          {/* Products Section */}
          <div className="bg-gray-100 p-4 flex-1">
            {/* Main Item */}
            {items.length > 0 && (
              <div className="mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {items[0].image && (
                      <Image
                        src={items[0].image}
                        alt={items[0].name}
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                    )}
                    <div className="ml-3">
                      <h4 className="font-bold text-black text-sm">{items[0].name}</h4>
                      <p className="text-gray-500 text-sm">${items[0].price?.toLocaleString()}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">x{items[0].quantity}</span>
                </div>
              </div>
            )}

            {/* Other Items */}
            {items.length > 1 && (
              <div className="pt-2 border-t border-gray-300">
                <div className="text-center text-gray-500 text-sm">
                  and {items.length - 1} other item(s)
                </div>
              </div>
            )}

            {/* Show message if no items */}
            {items.length === 0 && (
              <div className="text-center text-gray-500 text-sm">
                No items in order
              </div>
            )}
          </div>

          {/* Grand Total Section */}
          <div className="bg-black text-white p-4 flex flex-col justify-center min-w-[120px]">
            <span className="text-gray-400 text-sm block mb-1">GRAND TOTAL</span>
            <span className="text-base font-bold">${grandTotal?.toLocaleString()}</span>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link href="/" passHref>
          <button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded transition-colors text-sm"
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
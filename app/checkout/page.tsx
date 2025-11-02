// app/checkout/page.tsx
"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';
import { useCart } from '@/app/components/cart/CartContext';
import CheckoutForm from '@/app/components/checkout/CheckoutForm';
import OrderSummary from '@/app/components/checkout/OrderSummary';
import { api } from '@/convex/_generated/api';
import { CheckoutFormData, FormErrors } from '@/types/checkout';

export default function CheckoutPage() {
  const router = useRouter();
  const { state, getTotal, clearCart } = useCart(); // FIXED: Use state instead of cartItems
  const createOrder = useMutation(api.orders.createOrder);

  // FIXED: Access items from state
  const cartItems = state.items;

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "eMoney",
    eMoneyNumber: "",
    eMoneyPIN: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Wrong format";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.zipCode) newErrors.zipCode = "ZIP code is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    
    if (formData.paymentMethod === "eMoney") {
      if (!formData.eMoneyNumber) newErrors.eMoneyNumber = "e-Money number required";
      if (!formData.eMoneyPIN) newErrors.eMoneyPIN = "e-Money PIN required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      const orderId = await createOrder({
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          zipCode: formData.zipCode,
          city: formData.city,
          country: formData.country
        },
        paymentMethod: formData.paymentMethod,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: getTotal(),
        shipping: 50,
        vat: Math.round(getTotal() * 0.2),
        grandTotal: getTotal() + 50 + Math.round(getTotal() * 0.2)
      });

      clearCart();
      // CHANGED: Redirect to success page instead of order-confirmation
      router.push(`/checkout/success?orderId=${orderId}`);
      
    } catch (error) {
      console.error("Order creation failed:", error);
      setErrors({ submit: "Failed to create order. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckout = () => {
    const form = document.querySelector('form');
    if (form) {
      const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
      form.dispatchEvent(submitEvent);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => router.back()}
          className="text-black text-opacity-50 hover:text-primary mb-8 body"
        >
          Go Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm
              onSubmit={handleSubmit}
              errors={errors}
              formData={formData}
              onInputChange={handleInputChange}
            />
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              onCheckout={handleCheckout}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
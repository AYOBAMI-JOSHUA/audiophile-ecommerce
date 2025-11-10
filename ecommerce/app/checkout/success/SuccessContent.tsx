"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import SuccessModal from "@/app/components/shared/SuccessModal";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderData, setOrderData] = useState<{
    items: OrderItem[];
    grandTotal: number;
    shipping: number;
    vat: number;
    orderNumber: string;
  } | null>(null);

  // Fetch order data from Convex
  const order = useQuery(api.orders.getOrderById, orderId ? { orderId: orderId as Id<"orders"> } : "skip");

  useEffect(() => {
    if (order) {
      console.log("📦 Full order data from Convex:", order);
      
      const items: OrderItem[] = order.items ? order.items.map((item: any) => ({
        id: item.id,
        name: item.name || "Unknown Product",
        price: item.price || 0,
        quantity: item.quantity || 1,
        image: item.image,
      })) : [];

      setOrderData({
        items,
        grandTotal: order.grandTotal || 0,
        shipping: order.shipping || 50,
        vat: order.vat || 1079,
        orderNumber: order._id,
      });

      console.log("💰 Final order data for modal:", {
        grandTotal: order.grandTotal,
        itemsCount: items.length,
        items: items
      });
      
      setIsModalOpen(true);
    }
  }, [order]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white">
      {orderData && (
        <>
          {/* Debug info - remove after testing */}
          <div className="fixed top-4 right-4 bg-yellow-100 p-2 rounded text-xs">
            Debug: GrandTotal = ${orderData.grandTotal}
          </div>
          
          <SuccessModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            orderNumber={orderData.orderNumber}
            items={orderData.items}
            grandTotal={orderData.grandTotal}
            shipping={orderData.shipping}
            vat={orderData.vat}
          />
        </>
      )}
      
      {!order && (
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Order Processing</h1>
          <p>Loading your order details...</p>
        </div>
      )}
    </div>
  );
}
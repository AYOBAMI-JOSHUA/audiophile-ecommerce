"use client";

import { useState } from "react";
import { useCart } from "@/app/components/cart/CartContext";
import CategoryGrid from "@/app/components/home/CategoryGrid";
import AboutSection from "@/app/components/home/AboutSection";
import ProductGallery from "@/app/components/product/ProductGallery";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductCard from "@/app/components/product/ProductCard";
import Link from "next/link";

export default function XX59Page() {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart(); // CHANGED: addToCart → addItem

  const productData = {
    id: "xx59",
    name: "XX59 HEADPHONES",
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features: `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
    price: 899,
    image: "/assets/xx59.png",
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" }
    ]
  };

  const relatedProducts = [
    { name: "XX99 MARK II", href: "/category/headphones/xx99-mark-ii" },
    { name: "XX99 MARK I", href: "/category/headphones/xx99-mark-i" },
    { name: "ZX9 SPEAKER", href: "/category/speakers/zx9" }
  ];

  const handleAddToCart = () => {
    // CHANGED: Use addItem with quantity instead of looping
    addItem({
      id: productData.id,
      name: productData.name,
      price: productData.price,
      image: productData.image,
      quantity: quantity // ADDED: Include quantity here
    });
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div>
      {/* Back Navigation */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <Link href="/category/headphones" className="body text-black text-opacity-50 hover:text-primary">
            ← Go Back
          </Link>
        </div>
      </section>

      {/* Product Main Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="bg-gray-dark rounded-lg h-[560px]">
              {/* Product image placeholder */}
            </div>
            
            {/* Product Info */}
            <div className="text-center md:text-left">
              <h1 className="h1 text-black mb-8">{productData.name}</h1>
              <p className="body text-black text-opacity-75 mb-8">{productData.description}</p>
              <p className="h6 text-black mb-8">${productData.price}</p>
              
              {/* Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-light">
                  <button 
                    className="px-4 py-2 body text-black text-opacity-50 hover:text-black"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 body text-black font-bold">{quantity}</span>
                  <button 
                    className="px-4 py-2 body text-black text-opacity-50 hover:text-black"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Includes */}
      <ProductDetails features={productData.features} includes={productData.includes} />

      {/* Gallery */}
      <ProductGallery />

      {/* You May Also Like */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="h3 text-black mb-16 text-center">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <ProductCard key={index} name={product.name} href={product.href} />
            ))}
          </div>
        </div>
      </section>

      <CategoryGrid />
      <AboutSection />
    </div>
  );
}
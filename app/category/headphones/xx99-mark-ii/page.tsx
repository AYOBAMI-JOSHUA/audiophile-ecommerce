"use client";

import { useState } from "react";
import { useCart } from "@/app/components/cart/CartContext";
import CategoryGrid from "@/app/components/home/CategoryGrid";
import AboutSection from "@/app/components/home/AboutSection";
import ProductGallery from "@/app/components/product/ProductGallery";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductCard from "@/app/components/product/ProductCard";
import Link from "next/link";

export default function XX99MarkIIPage() {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const productData = {
    id: "xx99-mark-ii",
    name: "XX99 MARK II HEADPHONES",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
    price: 2999,
    image: "/assets/xx99-mark-ii.png",
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" }
    ]
  };

  const relatedProducts = [
    { name: "XX99 MARK I", href: "/category/headphones/xx99-mark-i" },
    { name: "XX59", href: "/category/headphones/xx59" },
    { name: "ZX9 SPEAKER", href: "/category/speakers/zx9" }
  ];

  const handleAddToCart = () => {
    // FIXED: Use addItem instead of addToCart and remove the for loop
    addItem({
      id: productData.id,
      name: productData.name,
      price: productData.price,
      image: productData.image,
      quantity: quantity
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
              <span className="overline text-primary block mb-4">NEW PRODUCT</span>
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
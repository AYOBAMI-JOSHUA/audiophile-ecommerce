"use client";

import { useState } from "react";
import { useCart } from "@/app/components/cart/CartContext";
import CategoryGrid from "@/app/components/home/CategoryGrid";
import AboutSection from "@/app/components/home/AboutSection";
import ProductGallery from "@/app/components/product/ProductGallery";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductCard from "@/app/components/product/ProductCard";
import Link from "next/link";

export default function ZX7Page() {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const productData = {
    id: "zx7",
    name: "ZX7 SPEAKER",
    description: "Stream high quality sound wirelessly with minimal loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features: `Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower distortion but conventional speaker cannot provide. The woofers are made of aluminum that produces unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimizes acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.`,
    price: 3500,
    image: "/assets/zx7-speaker.png",
    includes: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Grille" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 7.5m Audio Cable" },
      { quantity: 1, item: "7.5m Optical Cable" }
    ]
  };

  const relatedProducts = [
    { name: "ZX9 SPEAKER", href: "/category/speakers/zx9" },
    { name: "XX99 MARK I", href: "/category/headphones/xx99-mark-i" },
    { name: "XX59", href: "/category/headphones/xx59" }
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
          <Link href="/category/speakers" className="body text-black text-opacity-50 hover:text-primary">
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
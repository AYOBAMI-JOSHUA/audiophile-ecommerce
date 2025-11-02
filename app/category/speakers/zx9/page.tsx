"use client";

import { useState } from "react";
import { useCart } from "@/app/components/cart/CartContext";
import CategoryGrid from "@/app/components/home/CategoryGrid";
import AboutSection from "@/app/components/home/AboutSection";
import ProductGallery from "@/app/components/product/ProductGallery";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductCard from "@/app/components/product/ProductCard";
import Link from "next/link";

export default function ZX9Page() {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const productData = {
    id: "zx9",
    name: "ZX9 SPEAKER",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity, creating new possibilities for more pleasing and practical audio setups.",
    features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved Bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum dome bass driver. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`,
    price: 4500,
    image: "/assets/zx9-speaker.png",
    includes: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 10m Audio Cable" },
      { quantity: 1, item: "10m Optical Cable" }
    ]
  };

  const relatedProducts = [
    { name: "ZX7 SPEAKER", href: "/category/speakers/zx7" },
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
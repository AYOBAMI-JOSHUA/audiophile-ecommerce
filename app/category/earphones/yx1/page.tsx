"use client";

import { useState } from "react";
import { useCart } from "@/app/components/cart/CartContext";
import CategoryGrid from "@/app/components/home/CategoryGrid";
import AboutSection from "@/app/components/home/AboutSection";
import ProductGallery from "@/app/components/product/ProductGallery";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductCard from "@/app/components/product/ProductCard";
import Link from "next/link";
import Image from "next/image";

export default function YX1Page() {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const productData = {
    id: "yx1",
    name: "YX1 WIRELESS EARPHONES",
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features: `Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide a perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones feature customizable controls for volume, music, calls, and voice assistants built into both earcups. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you unrestricted play time. Exceptional craftsmanship with a quality matte design are available in an all over white and grey color scheme as well as the popular classic black.`,
    price: 599,
    image: "/assets/category/yx1-earphones.png",
    includes: [
      { quantity: 2, item: "Earpiece Unit" },
      { quantity: 6, item: "Multi-size Earplugs" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "USB-C Charging Cable" },
      { quantity: 1, item: "Travel Pouch" }
    ]
  };

  const relatedProducts = [
    { name: "XX99 MARK I", href: "/category/headphones/xx99-mark-i" },
    { name: "XX59", href: "/category/headphones/xx59" },
    { name: "ZX9 SPEAKER", href: "/category/speakers/zx9" }
  ];

  const handleAddToCart = () => {
    addItem({
      id: productData.id,
      name: productData.name,
      price: productData.price,
      image: productData.image,
      quantity: quantity
    });
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
          <Link href="/category/earphones" className="body text-black text-opacity-50 hover:text-primary">
            ← Go Back
          </Link>
        </div>
      </section>

      {/* Product Main Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="bg-gray-dark rounded-lg h-[560px] relative overflow-hidden">
              <Image
                src={productData.image}
                alt={productData.name}
                fill
                className="object-contain p-8"
              />
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
      <ProductGallery
        images={{
          first: "/assets/product/yx1-1.png", 
          second: "/assets/product/yx1-2.png", 
          third: "/assets/product/yx1-3.png"
        }}
       />

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
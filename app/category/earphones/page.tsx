import CategoryGrid from "@/app/components/home/CategoryGrid";
import AboutSection from "@/app/components/home/AboutSection";
import Link from "next/link";
import Image from "next/image";

const earphones = [
  {
    id: "yx1",
    name: "YX1 WIRELESS EARPHONES",
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    href: "/category/earphones/yx1",
    image: "/assets/category/yx1-earphones.png",
    isNew: true,
    price: 599
  }
];

export default function EarphonesPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="h1 text-white">EARPHONES</h1>
        </div>
      </section>

      {/* Products List - Only one product */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {earphones.map((product, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-16">
                {/* Product Image */}
                <div className="bg-gray-dark rounded-lg w-full md:w-1/2 h-80 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                  />
                </div>
                
                {/* Product Info */}
                <div className="text-center md:text-left w-full md:w-1/2">
                  {product.isNew && (
                    <span className="overline text-primary block mb-4">NEW PRODUCT</span>
                  )}
                  <h2 className="h2 text-black mb-8">{product.name}</h2>
                  <p className="body text-black text-opacity-75 mb-8">{product.description}</p>
                  <Link href={product.href} className="btn btn-primary">
                    SEE PRODUCT
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoryGrid />
      <AboutSection />
    </div>
  );
}
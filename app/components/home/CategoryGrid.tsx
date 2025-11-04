import Link from "next/link";
import Image from "next/image";

export default function CategoryGrid() {
  const categories = [
    {
      name: "HEADPHONES",
      href: "/category/headphones",
      image: "/assets/home/categoryheadphones.png",
    },
    {
      name: "SPEAKERS", 
      href: "/category/speakers",
      image: "/assets/home/categoryspeakers.png",
    },
    {
      name: "EARPHONES",
      href: "/category/earphones", 
      image: "/assets/home/categoryearphones.png",
    },
  ];

  return (
    <section className="bg-gray-light py-26">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-dark rounded-lg text-center relative h-40">
              {/* Category Image */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              
              {/* Category Content */}
              <div className="pt-20 pb-6">
                <h3 className="h6 text-black mb-4">{category.name}</h3>
                <Link href={category.href} className="text-black text-opacity-50 hover:text-primary transition-colors font-bold text-sm uppercase tracking-wider inline-block">
                  SHOP <span className="text-primary">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function CategoryGrid() {
  const categories = [
    {
      name: "HEADPHONES",
      href: "/category/headphones",
      image: "/assets/category-headphones.png",
    },
    {
      name: "SPEAKERS", 
      href: "/category/speakers",
      image: "/assets/category-speakers.png",
    },
    {
      name: "EARPHONES",
      href: "/category/earphones", 
      image: "/assets/category-earphones.png",
    },
  ];

  return (
    <section className="bg-gray-light py-26"> {/* Light background section */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
              <div key={index} className="bg-gray-dark rounded-lg text-center relative h-40"> {/* Gray-dark card background */}
              {/* Category Image */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-300 rounded-full">
                  {/* Image placeholder */}
              </div>
              
              {/* Category Content */}
              <div className="pt-20 pb-6">
                  <h3 className="h6 text-black mb-4">{category.name}</h3>
                  <Link href={category.href} className="btn btn-tertiary">
                    SHOP <span className="arrow">›</span>
                  </Link>
              </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
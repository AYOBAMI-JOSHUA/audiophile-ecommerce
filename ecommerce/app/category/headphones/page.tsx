import CategoryGrid from "@/app/components/home/CategoryGrid";
import AboutSection from "@/app/components/home/AboutSection";
import Link from "next/link";
import Image from "next/image";

const headphones = [
  {
    name: "XX99 MARK II HEADPHONES",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio...",
    href: "/category/headphones/xx99-mark-ii", 
    image: "/assets/category/xx99-mark-ii.png",
    isNew: true
  },
  {
    name: "XX99 MARK I HEADPHONES", 
    description: "As the gold standard for headphones...",
    href: "/category/headphones/xx99-mark-i", 
    image: "/assets/category/xx99-mark-i.png",
    isNew: false
  },
  {
    name: "XX59 HEADPHONES",
    description: "Enjoy your audio almost anywhere...",
    href: "/category/headphones/xx59", 
    image: "/assets/category/xx59.png", 
    isNew: false
  }
];

export default function HeadphonesPage() {
    return (
        <div>
            {/* Header Section */}
            <section className="bg-black py-20">
                <div className="container mx-auto px-6 text-center">
                <h1 className="h1 text-white">HEADPHONES</h1>
                </div>
            </section>

            {/* Products List */}
            <section className="py-20 bg-gray-light">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {headphones.map((product, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
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
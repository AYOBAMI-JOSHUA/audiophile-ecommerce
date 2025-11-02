import CategoryGrid from "@/app/components/home/CategoryGrid";
import AboutSection from "@/app/components/home/AboutSection";
import Link from "next/link";

const speakers = [
  {
    name: "ZX9 SPEAKER",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity, creating new possibilities for more pleasing and practical audio setups.",
    href: "/category/speakers/zx9",
    image: "/assets/zx9-speaker.png",
    isNew: true
  },
  {
    name: "ZX7 SPEAKER", 
    description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end materials and represents the pinnacle of audio equipment for the modern home or office.",
    href: "/category/speakers/zx7",
    image: "/assets/zx7-speaker.png",
    isNew: false
  }
];

export default function SpeakersPage() {
    return (
        <div>
            {/* Header Section */}
            <section className="bg-black py-20">
                <div className="container mx-auto px-6 text-center">
                <h1 className="h1 text-white">SPEAKERS</h1>
                </div>
            </section>

            {/* Products List */}
            <section className="py-20 bg-gray-light">
                <div className="container mx-auto px-6">
                <div className="space-y-32">
                    {speakers.map((product, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                        {/* Product Image */}
                        <div className="bg-gray-dark rounded-lg w-full md:w-1/2 h-80">
                        {/* Image placeholder */}
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
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gray relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/hero-bg.png"
          alt="XX99 Mark II Headphones"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-16 md:py-20 lg:py-32 text-center md:text-left">
          {/* New Product Badge */}
          <span className="overline text-white text-opacity-50 block mb-4 md:mb-6">
            NEW PRODUCT
          </span>
          
          {/* Product Title */}
          <h1 className="h2 md:h1 text-white mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
            XX99 MARK II<br />HEADPHONES
          </h1>
          
          {/* Description */}
          <p className="body text-white text-opacity-75 max-w-md mx-auto md:mx-0 mb-6 md:mb-8 text-sm md:text-base">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          
          {/* CTA Button */}
          <Link href="/category/headphones/xx99-mark-ii" className="btn btn-primary text-sm md:text-base px-6 py-3 md:px-8 md:py-4 inline-block">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
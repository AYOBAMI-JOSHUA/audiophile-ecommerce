import Image from 'next/image';

export default function ZX7Promo() {
  return (
    <section className="bg-gray-light py-20">
      <div className="container mx-auto px-6">
        <div className="relative rounded-lg py-20 pl-6 md:pl-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/home/zx7-speaker-bg.png"
              alt="ZX7 Speaker"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-md">
            <h2 className="h2 text-black mb-8">
              ZX7 SPEAKER
            </h2>
            <button className="btn btn-secondary">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
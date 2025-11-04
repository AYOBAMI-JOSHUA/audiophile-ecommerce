import Image from 'next/image';

export default function ZX9Promo() {
  return (
    <section className="relative bg-[#D87D4A] overflow-hidden rounded-lg">
      {/* Background Circles Pattern - CSS version */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border-[1px] border-white opacity-10"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border-[1px] border-white opacity-10"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-[1px] border-white opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12 py-16 md:py-0 md:pt-16 md:pb-0">
          {/* Speaker Image - LEFT SIDE extending to bottom */}
          <div className="relative flex-shrink-0 z-20 w-56 h-72 md:w-72 md:h-[420px]">
            <Image
              src="/assets/home/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
          
          {/* Content - RIGHT SIDE */}
          <div className="text-center md:text-left max-w-md z-20 md:mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wider uppercase leading-none">
              ZX9<br />SPEAKER
            </h2>
            <p className="text-white opacity-75 mb-10 text-base leading-relaxed">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <button className="bg-black text-white hover:bg-gray-800 px-8 py-4 font-bold tracking-widest text-sm transition-all uppercase">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
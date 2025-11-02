export default function ZX9Promo() {
  return (
    <section className="bg-primary py-20 overflow-hidden"> {/* Now this should work! */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Speaker Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0">
            <div className="w-full h-full bg-gray-300 rounded-full">
              {/* Speaker image placeholder */}
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="h1 text-white mb-6">
              ZX9<br />SPEAKER
            </h2>
            <p className="body text-white text-opacity-75 mb-8">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <button className="btn bg-black text-white hover:bg-gray-800">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
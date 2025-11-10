import Image from 'next/image';

export default function YX1Promo() {
    return (
      <section className="bg-gray-light py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Side */}
            <div className="bg-gray-dark rounded-lg h-80 relative overflow-hidden">
              <Image
                src="/assets/home/yx1-earphones.png"
                alt="YX1 Earphones"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content Side */}
            <div className="bg-white rounded-lg h-80 flex items-center pl-6 md:pl-12">
              <div>
                <h2 className="h2 text-black mb-8">
                  YX1 EARPHONES
                </h2>
                <button className="btn btn-secondary">
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
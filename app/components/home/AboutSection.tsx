import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <div className="text-center md:text-left">
                    <h2 className="h2 text-black mb-8">
                    BRINGING YOU THE<br />
                    <span className="text-primary">BEST AUDIO</span> GEAR
                    </h2>
                    <p className="body text-black text-opacity-75">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                
                {/* Image Side */}
                <div className="bg-gray-dark rounded-lg h-80 relative overflow-hidden">
                    <Image
                        src="/assets/home/about-image.png"
                        alt="Audiophile store and equipment"
                        fill
                        className="object-cover"
                    />
                </div>
                </div>
            </div>
        </section>
    );
}
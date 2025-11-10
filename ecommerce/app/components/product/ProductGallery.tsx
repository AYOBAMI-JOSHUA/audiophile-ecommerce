import Image from 'next/image';

interface ProductGalleryProps {
  images: {
    first: string;
    second: string;
    third: string;
  };
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Two stacked images */}
          <div className="space-y-8">
            <div className="bg-gray-dark rounded-lg h-80 relative overflow-hidden">
              <Image
                src={images.first}
                alt="Product gallery image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-dark rounded-lg h-80 relative overflow-hidden">
              <Image
                src={images.second}
                alt="Product gallery image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right side - One tall image */}
          <div className="bg-gray-dark rounded-lg h-[688px] relative overflow-hidden">
            <Image
              src={images.third}
              alt="Product gallery image 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
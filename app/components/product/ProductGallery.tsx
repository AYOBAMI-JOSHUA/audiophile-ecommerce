export default function ProductGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Two stacked images */}
          <div className="space-y-8">
            <div className="bg-gray-dark rounded-lg h-80">
              {/* Gallery image 1 */}
            </div>
            <div className="bg-gray-dark rounded-lg h-80">
              {/* Gallery image 2 */}
            </div>
          </div>
          
          {/* Right side - One tall image */}
          <div className="bg-gray-dark rounded-lg h-[688px]">
            {/* Gallery image 3 */}
          </div>
        </div>
      </div>
    </section>
  );
}
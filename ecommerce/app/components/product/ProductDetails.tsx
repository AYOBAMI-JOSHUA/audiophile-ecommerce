export default function ProductDetails({ 
  features, 
  includes 
}: { 
  features: string;
  includes: { quantity: number; item: string }[];
}) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          {/* Features */}
          <div>
            <h2 className="h3 text-black mb-8">FEATURES</h2>
            <div className="body text-black text-opacity-75 space-y-6">
              {features.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* In the Box */}
          <div>
            <h2 className="h3 text-black mb-8">IN THE BOX</h2>
            <div className="space-y-2">
              {includes.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <span className="body text-primary font-bold">{item.quantity}x</span>
                  <span className="body text-black text-opacity-75">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
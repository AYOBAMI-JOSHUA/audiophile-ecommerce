export default function Hero() {
  return (
    <section className="bg-gray">
      <div className="container mx-auto px-6">
        <div className="py-20 text-center md:text-left">
          {/* New Product Badge */}
          <span className="overline text-white text-opacity-50 block mb-4">
            NEW PRODUCT
          </span>
          
          {/* Product Title */}
          <h1 className="h1 text-white mb-6">
            XX99 MARK II<br />HEADPHONES
          </h1>
          
          {/* Description */}
          <p className="body text-white text-opacity-75 max-w-md mx-auto md:mx-0 mb-8">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          
          {/* CTA Button */}
          <button className="btn btn-primary">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
}
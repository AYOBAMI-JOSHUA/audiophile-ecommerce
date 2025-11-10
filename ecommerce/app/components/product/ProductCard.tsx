import Link from "next/link";

export default function ProductCard({ 
  name, 
  href 
}: { 
  name: string;
  href: string;
}) {
  return (
    <div className="text-center">
      <div className="bg-gray-dark rounded-lg h-32 mb-8">
        {/* Product image */}
      </div>
      <h3 className="h5 text-black mb-8">{name}</h3>
      <Link href={href} className="btn btn-primary">
        SEE PRODUCT
      </Link>
    </div>
  );
}
import CategoryGrid from "@/app/components/home/CategoryGrid";

export default function MenuModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      {/* Tablet/Desktop Menu */}
      <div className="hidden md:block absolute top-0 left-0 right-0 bg-white rounded-b-lg pb-8" onClick={(e) => e.stopPropagation()}>
        <CategoryGrid />

        {/* Close Button */}
        <button 
          aria-label="Close menu"
          className="absolute top-4 right-4 text-black hover:text-primary transition-colors z-10"
          onClick={onClose}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden absolute inset-0 bg-white overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="py-8">
          {/* Use compact variant in mobile modal to avoid oversized images covering titles */}
          <CategoryGrid compact />
        </div>

        {/* Close Button for Mobile */}
        <button 
          aria-label="Close menu"
          className="absolute top-8 right-6 text-black hover:text-primary transition-colors z-10"
          onClick={onClose}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
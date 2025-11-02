import Navigation from './Navigation';
import Cart from '../cart/Cart';

export default function Header() {
  return (
    <header className="bg-pure-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-8 border-b border-white border-opacity-10">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            audiophile
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <Navigation />
          </div>

          {/* Cart Component - Updated */}
          <Cart />
        </div>
      </div>
    </header>
  );
}
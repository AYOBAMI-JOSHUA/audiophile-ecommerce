"use client";

import Navigation from './Navigation';
import Cart from '../cart/Cart';
import MenuModal from '../shared/MenuModal';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pure-black text-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:py-8 border-b border-white border-opacity-10">
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            {/* Hamburger icon */}
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h16v3H0zm0 6h16v3H0zm0 6h16v3H0z" fill="#FFF" fillRule="evenodd"/>
            </svg>
          </button>

         
          <div className="text-xl md:text-2xl font-bold tracking-wider absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
            audiophile
          </div>

          <div className="hidden lg:flex">
            <Navigation />
          </div>

          {/* Cart Component */}
          <Cart />
        </div>
      </div>

      {/* Menu Modal */}
      {isMenuOpen && (
        <MenuModal onClose={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}
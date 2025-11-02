import Navigation from './Navigation';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="py-12 border-b border-white border-opacity-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wider mb-8 md:mb-0">
              audiophile
            </div>
            
            {/* Navigation */}
            <div className="flex">
              <Navigation />
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Description */}
            <div className="max-w-md text-center md:text-left mb-8 md:mb-0">
              <p className="body text-white text-opacity-75">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {/* Social media icons placeholder */}
              <div className="w-6 h-6 bg-white rounded"></div>
              <div className="w-6 h-6 bg-white rounded"></div>
              <div className="w-6 h-6 bg-white rounded"></div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 text-center md:text-left">
            <p className="body text-white text-opacity-50">
              Copyright 2024. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
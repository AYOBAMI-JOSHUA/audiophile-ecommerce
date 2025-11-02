export default function Navigation() {
  return (
    <nav className="flex space-x-8">
      <a href="/" className="text-subtitle hover:text-primary transition-colors">
        HOME
      </a>
      <a href="/category/headphones" className="text-subtitle hover:text-primary transition-colors">
        HEADPHONES
      </a>
      <a href="/category/speakers" className="text-subtitle hover:text-primary transition-colors">
        SPEAKERS
      </a>
      <a href="/category/earphones" className="text-subtitle hover:text-primary transition-colors">
        EARPHONES
      </a>
    </nav>
  );
}
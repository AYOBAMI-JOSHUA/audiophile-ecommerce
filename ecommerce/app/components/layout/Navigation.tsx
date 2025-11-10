export default function Navigation({ isMobile = false }) {
  const navClasses = isMobile 
    ? "flex flex-col space-y-8 text-center"
    : "hidden md:flex space-x-8";

  const linkClasses = "text-subtitle hover:text-primary transition-colors font-bold";

  return (
    <nav className={navClasses}>
      <a href="/" className={linkClasses}>
        HOME
      </a>
      <a href="/category/headphones" className={linkClasses}>
        HEADPHONES
      </a>
      <a href="/category/speakers" className={linkClasses}>
        SPEAKERS
      </a>
      <a href="/category/earphones" className={linkClasses}>
        EARPHONES
      </a>
    </nav>
  );
}
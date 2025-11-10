import AboutSection from "./components/home/AboutSection";
import CategoryGrid from "./components/home/CategoryGrid";
import Hero from "./components/home/Hero";
import YX1Promo from "./components/home/YX1Promo";
import ZX7Promo from "./components/home/ZX7Promo";
import ZX9Promo from "./components/home/ZX9Promo";

export default function Home() {
  return (
    <div >
      <Hero />
      <CategoryGrid />
      <ZX9Promo />
      <ZX7Promo />
      <YX1Promo />
      <AboutSection />
    </div>
  );
}
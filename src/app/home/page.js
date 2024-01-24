import AppSelection from "@/templates/AppSelection/AppSelection";
import EcommerceSuccess from "@/templates/EcommerceSuccess/EcommerceSuccess";
import HeroSection from "@/templates/HeroSection/HeroSection";
import PopularNow from "@/templates/PopularNow/PopularNow";
import PrimaryNavbar from "@/templates/PrimaryNavbar/PrimaryNavbar";
import SecondaryNavbar from "@/templates/SecondaryNavbar/SecondaryNavbar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AppSelection />
      <PopularNow />
      <EcommerceSuccess />
    </>
  );
}

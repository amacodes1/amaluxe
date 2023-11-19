import Hero from "@/components/Hero";
import MobileNavbar from "@/components/MobileNavbar";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Products />
      <Testimonial />
      <MobileNavbar />
    </main>
  );
}

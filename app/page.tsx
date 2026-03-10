import Hero from "../components/hero";
import WhyUs from "../components/why-us";
import Clients from "../components/clients";
import FeaturedReviews from "@/components/FeaturedReview"; 
import Cta from "../components/cta";
import Stats from "../components/stats";
import FeaturedServices from "@/components/FeaturedServices";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Stats /> 
      <Clients />
      <WhyUs />
      <FeaturedServices />
      <FeaturedReviews />
      <Cta />
    </>
  );
}
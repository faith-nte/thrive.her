import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/work";
import Banner from "@/components/sections/home1/Banner";
import Blog from "@/components/sections/home1/Blog";
import Brands from "@/components/sections/home1/Brands";
import Country from "@/components/sections/home1/Country";
import Cta from "@/components/sections/home1/Cta";
import Donation from "@/components/sections/home1/mission";
import Event from "@/components/sections/home1/Event";
import Found from "@/components/sections/home1/Found";
import Team from "@/components/sections/home1/Team";
import Testimonial from "@/components/sections/home1/Testimonial";
import ImageCarousel from "@/components/sections/home1/ImageCarousel";
import Welcome from "@/components/sections/home1/Welcome";
import Who from "@/components/sections/home1/Who";
import WhyThisWorkMattersHero from "@/components/sections/home1/WhyThisWorkMattersHero";
import WhyThisWorkMattersInfographic from "@/components/sections/home1/WhyThisWorkMattersInfographic";
import Mission from "@/components/sections/home1/mission";
import Work from "@/components/sections/home1/work";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <WhyThisWorkMattersInfographic />
        <Mission />
        <Work />
        <Testimonial />
        <ImageCarousel />
      </Layout>
    </>
  );
}

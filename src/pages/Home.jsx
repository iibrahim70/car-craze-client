import useTitle from "../hooks/useTitle";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import ShopCategory from "../components/ShopCategory";
import PhotoGallery from "../components/PhotoGallery";
import ChooseUs from "../components/ChooseUs";
import OurServices from "../components/OurServices";
import Testimonial from "../components/Testimonial";
import BlogPost from "../components/BlogPost";

const Home = () => {
  useTitle("Home");

  return (
    <main className="pt-[64px]">
      <Hero />
      <div className="section-wrapper">
        <NewArrivals />
        <ShopCategory />
        <PhotoGallery />
        <ChooseUs />
        <OurServices />
        <Testimonial />
        <BlogPost />
      </div>
    </main>
  );
};

export default Home;

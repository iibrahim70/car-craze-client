import Hero from "../../components/hero/Hero";
import ShopCategory from "../../components/shopcategory/ShopCategory";
import PhotoGallery from "../../components/gallery/PhotoGallery";
import useTitle from "../../hooks/useTitle";
import Testimonial from "../../components/testimonial/Testimonial";
import OurServices from "../../components/ourservices/OurServices";
import ChooseUs from "../../components/chooseus/ChooseUs";
import BlogPost from "../../components/blogpost/BlogPost";
import NewArrivals from "../../components/newarrivals/newArrivals";

const Home = () => {
  useTitle("Home");

  return (
    <div className="pt-[64px]">
      <Hero />
      <div className="wrapper">
        <NewArrivals />
        <ShopCategory />
        <PhotoGallery />
        <ChooseUs />
        <OurServices />
        <Testimonial />
        <BlogPost />
      </div>
    </div>
  );
};

export default Home;

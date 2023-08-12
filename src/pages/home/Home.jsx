import React from "react";
import Hero from "../../components/hero/Hero";
import ShopCategory from "../../components/shopcategory/ShopCategory";
import PhotoGalary from "../../components/galary/PhotoGalary";
import useTitle from "../../components/hooks/useTitle";
import Testimonial from "../../components/testimonial/Testimonial";
import OurServices from "../../components/ourservices/OurServices";
import ChooseUs from "../../components/chooseus/ChooseUs";
import BlogPost from "../../components/blogpost/BlogPost";
import NewArrivals from "../../components/newarrivals/newArrivals";

const Home = () => {
  useTitle("Home");

  return (
    <div className="overflow-hidden pt-[64px]">
      <Hero />
      <NewArrivals />
      <ShopCategory />
      <PhotoGalary />
      <ChooseUs />
      <OurServices />
      <Testimonial />
      <BlogPost />
    </div>
  );
};

export default Home;

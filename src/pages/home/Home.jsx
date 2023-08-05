import React from 'react';
import Hero from '../../components/hero/Hero';
import ShopCategory from '../../components/shopcategory/ShopCategory';
import PhotoGalary from '../../components/galary/PhotoGalary';
import useTitle from '../../components/hooks/useTitle';
import Testimonial from '../../components/testimonial/Testimonial';
import QualityClients from '../../components/qualityclients/QualityClients';
import ChooseUs from '../../components/chooseus/ChooseUs';
import BlogPost from '../../components/blogpost/BlogPost';


const Home = () => {
  useTitle('Home');
  return (
    <div className='overflow-hidden pt-[64px]'>
      <Hero/>
      <PhotoGalary/>
      <ShopCategory/>
      <ChooseUs/>
      <QualityClients/>
      <BlogPost/>
      <Testimonial/>
    </div>
  );
};

export default Home;
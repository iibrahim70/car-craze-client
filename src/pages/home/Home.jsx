import React from 'react';
import Hero from '../../components/hero/Hero';
import ShopCategory from '../../components/shopcategory/ShopCategory';
import PhotoGalary from '../../components/galary/PhotoGalary';
import useTitle from '../../components/hooks/useTitle';
import Testimonial from '../../components/testimonial/Testimonial';
import QualityClients from '../../components/qualityclients/QualityClients';


const Home = () => {
  useTitle('Home');
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <PhotoGalary/>
      <ShopCategory/>
      <QualityClients/>
      <Testimonial/>
    </div>
  );
};

export default Home;
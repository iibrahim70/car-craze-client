import React from 'react';
import Hero from '../../components/homepage/Hero';
import ShopCategory from '../../components/homepage/ShopCategory';
import PhotoGalary from '../../components/homepage/PhotoGalary';
import useTitle from '../../components/hooks/useTitle';
import Testimonial from '../../components/homepage/Testimonial';
import QualityClients from '../../components/homepage/QualityClients';


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
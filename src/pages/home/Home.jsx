import React from 'react';
import Hero from '../../components/homepage/Hero';
import ShopCategory from '../../components/homepage/ShopCategory';
import PhotoGalary from '../../components/homepage/PhotoGalary';
import useTitle from '../../components/hooks/useTitle';
import Testimonial from '../../components/homepage/Testimonial';

const Home = () => {
  useTitle('Home');
  return (
    <>
      <Hero/>
      <PhotoGalary/>
      <ShopCategory/>
      <Testimonial/>
    </>
  );
};

export default Home;
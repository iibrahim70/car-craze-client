import React from 'react';
import Hero from '../../components/homepage/Hero';
import ShopCategory from '../../components/homepage/ShopCategory';
import PhotoGalary from '../../components/homepage/PhotoGalary';

const Home = () => {
  return (
    <>
      <Hero/>
      <PhotoGalary/>
      <ShopCategory/>
    </>
  );
};

export default Home;
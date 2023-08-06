import React, { useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import Card from './Card';
import Aos from 'aos';
import 'aos/dist/aos.css';

const NewArrivals = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const { isLoading, error, data: newCars } = useQuery(['newCars'], () =>
    fetch('https://car-craze-server-omega.vercel.app/new-cars').then((res) => res.json())
  );

  if (isLoading) return <div className='flex items-center justify-center min-h-screen'>Loading...</div>;
  if (error) return <div className='flex items-center justify-center min-h-screen'>Error: {error.message}</div>;

  return (
    <section className='mb-10 lg:mb-20'>
      <div data-aos='fade-right' className='space-y-5 mb-10'>
        <h2 className='text-center text-4xl font-bold'>New Car Arrivals</h2>
        <p className='text-justify lg:text-center'>Explore our latest collection of new car arrivals featuring stylish sedans, <br className='hidden lg:flex' /> versatile SUVs, and exhilarating sports cars. Discover cutting-edge features, <br className='hidden lg:flex' /> exceptional mileage, and top-notch designs for an unforgettable driving experience. <br className='hidden lg:flex' /> Find the perfect car that matches your style and needs today!</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
        {newCars.map((car) => (
          <Card key={car.name} car={car} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
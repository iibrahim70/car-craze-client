import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import GalleryItem from './GalaryItem';

const PhotoGalary = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='flex items-center justify-center flex-col'>
      <div data-aos='fade-down' className='space-y-5 mb-5'>
        <h2 className='text-center text-4xl font-bold'>Memories in Motion</h2>
        <p className='text-justify lg:text-center'>
          Take a visual journey through our captivating photo gallery, <br className='hidden lg:flex' /> showcasing the finest collection of cars, scenic drives, and unforgettable moments. <br className='hidden lg:flex' /> Let these images ignite your passion for extraordinary automobiles and the thrill of the open road.
        </p>
      </div>

      {/* sports car gallery section */}
      <div data-aos='fade-left' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5 gap-10">
        <GalleryItem imageUrl='https://i.ibb.co/42rxV37/ferrari-488-gtb.jpg' title='Ferrari 488 GTB' />
        <GalleryItem imageUrl='https://i.ibb.co/P9phLcg/porsche-911-gt3.jpg' title='Porsche 911 GT3' />
        <GalleryItem imageUrl='https://i.ibb.co/Y8kp4QY/audi-r8.webp' title='Audi R8 Spyder' />
        <GalleryItem imageUrl='https://i.ibb.co/ZWZLjZg/lamborgini.webp' title='Lamborghini Aventador' />
      </div>

      {/* sedan gallery section */}
      <div data-aos='fade-right' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <GalleryItem imageUrl='https://i.ibb.co/SwHKhdj/honda-accord.webp' title='Honda Accord' />
        <GalleryItem imageUrl='https://i.ibb.co/MSwqvSb/toyota-camry.webp' title='Toyota Camry' />
        <GalleryItem imageUrl='https://i.ibb.co/w73GzV3/bmw-3.jpg' title='BMW 3 Series' />
        <GalleryItem imageUrl='https://i.ibb.co/rFyRr91/mercedes-benz-e-class.jpg' title='Mercedes-Benz E-Class' />
      </div>
    </section>
  );
};

export default PhotoGalary;

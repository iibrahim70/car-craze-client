import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import GalleryItem from "./GalaryItem";
import SectionTitle from "../sectiontitle/SectionTitle";

const PhotoGalary = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex items-center justify-center flex-col w-full">
      <div data-aos="fade-down">
        <SectionTitle
          title="Memories in Motion"
          description="Take a visual journey through our captivating photo gallery, showcasing the finest collection of cars, scenic drives, and unforgettable moments. Let these images ignite your passion for extraordinary automobiles and the thrill of the open road."
        />
      </div>

      {/* sports car gallery section */}
      <div
        data-aos="fade-left"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5 gap-10 w-full"
      >
        <GalleryItem
          imageUrl="https://i.ibb.co/42rxV37/ferrari-488-gtb.jpg"
          title="Ferrari 488 GTB"
        />
        <GalleryItem
          imageUrl="https://i.ibb.co/P9phLcg/porsche-911-gt3.jpg"
          title="Porsche 911 GT3"
        />
        <GalleryItem
          imageUrl="https://i.ibb.co/Y8kp4QY/audi-r8.webp"
          title="Audi R8 Spyder"
        />
        <GalleryItem
          imageUrl="https://i.ibb.co/ZWZLjZg/lamborgini.webp"
          title="Lamborghini Aventador"
        />
      </div>

      {/* sedan gallery section */}
      <div
        data-aos="fade-right"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full"
      >
        <GalleryItem
          imageUrl="https://i.ibb.co/SwHKhdj/honda-accord.webp"
          title="Honda Accord"
        />
        <GalleryItem
          imageUrl="https://i.ibb.co/MSwqvSb/toyota-camry.webp"
          title="Toyota Camry"
        />
        <GalleryItem
          imageUrl="https://i.ibb.co/w73GzV3/bmw-3.jpg"
          title="BMW 3 Series"
        />
        <GalleryItem
          imageUrl="https://i.ibb.co/rFyRr91/mercedes-benz-e-class.jpg"
          title="Mercedes-Benz E-Class"
        />
      </div>
    </section>
  );
};

export default PhotoGalary;

import React, { useEffect } from "react";
import Aos from "aos";
import images from "../../public/images.json";
import SectionTitle from "./SectionTitle";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "aos/dist/aos.css";

const PhotoGallery = () => {
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

      {/* car gallery section */}
      <div data-aos="fade-left">
        <LightGallery
          elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5 gap-10"
          plugins={[lgZoom]}
        >
          {images.map((item, index) => (
            <img
              key={index}
              className="w-full h-full object-cover cursor-pointer rounded hover:scale-110 duration-500"
              src={item?.imageUrl}
              alt={item?.title}
            />
          ))}
        </LightGallery>
      </div>
    </section>
  );
};

export default PhotoGallery;

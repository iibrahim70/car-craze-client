import { useEffect } from "react";
import { Link } from "react-router-dom";
import carVideo from "../assets/vdo/car.mp4";
import { buttonVariants } from "./Button";
import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <video
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload"
        src={carVideo}
        className="video brightness-75"
      />

      <div
        data-aos="fade-up"
        className="absolute top-0 h-full flex flex-col items-center justify-center space-y-3 lg:space-y-5 px-10 md:px-0"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white antialiased text-center">
          Discover Your <span className="text-red">Dream</span> Car
        </h1>
        <p className="text-center md:w-2/3 text-white line-clamp-3">
          Step into a world of automotive excellence. Discover an array of
          finely crafted vehicles, from classics to modern marvels. Explore
          cutting-edge technology, precision engineering, and unparalleled
          performance. Whether you're a seasoned enthusiast or just starting,
          this is your gateway to automotive dreams. Find your perfect match
          here.
        </p>
        <div>
          <Link to="/allcars" className={buttonVariants()}>
            <div className="flex items-center gap-2">
              View Cars <BsArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

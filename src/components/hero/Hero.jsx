import { useEffect } from "react";
import { Link } from "react-router-dom";
import carVideo from "../../assets/vdo/Car.mp4";
import { buttonVariants } from "../button/Button";
import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section data-aos="fade-up">
      <video
        autoPlay
        loop
        muted
        controlsList="nodownload"
        className="video brightness-75"
      >
        <source type="video/mp4" src={carVideo} />
      </video>

      <div className="absolute top-0 h-full flex flex-col items-center justify-center space-y-5 px-10 md:px-0">
        <h1 className="text-5xl lg:text-6xl font-bold text-white antialiased">
          Discover Your <span className="text-red">Dream</span> Car
        </h1>
        <p className="text-justify md:text-center md:w-2/3 text-white">
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

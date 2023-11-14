import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Aos from "aos";
import SectionTitle from "./SectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { isLoading, error, data } = useQuery(["reviews"], () =>
    axios
      .get("https://car-craze-server-omega.vercel.app/reviews")
      .then((res) => res.data)
  );

  if (isLoading || error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {isLoading ? "Loading..." : `Error: ${error.message}`}
      </div>
    );
  }

  return (
    <div className="mt-10 lg:mt-20">
      <div data-aos="fade-down">
        <SectionTitle
          title="Our Client's Voice"
          description="Discover what our clients have to say about their car-buying experiences. From sports car enthusiasts to Mini Fire Truck owners and police officers, read their stories and find inspiration for your own journey."
        />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide className="mb-10 lg:mb-20 border rounded" key={index}>
            <div
              data-aos="fade-right"
              className="space-y-3 p-5 text-center h-80 flex items-center justify-center flex-col"
            >
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={item.image} alt={`Photo of ${item.name}`} />
                </div>
              </div>

              <p>{item.review}</p>
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p>{item.work_position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;

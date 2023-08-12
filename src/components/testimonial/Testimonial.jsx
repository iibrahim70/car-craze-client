import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import SectionTitle from "../sectiontitle/SectionTitle";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery(["reviews"], () =>
    fetch("https://car-craze-server-omega.vercel.app/reviews").then((res) =>
      res.json()
    )
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );

  const swiperBreakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="mt-10 lg:mt-20">
      <div data-aos="fade-right">
        <SectionTitle
          title="Our Client's Voice"
          description="Discover what our clients have to say about their car-buying experiences. From sports car enthusiasts to Mini Fire Truck owners and police officers, read their stories and find inspiration for your own journey."
        />
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        breakpoints={swiperBreakpoints}
      >
        {reviews.map((item, index) => (
          <SwiperSlide className="mb-10 lg:mb-20" key={index}>
            <div
              data-aos="fade-left"
              className="rounded-xl space-y-3 p-5 shadow-xl text-center h-80 flex items-center justify-center flex-col"
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

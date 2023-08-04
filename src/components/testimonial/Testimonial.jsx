import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const testimonials = [
    {
      "name": "Sarah Thompson",
      "gender": "female",
      "review": "Had a wonderful experience buying my first car. The team was helpful and ensured I found the perfect car that fit my budget. Highly recommended!",
      "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      "work_position": "Business Analyst"
    },
    {
      "name": "Michael Rodriguez",
      "gender": "male",
      "review": "Outstanding selection of sports cars! Couldn't be happier with my purchase. The staff was knowledgeable and friendly throughout the process.",
      "image": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      "work_position": "Software Engineer"
    },
    {
      "name": "Emily Johnson",
      "gender": "female",
      "review": "Bought a Mini Fire Truck for my son's birthday, and he loves it! Great attention to detail and quality. Thank you!",
      "image": "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      "work_position": "Marketing Manager"
    },
    {
      "name": "David Smith",
      "gender": "male",
      "review": "As a police officer, having a reliable and well-equipped police car is crucial. Impressed with the professionalism and range of cars offered.",
      "image": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      "work_position": "Police Officer"
    },
    {
      "name": "Jennifer Lee",
      "gender": "female",
      "review": "Traded in my SUV for a family-friendly model. Smooth process and got a great deal on the new vehicle. Very satisfied with the service.",
      "image": "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      "work_position": "Teacher"
    },
    {
      "name": "John Williams",
      "gender": "male",
      "review": "Car enthusiast's dream! Fulfilled all my expectations. Wide range of choices made it easy to find the perfect sports car. Highly recommended!",
      "image": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      "work_position": "Investment Banker"
    },
    {
      "name": "Emma Roberts",
      "gender": "female",
      "review": "Fantastic selection of spacious SUVs. The staff was patient and helpful in finding the right one for us.",
      "image": "https://plus.unsplash.com/premium_photo-1671717725889-c0e43e6ed096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      "work_position": "Interior Designer"
    },
    {
      "name": "Daniel Kim",
      "gender": "male",
      "review": "Impressive collection of police cars. Smooth and professional process from browsing to purchase.",
      "image": "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      "work_position": "Software Developer"
    },
    {
      "name": "Sophia Chen",
      "gender": "female",
      "review": "Thrilled to find a Mini Fire Truck for my son's birthday. He's over the moon with it! Exceptional quality and buying experience.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      "work_position": "Graphic Designer"
    }
  ];

  const swiperBreakpoints = {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  
  return (
    <div className="py-10 lg:py-20">
      <div data-aos='fade-right' className='space-y-5 mb-10'>
        <h2 className='text-center text-4xl font-bold'>Our Client's Voice</h2>
        <p className='text-justify lg:text-center'>Discover what our clients have to say about their car-buying experiences. <br className='hidden lg:flex' /> From sports car enthusiasts to Mini Fire Truck owners and police officers, <br className='hidden lg:flex' /> read their stories and find inspiration for your own journey.</p>
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div data-aos='fade-left' className="bg-slate-50 rounded-xl space-y-3 p-5 shadow-xl text-center h-80">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} />
                </div>
              </div>
              <p>{testimonial.review}</p>
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              <p>{testimonial.work_position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;


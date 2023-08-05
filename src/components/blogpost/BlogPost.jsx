import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BlogPost = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const blogPosts = [
    {
      "title": "The Evolution of Automotive Technology: From Horse Carriages to Electric and Self-Driving Cars",
      "description": "Explore the fascinating journey of automotive technology and how it has transformed transportation over the years.",
      "date": "2023-07-15",
      "image": "https://i.ibb.co/0sZvBTy/Automotive-Technology.jpg"
    },
    {
      "title": "The Magnificent Beauty of Vintage Classic Cars: A Glimpse into Automotive History",
      "description": "Step back in time and marvel at the timeless elegance and charm of vintage classic cars from different eras.",
      "date": "2023-06-25",
      "image": "https://i.ibb.co/gJtsTMv/vintage-car.jpg"
    },
    {
      "title": "Advancements in Electric Vehicle Batteries: Paving the Way for a Sustainable Future",
      "description": "Discover the latest breakthroughs in electric vehicle battery technology and their crucial role in promoting eco-friendly transportation.",
      "date": "2023-08-05",
      "image": "https://i.ibb.co/Y85fcQw/electric-vehicle-batteries.jpg"
    }
  ];


  return (
    <section className='flex items-center justify-center flex-col mt-10 lg:mt-20'>
      <div data-aos='fade-down' className='space-y-5 mb-5'>
        <h2 className='text-center text-4xl font-bold'>Supercar Chronicles</h2>
        <p className='text-justify lg:text-center'>
          Unveiling the Fascinating World of Exotic Supercars: <br className='hidden lg:flex' /> A Journey of Speed, Luxury, and Innovation
        </p>
      </div>

      <div data-aos='fade-left' className="grid grid-cols-1 gap-y-5">
        {blogPosts.map((post, index) => (
          <div key={index} className='flex flex-col lg:flex-row rounded-lg border-b-[1px] border-[#212121] p-1'>
            <div className='flex-1 flex justify-center flex-col space-y-2 text-justify mb-2 lg:mb-0'>
              <h2 className='text-xl font-semibold'>{post.title}</h2>
              <p>{post.description}</p>
              <p>Date: {post.date}</p>
            </div>

            <div className='flex-1 flex justify-end'>
            <img className='h-[150px] w-full lg:w-[400px] lg:h-[180px] rounded' src={post.image} alt={post.title} />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;

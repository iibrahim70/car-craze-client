import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../sectiontitle/SectionTitle";

const BlogPost = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const blogPosts = [
    {
      title:
        "The Evolution of Automotive Technology: From Horse Carriages to Electric and Self-Driving Cars",
      description:
        "Explore the fascinating journey of automotive technology and how it has transformed transportation over the years.",
      date: "2023-07-15",
      image: "https://i.ibb.co/0sZvBTy/Automotive-Technology.jpg",
    },
    {
      title:
        "The Magnificent Beauty of Vintage Classic Cars: A Glimpse into Automotive History",
      description:
        "Step back in time and marvel at the timeless elegance and charm of vintage classic cars from different eras.",
      date: "2023-06-25",
      image: "https://i.ibb.co/gJtsTMv/vintage-car.jpg",
    },
    {
      title:
        "Advancements in Electric Vehicle Batteries: Paving the Way for a Sustainable Future",
      description:
        "Discover the latest breakthroughs in electric vehicle battery technology and their crucial role in promoting eco-friendly transportation.",
      date: "2023-08-05",
      image: "https://i.ibb.co/Y85fcQw/electric-vehicle-batteries.jpg",
    },
  ];

  return (
    <section className="flex items-center justify-center flex-col mb-10 lg:mb-20">
      <div data-aos="fade-down">
        <SectionTitle
          title="Supercar Chronicles"
          description="Embark on a Spectacular Journey Through the Mesmerizing Realm of Exotic Supercars: Discover the Pinnacle of Automotive Engineering, Where Blazing Speed Meets Unadulterated Luxury and Unprecedented Innovation."
        />
      </div>

      <div className="grid grid-cols-1 gap-y-5">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            data-aos={
              index % 3 === 0
                ? "fade-left"
                : index % 3 === 1
                ? "fade-up"
                : "fade-right"
            }
            className="flex flex-col lg:flex-row border-b-[1px] border-black p-5"
          >
            <div className="flex-1 flex justify-center flex-col space-y-2 text-justify mb-2 lg:mb-0">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p>{post.description}</p>
              <p>Date: {post.date}</p>
            </div>

            <div className="flex-1 flex justify-end">
              <img
                className="h-[150px] w-full lg:w-[400px] lg:h-[180px] rounded object-cover"
                src={post.image}
                alt={post.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;

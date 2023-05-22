import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, ABC Company',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus iure impedit dignissimos tempore nulla facilis.',
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Manager, XYZ Inc.',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
      content: 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio exercitationem laborum quis odit quisquam!',
    },
    {
      name: 'David Johnson',
      position: 'Product Designer, XYZ Ltd.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
      content: 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus similique, quo optio aperiam doloremque.',
    },
  ];
  
  return (
    <div data-aos='fade-left' className="min-h-screen">
      <h2 className='text-center text-4xl md:text-4xl font-bold'>What Our Clients Say</h2>
      <p className='text-center mt-5 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className='hidden md:flex' /> Ab pariatur praesentium illo, accusamus iure mollitia <br className='hidden md:flex' /> ipsum reprehenderit expedita veritatis cum.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg space-y-3 p-5 shadow-md text-center"
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={testimonial.image} />
              </div>
            </div>
            <p className="text-[#212121]">{testimonial.content}</p>
            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
            <p className="text-[#212121]">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

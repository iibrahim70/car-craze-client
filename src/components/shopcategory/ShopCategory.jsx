import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ShopCategory = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState("Sedan");

  const { isLoading, error, data: categoryData } = useQuery(
    ['category'],
    () => fetch('https://car-craze-server-omega.vercel.app/cars')
      .then(res => res.json())
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let filteredData = categoryData;

  if (!isLoading && !error) {
    if (activeTab === 'Sedan') filteredData = categoryData.filter(data => data.category === 'Sedan'); 

    if (activeTab === 'SUV') filteredData = categoryData.filter(data => data.category === 'SUV');
    
    if (activeTab === 'Sports Car') filteredData = categoryData.filter(data => data.category === 'Sports Car');
  }

  if (isLoading) return <div className='flex items-center justify-center min-h-screen'>Loading...</div>;
  if (error) return <div className='flex items-center justify-center min-h-screen'>Error: {error.message}</div>;

  return (
    <section className='mt-10 lg:mt-20'>
      <div data-aos='fade-down' className='space-y-5 mb-5'>
        <h2 className='text-center text-4xl font-bold'>Explore by Category</h2>
        <p className='text-justify lg:text-center'>Experience the thrill of speed with our Sports Cars, let your little ones' <br className='hidden lg:flex' /> imagination soar with our Mini Fire Trucks, or patrol the streets in style with our Police Cars. <br className='hidden lg:flex' /> Explore our unique categories and find the perfect vehicle to match your excitement and needs.</p>
      </div>

      <div data-aos='zoom-in-left' className='flex gap-5'>
        <div onClick={() => handleTabClick("Sedan")} className={`shadow-xl p-3 text-black sedan ${activeTab === "Sedan" ? "bg-[#2ECC71] font-medium" : ""}`}>Sedan</div>

        <div onClick={() => handleTabClick("SUV")} className={`shadow-xl p-3 text-black suv ${activeTab === "SUV" ? "bg-[#2ECC71] font-medium" : ""}`}>Sport Utility Vehicle</div>
        
        <div onClick={() => handleTabClick("Sports Car")} className={`shadow-xl p-3 text-black sports-car ${activeTab === "Sports Car" ? "bg-[#2ECC71] font-medium" : ""}`}>Sports Car</div>
      </div>

      <div data-aos='zoom-out-right' className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-5'>
        {filteredData.map(item => (
          <CategoryCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ShopCategory;

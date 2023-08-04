import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ShopCategory = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  const [shopCategory, setShopCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("sports-car"); 

  useEffect(() => {
    fetch(`https://car-craze-server-omega.vercel.app/shop-category/${activeTab}`)
      .then(res => res.json())
      .then(data => setShopCategory(data))
      .catch(error => console.error(error));
  }, [activeTab]);
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className='mt-10 lg:mt-20'>
      
      <div data-aos='fade-down' className='space-y-5 mb-5'>
        <h2 className='text-center text-4xl font-bold'>Explore by Category</h2>
        <p className='text-justify lg:text-center'>Experience the thrill of speed with our Sports Cars, let your little ones' <br className='hidden lg:flex' /> imagination soar with our Mini Fire Trucks, or patrol the streets in style with our Police Cars. <br className='hidden lg:flex' /> Explore our unique categories and find the perfect vehicle to match your excitement and needs.</p>
      </div>
      
      <div data-aos='zoom-in-left' className='flex gap-5'>
        <div onClick={() => handleTabClick("sports-car")} className={`shadow-xl p-3 text-black sports-car${activeTab === "sports-car" ? " bg-[#2ECC71] font-medium" : ""}`}>Sports Car</div>

        <div onClick={() => handleTabClick("mini-fire-truck")} className={`shadow-xl p-3 text-black mini-fire-truck${activeTab === "mini-fire-truck" ? " bg-[#2ECC71] font-medium" : ""}`}>Mini Fire Truck</div>

        <div onClick={() => handleTabClick("police-car")} className={`shadow-xl p-3 text-black police-car${activeTab === "police-car" ? " bg-[#2ECC71] font-medium" : ""}`}>Police Car</div>
      </div>


      <div data-aos='zoom-out-right' className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-5'>
        {shopCategory.map(category => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>

    </section>
  );
};

export default ShopCategory;

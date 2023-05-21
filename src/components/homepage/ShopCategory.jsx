import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const ShopCategory = () => {
  const [shopCategory, setShopCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("sports-car"); 

  useEffect(() => {
    fetch(`http://localhost:5000/shop-category/${activeTab}`)
      .then(res => res.json())
      .then(data => setShopCategory(data))
      .catch(error => console.error(error));
  }, [activeTab]);
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='mb-10 md:mb-20'>
      <h2 className='text-center text-4xl md:text-4xl font-bold'>Shop by Category</h2>
      <p className='text-center mt-5 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className='hidden md:flex' /> Ab pariatur praesentium illo, accusamus iure mollitia <br className='hidden md:flex' /> ipsum reprehenderit expedita veritatis cum.</p>
      
      <div className='flex gap-5'>
        <div onClick={() => handleTabClick("sports-car")} className={`shadow-xl p-3 text-black sports-car${activeTab === "sports-car" ? " bg-[#2ECC71] font-medium" : ""}`}>Sports Car</div>

        <div onClick={() => handleTabClick("mini-fire-truck")} className={`shadow-xl p-3 text-black mini-fire-truck${activeTab === "mini-fire-truck" ? " bg-[#2ECC71] font-medium" : ""}`}>Mini Fire Truck</div>

        <div onClick={() => handleTabClick("police-car")} className={`shadow-xl p-3 text-black police-car${activeTab === "police-car" ? " bg-[#2ECC71] font-medium" : ""}`}>Police Car</div>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 pt-5'>
        {shopCategory.map(category => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;

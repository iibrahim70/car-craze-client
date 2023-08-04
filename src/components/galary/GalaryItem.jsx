import React from 'react';

const GalleryItem = ({ imageUrl, title }) => {
  return (
    <div className="space-y-2 text-center">
      <img className='h-[200px]' src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GalleryItem;

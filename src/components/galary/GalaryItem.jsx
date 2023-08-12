import React from "react";

const GalleryItem = ({ imageUrl, title }) => {
  return (
    <div className="space-y-2 text-center w-full h-full">
      <div className="h-[180px] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default GalleryItem;

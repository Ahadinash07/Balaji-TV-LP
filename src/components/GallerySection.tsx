import React from 'react';

const images = [
  '/Images/IMG_0797.JPG',
  '/Images/IMG_0802.JPG',
  '/Images/IMG_0803.JPG',
  '/Images/IMG_0804.JPG',
  '/Images/IMG_0806.JPG',
  '/Images/IMG_0815.JPG',
  '/Images/IMG_0816.JPG',
  '/Images/IMG_0825.JPG'
];

export const GallerySection = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">Our Work in Action</h2>
          <p className="text-lg text-[#6B7280]">See our expert technicians performing live TV repairs across Hyderabad.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-square relative overflow-hidden rounded-xl shadow-md group">
              <img 
                src={src} 
                alt={`TV Repair Work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

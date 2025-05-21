import React from 'react';
import Image from 'next/image';

interface PortfolioItemProps {
  item: {
    image: string;
    title: string;
    category: string;
    description: string;
  };
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="relative w-full h-64">
        <Image 
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transform group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 w-full">
          <span className="text-indigo-400 text-sm font-medium mb-2 block">
            {item.category}
          </span>
          <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
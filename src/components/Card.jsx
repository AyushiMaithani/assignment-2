import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResourceCard = ({ id, categoryId, title, image, bgColor }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.2 }}
      className="relative rounded-xl overflow-hidden h-48 min-w-[280px] sm:min-w-[300px] shadow-md cursor-pointer"
    >
      <Link to={`/detail/${categoryId}/${id}`}>
        <div className={`absolute inset-0 ${bgColor} bg-opacity-80`}>
          <img 
            src={image} 
            className="w-full h-full object-cover  "
          />
        </div>
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
          <div className="flex justify-end">
            <span className="px-3 py-1 bg-white bg-opacity-20 text-white text-sm rounded-full">
              Learn More
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ResourceCard;
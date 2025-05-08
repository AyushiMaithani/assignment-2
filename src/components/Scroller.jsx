import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ResourceCard from './Card';

const Scroller = ({ title, categoryId, items }) => {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPosition, setScrollLeftPosition] = useState(0);

  const checkScrollButtons = () => {
    if (scrollerRef.current) {
      setCanScrollLeft(scrollerRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollerRef.current.scrollLeft < 
        scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const handleScrollLeft = () => {
    if (scrollerRef.current) {
      const newPosition = scrollerRef.current.scrollLeft - 320;
      scrollerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      const newPosition = scrollerRef.current.scrollLeft + 320;
      scrollerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollerRef.current?.offsetLeft || 0));
    setScrollLeftPosition(scrollerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollerRef.current) {
      const x = e.pageX - (scrollerRef.current.offsetLeft || 0);
      const walk = (x - startX) * 1.5;
      scrollerRef.current.scrollLeft = scrollLeftPosition - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    checkScrollButtons();
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <Link 
          to={`/category/${categoryId}`}
          className="px-5 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
            onClick={handleScrollLeft}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        )}

        <div 
          ref={scrollerRef}
          className="flex space-x-5 overflow-x-auto py-4 scroll-smooth hide-scrollbar"
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <ResourceCard
              key={item.id}
              id={item.id}
              categoryId={categoryId}
              title={item.title}
              image={item.image}
              bgColor={item.bgColor}
            />
          ))}
        </div>

        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
            onClick={scrollRight}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Scroller;
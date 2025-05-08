import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  examData, 
  questionsData, 
  syllabusData, 
  booksData 
} from '../constant';

const CategoryPage = () => {
  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const getCategoryData = () => {
    switch (categoryId) {
      case 'exams':
        return { title: 'About Exams', data: examData };
      case 'questions':
        return { title: 'Previous Year Questions', data: questionsData };
      case 'syllabus':
        return { title: 'Syllabus', data: syllabusData };
      case 'books':
        return { title: 'Books', data: booksData };
      default:
        return { title: 'Resources', data: [] };
    }
  };

  const { title, data } = getCategoryData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Home
        </Link>
      </div>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600">
          Browse our complete collection of {title.toLowerCase()} resources to help you prepare effectively.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.map((item) => (
          <motion.div 
            key={item.id}
            variants={itemVariants}
            className="h-64 relative rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg"
          >
            <Link to={`/detail/${categoryId}/${item.id}`}>
              <div className={`absolute inset-0 ${item.bgColor || 'bg-blue-500'} bg-opacity-80`}>
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover opacity-60 "
                />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <h2 className="text-white text-2xl font-bold">{item.title}</h2>
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">
                    Click to view details
                  </span>
                  <span className="px-3 py-1 bg-white bg-opacity-20 text-white text-sm rounded-full">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryPage;

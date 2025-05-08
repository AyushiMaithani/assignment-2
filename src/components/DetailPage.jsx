import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  examData, 
  questionsData, 
  syllabusData, 
  booksData,
  getCategoryTitle
} from '../constant';

const DetailPage = () => {
  const { categoryId, itemId } = useParams();
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const findItem = () => {
      let dataArray;
      switch(categoryId) {
        case 'exams':
          dataArray = examData;
          break;
        case 'questions':
          dataArray = questionsData;
          break;
        case 'syllabus':
          dataArray = syllabusData;
          break;
        case 'books':
          dataArray = booksData;
          break;
        default:
          dataArray = [];
      }
      return dataArray.find(item => item.id === itemId);
    };

    setItem(findItem());
  }, [categoryId, itemId]);

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4"
    >
      <div className="mb-8">
        <Link 
          to={`/category/${categoryId}`} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to {getCategoryTitle(categoryId)}
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div 
          className="h-64 md:h-80 relative" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              {item.title}
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8">

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-700 mb-6">
              {item.description || `Information about ${item.title}`}
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li>Comprehensive coverage of all important topics</li>
              <li>Expert-verified content for accurate information</li>
              <li>Regularly updated to match the latest patterns</li>
              <li>Includes practice questions and examples</li>
              <li>User-friendly format for easy understanding</li>
            </ul>        
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailPage;

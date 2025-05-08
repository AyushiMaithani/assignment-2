import React, { useEffect } from 'react';
import Scroller from './Scroller';
import { examData, questionsData, syllabusData, booksData } from '../constant';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4">
 
      {/* Resource Sections */}
      <Scroller
        title="About Exams"
        categoryId="exams"
        items={examData}

      />

      <Scroller
        title="Previous Year Questions"
        categoryId="questions"
        items={questionsData}
      />

      <Scroller
        title="Syllabus"
        categoryId="syllabus"
        items={syllabusData}
      />

      <Scroller
        title="Books"
        categoryId="books"
        items={booksData}
      />
    </div>
  );
};

export default HomePage;

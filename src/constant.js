import { image } from "framer-motion/client";
import img1 from "./assests/dsa1.png";
import img2 from "./assests/dsa2.png";
import img3 from "./assests/dsa3.png";
import img4 from "./assests/dsa4.png";
import img5 from "./assests/learn1.png";
import img6 from "./assests/learn4.png";  
import img7 from "./assests/dev1.png";
import img8 from "./assests/dev2.png";
import img9 from "./assests/dev3.png";
import img10 from "./assests/dev4.png";
import img11 from "./assests/ML-DS1-min.png";
import img12 from "./assests/ML-DS2-min.png";
import img13 from "./assests/ML-DS3-min.png";
import img14 from "./assests/ML-DS4-min.png";

  // Exams data
  export const examData = [
    {
      id: "jee-main",
      title: "JEE Mains",
      description: "Joint Entrance Examination (JEE) Main is a standardized test conducted for admission to various engineering colleges in India. The exam is conducted by the National Testing Agency (NTA) for admission to undergraduate engineering programs.",
      bgColor: "bg-[#21A1A1]",
      image: img1
    },
    {
      id: "jee-advanced",
      title: "JEE Advanced",
      description: "JEE Advanced is the second phase of the Joint Entrance Examination conducted for admission to the 23 Indian Institutes of Technology (IITs). Only the top 2,50,000 rank holders in JEE Main qualify to appear for JEE Advanced.",
      bgColor: "bg-[#21A1A1]",
      image: img2
    },
    {
      id: "neet",
      title: "NEET",
      description: "The National Eligibility cum Entrance Test (NEET) is the entrance examination for admission to medical colleges in India. It is conducted by the National Testing Agency (NTA) for admission to MBBS, BDS, AYUSH and other medical courses.",
      bgColor: "bg-[#21A1A1]",
      image: img3
    },
    {
      id: "boards",
      title: "Boards",
      description: "Board exams are the final examinations conducted by educational boards at the end of an academic year. They serve as an evaluation of a student's understanding of the subjects they have studied throughout the year.",
      bgColor: "bg-[#21A1A1]",
      image: img4
    },
    {
      id: "ntse",
      title: "NTSE",
      bgColor: "bg-[#21A1A1]",
      description: "The National Talent Search Examination (NTSE) is a national-level scholarship program to identify and nurture talented students. It is conducted by NCERT for students studying in Class X.",
      image: img3
    },
    {
      id: "olympiads",
      title: "Olympiads",
      bgColor: "bg-[#21A1A1]",
      description: "Olympiads are competitive exams that test a student's conceptual understanding and logical reasoning in various subjects. They are conducted at regional, national and international levels to identify and nurture talented students.",
      image: img4
    }
  ];
  
  // Previous Year Questions data
  export const questionsData = [
    {
      id: "jee-main-pyq",
      title: "JEE Mains",
      bgColor: "bg-[#5dc298]",
      image:img7

    },
    {
      id: "jee-advanced-pyq",
      title: "JEE Advanced",
      bgColor: "bg-[#5dc298]",
      image:img8
    },
    {
      id: "neet-pyq",
      title: "NEET",
      bgColor: "bg-[#5dc298]",
      image:img7
    },
    {
      id: "cbse-board-pyq",
      title: "CBSE Board",
      bgColor: "bg-[#5dc298]",
      image:img8
    },
    {
      id: "kvpy-pyq",
      title: "KVPY",
      bgColor: "bg-[#5dc298]",
      image:img9
    },
    {
      id: "ntse-pyq",
      title: "NTSE",
      bgColor: "bg-[#5dc298]",
      image:img10
    }
  ];
  
  // Syllabus data
  export const syllabusData = [
    {
      id: "jee-main-syllabus",
      title: "JEE Mains",
      bgColor: "bg-indigo-600",
      image:img11
      
    },
    {
      id: "jee-advanced-syllabus",
      title: "JEE Advanced",
      bgColor: "bg-indigo-600",
      image:img12
    },
    {
      id: "neet-syllabus",
      title: "NEET",
      bgColor: "bg-indigo-600",
      image:img13
    },
    {
      id: "cbse-board-syllabus",
      title: "CBSE Board",
      bgColor: "bg-indigo-600",
      image:img14
    },
    {
      id: "ntse-syllabus",
      title: "NTSE",
      bgColor: "bg-indigo-600",
      image:img11
    },
    {
      id: "olympiads-syllabus",
      title: "Olympiads",
      bgColor: "bg-indigo-600",
      image:img12
    }
  ];
  
  // Books data
  export const booksData = [
    {
      id: "ncert",
      title: "NCERT",
      bgColor: "bg-[#12bd84]",
      image: img5
    },
    {
      id: "jee-books",
      title: "JEE (Mains + Adv.)",
      bgColor: "bg-[#12bd84]",
      image: img6
    },
    {
      id: "neet-books",
      title: "NEET",
      bgColor: "bg-[#12bd84]",
      image: img5
    },
    {
      id: "cbse-books",
      title: "CBSE Textbooks",
      bgColor: "bg-[#12bd84]",
      image: img6
    },
    {
      id: "foundation-books",
      title: "Foundation",
      bgColor: "bg-[#12bd84]",
      image: img5
    }
  ];
  
  export const getCategoryTitle = (categoryId) => {
    switch (categoryId) {
      case 'exams':
        return 'About Exams';
      case 'questions':
        return 'Previous Year Questions';
      case 'syllabus':
        return 'Syllabus';
      case 'books':
        return 'Books';
      default:
        return 'Resources';
    }
  };
  
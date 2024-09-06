import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img from "../assets/images.png"
import img2 from "../assets/img.jpg"
import img3 from "../assets/img2.jpg"
import img4 from "../assets/img3.jpg"
import img5 from "../assets/images.jpg"

const employees = [
  { id: 1, name: "خانم تیموری", expertise: "مدیریت مدرسه", image: img },
  { id: 2, name: "خانم مریم احمدی", expertise: "آموزگار زبان", image: img2 },
  { id: 3, name: "خانم زهرا کریمی", expertise: "آموزگاز کلاس اول", image: img3 },
  { id: 4, name: "خانم سارا رضایی", expertise: "آموزگاز نقاشی", image: img4 },
  { id: 5, name: "خانم فاطمه حسینی", expertise: "مربی مهد", image: img5 },
];

const EmployeeCard = ({ employee }) => (
  <div className="flex flex-col items-center p-4 lg:px-16 bg-sky-800">
    <img
      src={employee.image}

      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
    />
    <h3 className="text-lg font-semibold text-center">{employee.name}</h3>
    <p className="text-sm text-gray-100 text-center">{employee.expertise}</p>
  </div>
);

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % employees.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + employees.length) % employees.length);
  };

  const getVisibleEmployees = () => {
    if (isLargeScreen) {
      return [
        employees[currentIndex],
        employees[(currentIndex + 1) % employees.length],
        employees[(currentIndex + 2) % employees.length]
      ];
    } else {
      return [employees[currentIndex]];
    }
  };

  return (
    <div className="flex flex-col items-center p-4  text-white bg-sky-800">
      <h2 className="text-xl sm:text-3xl pb-4 lg:pb-12 ">کارکنان ما</h2>
      <div className="relative w-full max-w-4xl">
        <div className="flex justify-center items-center ">
          <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex justify-center items-center w-full md:px-3">
            {getVisibleEmployees().map((employee) => (
              <EmployeeCard key={employee.id} employee={employee}/>
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
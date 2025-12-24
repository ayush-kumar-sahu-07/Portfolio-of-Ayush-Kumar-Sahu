import React from "react";
import { coursesData } from "../../utils/data/courses-data";

const CoursesPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 md:px-16">
      <div className="my-6">
        <h1 className="text-3xl font-bold text-white mb-8">Courses & Certifications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <div key={index} className="bg-gradient-to-r from-[#0d1224] border-[#1b2c68a0] relative border to-[#0a0d37] rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-lg mb-4 w-full h-40 object-contain bg-white/5 p-2"
                />
                <h2 className="text-xl font-semibold text-white mb-2">{course.title}</h2>
                <p className="text-sm text-gray-400 mb-2">{course.description}</p>
                <p className="text-xs text-gray-500 mb-1">Issuer: {course.issuer}</p>
                <p className="text-xs text-gray-500 mb-4">Completed: {course.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
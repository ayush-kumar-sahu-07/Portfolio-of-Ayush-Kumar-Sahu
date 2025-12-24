import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { coursesData } from "../../../../utils/data/courses-data";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Courses = () => {
  return (
    <div id='courses' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"></div>
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Courses & Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {coursesData.slice(0, 6).map((course, index) => (
          <div key={index} className="group relative">
            <div className="bg-gradient-to-r from-[#0d1224] border-[#1b2c68a0] relative border to-[#0a0d37] rounded-lg p-4">
              <div className="flex flex-col items-center">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={200}
                  height={150}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{course.description}</p>
                <p className="text-xs text-gray-500 mb-1">Issuer: {course.issuer}</p>
                <p className="text-xs text-gray-500 mb-4">Completed: {course.date}</p>
                {course.link && (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 flex items-center"
                  >
                    View Certificate <FaExternalLinkAlt className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/courses"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Courses;
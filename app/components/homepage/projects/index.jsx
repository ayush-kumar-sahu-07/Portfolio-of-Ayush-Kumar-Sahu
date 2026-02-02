'use client';

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const containerRef = useRef(null);

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24" ref={containerRef}>
      <div className="sticky top-10 z-[100]">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <StackedCard 
              key={project.id} 
              project={project} 
              index={index}
              total={projectsData.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual stacked card component with scroll-based transforms
const StackedCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  // Calculate stacking position - cards stack with decreasing top offset
  const stackOffset = (total - index - 1) * 20; // 20px offset per card
  
  // Transform scale: cards scale down slightly as they get stacked
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 0.98, 1]
  );

  // Transform Y: smooth vertical movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        y,
        position: 'sticky',
        top: `${80 + stackOffset}px`, // Stack cards with offset from top
        zIndex: index, // Lower index = lower z-index = appears under newer cards
      }}
      className="will-change-transform"
    >
      <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-shadow duration-500">
        <ProjectCard project={project} />
      </div>
    </motion.div>
  );
};

export default Projects;
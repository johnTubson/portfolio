import { AnimatePresence, motion } from "framer-motion";
import { useState, type FC, type ReactNode } from "react";
import { FiBriefcase, FiGithub } from "../../../assets/icons";

interface ProjectCardProps {
  project: {
    title: string;
    technologies: string[];
    context: string;
    task: string;
    action: string;
    result: string;
    diagramUrls: string[];
    codeSnippets: {
      title: string;
      lang: string;
      code: string;
    }[];
    liveLink: string;
    repoLink: string;
  };
  setCarouselData: ({
    images,
    startIndex,
  }: {
    images: string[];
    startIndex: number;
  }) => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  project,
  setCarouselData,
}) => {
  const [activeTab, setActiveTab] = useState("details");
  const StarPoint = ({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) => (
    <div>
      <h4 className='font-bold text-cyan-400 text-lg'>{title}</h4>
      <p className='text-gray-300 leading-loose font-normal text-base'>
        {children}
      </p>
    </div>
  );

  return (
    <motion.div
      className='bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='p-6'>
        <h3 className='text-base md:text-lg font-bold mb-4 text-cyan-400'>
          {project.title}
        </h3>
        <div className='mb-4 flex flex-wrap gap-2'>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className='bg-gray-700 rounded-full px-2 py-1 text-[12px] md:text-sm font-normal md:font-semibold text-gray-300'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className='border-b border-gray-700 flex'>
        <button
          onClick={() => setActiveTab("details")}
          className={`flex-1 py-2 text-[12px] md:text-sm text-center font-semibold transition-colors ${
            activeTab === "details"
              ? "bg-gray-700 text-cyan-400"
              : "text-gray-300 hover:bg-gray-700/50"
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab("diagram")}
          className={`flex-1 py-2 text-[12px] md:text-sm text-center font-semibold transition-colors ${
            activeTab === "diagram"
              ? "bg-gray-700 text-cyan-400"
              : "text-gray-300 hover:bg-gray-700/50"
          }`}
        >
          Diagrams
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex-1 py-2 text-center text-[12px] md:text-sm font-semibold transition-colors ${
            activeTab === "code"
              ? "bg-gray-700 text-cyan-400"
              : "text-gray-300 hover:bg-gray-700/50"
          }`}
        >
          Code
        </button>
      </div>

      <div className='p-6 flex-grow min-h-[300px]'>
        <AnimatePresence mode='wait'>
          {activeTab === "details" && (
            <motion.div
              key='details'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='space-y-4'
            >
              <StarPoint title='Situation'>{project.context}</StarPoint>
              <StarPoint title='Task'>{project.task}</StarPoint>
              <StarPoint title='Action'>{project.action}</StarPoint>
              <StarPoint title='Result'>{project.result}</StarPoint>
            </motion.div>
          )}
          {activeTab === "diagram" && (
            <motion.div
              key='diagram'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className='text-gray-400 mb-4'>
                Click any diagram to view in the carousel.
              </p>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {project.diagramUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Diagram thumbnail ${index + 1}`}
                    onClick={() =>
                      setCarouselData({
                        images: project.diagramUrls,
                        startIndex: index,
                      })
                    }
                    loading='lazy'
                    className='rounded-lg cursor-pointer hover:opacity-75 hover:scale-105 transition-all w-full h-full object-cover aspect-video'
                  />
                ))}
              </div>
            </motion.div>
          )}
          {activeTab === "code" && (
            <motion.div
              key='code'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='space-y-6'
            >
              <p className='text-gray-400'>
                Key backend functionality snippets:
              </p>
              {project.codeSnippets.map((snippet, index) => (
                <div key={index}>
                  <h5 className='text-[12px] md:text-sm font-semibold text-gray-300 mb-2'>
                    {snippet.title}
                  </h5>
                  <div className='bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto'>
                    <pre>
                      <code
                        className={`text-[12px] md:text-sm language-${snippet.lang}`}
                      >
                        {snippet.code}
                      </code>
                    </pre>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className='p-6 mt-auto bg-gray-800/50 border-t border-gray-700 flex justify-end space-x-4'>
        <a
          href={project.repoLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:text-cyan-400 text-2xl transition-colors duration-300'
        >
          <FiGithub />
        </a>
        <a
          href={project.liveLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:text-cyan-400 text-2xl transition-colors duration-300'
        >
          <FiBriefcase />
        </a>
      </div>
    </motion.div>
  );
};

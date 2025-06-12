import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";
import { PageContainer } from "../components/PageContainer";
import { SectionTitle } from "../components/SectionTitle";

interface SkillsSectionProps {
  data: Record<
    string,
    {
      name: string;
      icon: ReactNode;
      className?: string;
    }[]
  >;
}

export const SkillsSection: FC<SkillsSectionProps> = ({ data }) => (
  <PageContainer sectionId='skills'>
    <SectionTitle>Skills & Technologies</SectionTitle>
    <div className='grid md:grid-cols-2 gap-10'>
      {Object.entries(data).map(([category, skills], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className='text-base md:text-2xl font-semibold capitalize mb-4 border-l-4 border-cyan-400 pl-4'>
            {category}
          </h3>
          <div className='flex flex-wrap gap-4'>
            {skills.map((skill, i) => (
              <div
                key={i}
                className='flex items-center space-x-3 bg-gray-800 p-2 md:p-3 rounded-lg'
              >
                <span className='text-sm md:text-2xl'>{skill.icon}</span>
                <span className='text-sm md:text-lg'>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </PageContainer>
);

import { AnimatePresence } from "framer-motion";
import { useState, type FC } from "react";
import { CarouselModal } from "../components/CarouselModal";
import { PageContainer } from "../components/PageContainer";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";

interface FeaturedProjectsProps {
  data: {
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
  }[];
}

interface CarouselData {
  images: string[];
  startIndex: number;
}

export const FeaturedProjects: FC<FeaturedProjectsProps> = ({ data }) => {
  const [carouselData, setCarouselData] = useState<CarouselData | null>(null);

  const handleSetCarousel = (props: CarouselData) => {
    setCarouselData(props);
  };

  return (
    <PageContainer sectionId='projects'>
      <SectionTitle>Featured Projects</SectionTitle>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            setCarouselData={handleSetCarousel}
          />
        ))}
      </div>
      <AnimatePresence>
        {carouselData && (
          <CarouselModal
            data={carouselData}
            closeModal={() => setCarouselData(null)}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

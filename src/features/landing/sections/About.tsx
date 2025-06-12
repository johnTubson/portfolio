import { PageContainer } from "../components/PageContainer";
import { SectionTitle } from "../components/SectionTitle";

export const AboutSection = ({ data }: { data: Record<string, string> }) => (
  <PageContainer sectionId='about'>
    <SectionTitle>About Me</SectionTitle>
    <div className='max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg'>
      <p className='text-sm md:text-lg leading-loose text-gray-300'>
        {data.story}
      </p>
    </div>
  </PageContainer>
);

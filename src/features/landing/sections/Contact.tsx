import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "../../../assets/icons";
import { PageContainer } from "../components/PageContainer";
import { SectionTitle } from "../components/SectionTitle";

export const ContactSection = ({ data }: { data: Record<string, string> }) => (
  <PageContainer sectionId="contact">
    <SectionTitle>Get in Touch</SectionTitle>
    <div className="max-w-xl mx-auto text-center">
      <p className="text-lg text-gray-400 mb-8">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of an amazing team. Feel free to reach out.
      </p>
      <div className="flex justify-center space-x-6 text-4xl">
        <motion.a
          href={`mailto:${data.email}`}
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <FiMail />
        </motion.a>
        <motion.a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: -5 }}
        >
          <FiGithub />
        </motion.a>
        <motion.a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <FiLinkedin />
        </motion.a>
      </div>
      <div className="mt-8">
        <a
          href={`mailto:${data.email}`}
          className="text-cyan-400 text-lg hover:underline"
        >
          {data.email}
        </a>
      </div>
    </div>
  </PageContainer>
);

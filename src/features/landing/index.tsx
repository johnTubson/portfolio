import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "../../assets/icons";
import { navLinks, portfolioData } from "./helpers";
import { AboutSection } from "./sections/About";
import { ContactSection } from "./sections/Contact";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { HeroSection } from "./sections/Hero";
import { SkillsSection } from "./sections/Skills";

export const LandingPage = () => {
  const [page, setPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigatePage = (page: string) => {
    setPage(page);
    window.location.href = `#${page}`;
  };

  return (
    <div className='bg-gray-900 flex flex-col h-full text-gray-100 font-sans min-h-screen antialiased'>
      <header className='fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md'>
        <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='text-2xl font-bold text-cyan-400'>
            <a href='#home' onClick={() => setPage("home")}>
              JO
            </a>
          </div>
          <div className='hidden md:flex space-x-6 items-center'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setPage(link.id)}
                className={`relative text-lg hover:text-cyan-400 transition-colors duration-300 ${
                  page === link.id ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {link.title}
                {page === link.id && (
                  <motion.div
                    className='absolute bottom-[-4px] left-0 right-0 h-0.5 bg-cyan-400'
                    layoutId='underline'
                  />
                )}
              </a>
            ))}
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-2xl'
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden fixed top-16 left-0 right-0 bg-gray-800 z-40 p-6'
          >
            <div className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setPage(link.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg hover:text-cyan-400 transition-colors duration-300 ${
                    page === link.id ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className='container mx-auto px-6 pt-24'>
        {/* {page === "home" && ( */}
        <HeroSection
          data={portfolioData.hero}
          navigateTo={handleNavigatePage}
        />
        {/* )} */}
        {/* {page === "projects" && ( */}
        <FeaturedProjects data={portfolioData.projects} />
        {/* )} */}
        {/* {page === "skills" &&  */}
        <SkillsSection data={portfolioData.skills} />
        {/* } */}
        {/* {page === "about" &&  */}
        <AboutSection data={portfolioData.about} />
        {/* } */}
        {/* {page === "contact" &&  */}
        <ContactSection data={portfolioData.contact} />
        {/* } */}
      </main>

      <footer className='text-center py-6 mt-auto border-t border-gray-700'>
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.hero.name}. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

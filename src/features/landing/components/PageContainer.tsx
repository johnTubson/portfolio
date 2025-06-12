import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const PageContainer = ({ children, sectionId}: { children: ReactNode, sectionId?:string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="py-12"
    id={sectionId} 
  >
    {children}
  </motion.div>
);

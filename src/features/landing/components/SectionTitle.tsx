import type { ReactNode } from "react";

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className='text-xl md:text-3xl font-bold text-center mb-12 text-cyan-400'>
    {children}
  </h2>
);

'use client';

import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("../components/homepage/about"), { ssr: false });
const Blog = dynamic(() => import("../components/homepage/blog"), { ssr: false });
const ContactSection = dynamic(() => import("../components/homepage/contact"), { ssr: false });
const Education = dynamic(() => import("../components/homepage/education"), { ssr: false });
const Experience = dynamic(() => import("../components/homepage/experience"), { ssr: false });
const HeroSection = dynamic(() => import("../components/homepage/hero-section"), { ssr: false });
const Projects = dynamic(() => import("../components/homepage/projects"), { ssr: false });
const Skills = dynamic(() => import("../components/homepage/skills"), { ssr: false });

export default function HomeWrapper() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <ContactSection />
    </>
  );
}

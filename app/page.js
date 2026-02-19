'use client';

import { personalData } from "@/utils/data/personal-data";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("./components/homepage/about"));
const Blog = dynamic(() => import("./components/homepage/blog"));
const ContactSection = dynamic(() => import("./components/homepage/contact"));
const Education = dynamic(() => import("./components/homepage/education"));
const Experience = dynamic(() => import("./components/homepage/experience"));
const HeroSection = dynamic(() => import("./components/homepage/hero-section"));
const Projects = dynamic(() => import("./components/homepage/projects"));
const Skills = dynamic(() => import("./components/homepage/skills"));

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      
      <ContactSection />
    </div>
  )
};
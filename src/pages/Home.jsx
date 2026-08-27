import React, { useEffect } from 'react';
import HomeSection from '../components/home/Home';
import About from '../components/home/About';
import Experience from '../components/home/Experience';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

export default function Home({ openLightbox }) {
  useEffect(() => {
    document.body.classList.add('home-page');

    // If there's an anchor in the URL, scroll to it
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }

    if (window.initVanillaJS) {
      setTimeout(() => {
        window.initVanillaJS();
      }, 100);
    }

    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <main>
      <HomeSection openLightbox={openLightbox} />
      <About openLightbox={openLightbox} />
      <Experience openLightbox={openLightbox} />
      <Projects openLightbox={openLightbox} />
      <Skills openLightbox={openLightbox} />
      <Testimonials />
      <Contact openLightbox={openLightbox} />
    </main>
  );
}

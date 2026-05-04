import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const sectionIds = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-animate]');
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = Number(entry.target.getAttribute('data-delay') || '0');
          setTimeout(() => entry.target.classList.add('is-visible'), delay * 100);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Navbar links={navLinks} activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;

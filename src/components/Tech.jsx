import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  const handleTechClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Calculate columns for 2 rows (approximately half the technologies per row)
  const columnsPerRow = Math.ceil(technologies.length / 2);

  return (
    <section>
      <div 
        className="tech-icons-wrapper max-w-7xl mx-auto px-4"
        style={{ 
          display: 'grid',
          gridTemplateColumns: `repeat(${columnsPerRow}, minmax(60px, 1fr))`,
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {technologies.map((technology) => (
          <a
            href={technology.url}
            target="_blank"
            rel="noopener noreferrer"
            key={technology.name}
            className="w-12 h-12 md:w-14 md:h-14 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-90 flex items-center justify-center group mx-auto"
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");

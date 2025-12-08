import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github } from "../assets";
import { springboot, reactjs, mongodb, java, python, docker, kubernetes, gcp } from "../assets";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const techIcons = {
    "Java": java,
    "Spring Boot": springboot,
    "React": reactjs,
    "MongoDB": mongodb,
    "Python": python,
    "Docker": docker,
    "Kubernetes": kubernetes,
    "GCP": gcp,
  };

  useEffect(() => {
    if (isOpen && project) {
      console.log("Modal is opening with project:", project.name);
    }
  }, [isOpen, project]);

  if (!project || !isOpen) return null;

  const features = project.features || [];
  const techStack = project.techStack || [];

  return (
    <AnimatePresence mode="wait">
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-tertiary rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Header with Close Button */}
              <div className="sticky top-0 bg-tertiary/95 backdrop-blur-sm z-10 p-6 border-b border-white/10 flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
                    {project.name}
                  </h2>
                  <p className="text-secondary text-sm md:text-base">
                    {project.subtitle || "Full-Stack Web Application"}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-red-500 transition-colors text-2xl font-bold ml-4"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Hero Image */}
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* GitHub Link - Prominent */}
                <motion.a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <img src={github} alt="GitHub" className="w-6 h-6" />
                  <span className="text-lg">View on GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>

                {/* Project Overview */}
                <div className="bg-black/20 rounded-xl p-6">
                  <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                    Project Overview
                  </h3>
                  <p className="text-secondary leading-relaxed text-base">
                    {project.detailedDescription || project.description}
                  </p>
                </div>

                {/* Key Features */}
                {features.length > 0 && (
                  <div>
                    <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-black/20 rounded-lg p-4 flex items-start gap-3 hover:bg-black/30 transition-colors"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-secondary text-sm md:text-base">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {techStack.length > 0 && (
                  <div>
                    <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {techStack.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-black/30 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-black/40 transition-colors"
                        >
                          {techIcons[tech] && (
                            <img
                              src={techIcons[tech]}
                              alt={tech}
                              className="w-5 h-5 object-contain"
                            />
                          )}
                          <span className="text-white text-sm font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Phases */}
                {project.phases && project.phases.length > 0 && (
                  <div>
                    <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></span>
                      Development Phases
                    </h3>
                    <div className="space-y-4">
                      {project.phases.map((phase, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-black/20 rounded-lg p-4 border-l-4 border-green-500"
                        >
                          <h4 className="text-white font-semibold mb-2">{phase.title}</h4>
                          <p className="text-secondary text-sm">{phase.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h3 className="text-white text-xl font-bold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`text-sm px-3 py-1 rounded-full ${tag.color}`}
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;


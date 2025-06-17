import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas, ResearchArea } from '../data/researchData';

const Research = () => {
  const [selectedArea, setSelectedArea] = useState<ResearchArea | null>(null);

  const handleAreaClick = (area: ResearchArea) => {
    setSelectedArea(area);
  };

  const closeModal = () => {
    setSelectedArea(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team members collaborating"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-wide relative z-20 text-white pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Our Research
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Discover the research areas that drive innovation in our lab.
          </motion.p>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading title="Research Areas" subtitle="" centered={true} />
          <div className="flex flex-col gap-6">
            {researchAreas.map((area, index) => (
              <AnimatedSection key={area.id} delay={0.1 * index}>
                <div
                  className="bg-white rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 hover:shadow-xl cursor-pointer"
                  onClick={() => handleAreaClick(area)}
                >
                  <div className="flex flex-col sm:flex-row h-64 w-full">
                  <div className="w-full sm:w-1/4 h-64 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{area.description}</p>
                  </div>
                </div>

                </div>
              </AnimatedSection>
            ))}
          </div>

          {selectedArea && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeModal}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full h-full rounded-none shadow-none overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-10 right-12 z-10">
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-black p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="md:flex margin-top-16 py-1 px-1">
                  <div className="md:w-2/5">
                    <img
                      src={selectedArea.image}
                      alt={selectedArea.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h2 className="text-2xl font-semibold mb-4">{selectedArea.title}</h2>
                    <p className="text-gray-700 mb-6">{selectedArea.description}</p>
                    {selectedArea.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {selectedArea.keywords.map((keyword, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-6">
                      <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Research;

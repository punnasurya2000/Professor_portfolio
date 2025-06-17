import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas } from '../data/researchData';

const Research = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  
  const filteredAreas = selectedArea 
    ? researchAreas.filter(area => area.id === selectedArea)
    : researchAreas;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Research laboratory"
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
            Exploring the frontiers of materials science and manufacturing technology to develop innovative solutions for tomorrow's challenges.
          </motion.p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Research Areas"
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setSelectedArea(null)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedArea === null 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              All Areas
            </button>
            {researchAreas.map(area => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedArea === area.id 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>
          
          {/* Research Areas Grid */}
          <div className="grid grid-cols-1 gap-12">
            {filteredAreas.map((area, index) => (
              <AnimatedSection key={area.id} delay={0.1 * index}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                      <p className="text-gray-700 mb-6">{area.description}</p>
                      
                      <h4 className="text-lg font-medium mb-3">Current Projects:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        <li>Development of self-healing composite materials</li>
                        <li>Multi-material 3D printing for functionally graded structures</li>
                        <li>Computational modeling of material behavior under extreme conditions</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {area.keywords.map(keyword => (
                          <span 
                            key={keyword} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      

      
    </div>
  );
};

export default Research;
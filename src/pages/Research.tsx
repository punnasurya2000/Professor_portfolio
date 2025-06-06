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
      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Research laboratory"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-wide relative z-20 text-white">
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

      {/* Research Overview */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeading 
            title="Research Overview" 
            subtitle="Our lab's research spans multiple interconnected areas, focusing on the development of novel materials and manufacturing processes."
          />
          
          <AnimatedSection>
            <p className="text-gray-700 mb-8">
              At the Rahman Lab, we take an interdisciplinary approach to research, combining principles from materials science, mechanical engineering, and computational modeling. Our work is motivated by the need for advanced materials that can meet the increasingly complex demands of various industries, from aerospace and automotive to biomedical and energy.
            </p>
            <p className="text-gray-700 mb-8">
              We are particularly interested in:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
              <li>Developing multifunctional composite materials with enhanced mechanical, electrical, and thermal properties</li>
              <li>Advancing additive manufacturing techniques for complex structures with precise control over material composition</li>
              <li>Exploring bio-inspired design principles to create materials with superior performance characteristics</li>
              <li>Integrating nanomaterials into larger structures while preserving their unique properties</li>
              <li>Creating sustainable manufacturing processes and materials with reduced environmental impact</li>
            </ul>
            <p className="text-gray-700">
              Our research is supported by various funding agencies, including the National Science Foundation (NSF), the Department of Energy (DOE), and industry partners. We collaborate with researchers across disciplines and institutions to tackle challenging problems and translate our findings into practical applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Research Areas" 
            subtitle="Explore our primary research areas and ongoing projects."
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

      {/* Research Facilities */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeading 
            title="Research Facilities" 
            subtitle="Our lab is equipped with state-of-the-art equipment for materials synthesis, characterization, and testing."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Materials Synthesis and Processing</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Multi-material 3D printers</li>
                  <li>Composite fabrication equipment</li>
                  <li>Vacuum assisted resin transfer molding system</li>
                  <li>High-temperature furnaces</li>
                  <li>Nanomaterial synthesis setup</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Materials Characterization</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Scanning electron microscopy (SEM)</li>
                  <li>X-ray diffraction (XRD)</li>
                  <li>Thermal analysis equipment (DSC, TGA)</li>
                  <li>Mechanical testing systems</li>
                  <li>Optical microscopy</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Computational Resources</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>High-performance computing cluster</li>
                  <li>Finite element analysis software</li>
                  <li>Molecular dynamics simulation tools</li>
                  <li>Material design and optimization software</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Testing and Analysis</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Mechanical property testing equipment</li>
                  <li>Electrical and thermal conductivity measurements</li>
                  <li>Environmental testing chambers</li>
                  <li>Acoustic emission analysis</li>
                  <li>Non-destructive testing equipment</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Research Collaborations" 
            subtitle="We collaborate with academic institutions, industry partners, and government laboratories to advance our research goals."
          />
          
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-6">
                Our research benefits from close collaborations with experts across various fields and institutions. These partnerships allow us to tackle complex problems from multiple perspectives and accelerate the translation of our research into practical applications.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Academic Partners</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Massachusetts Institute of Technology - Department of Materials Science and Engineering</li>
                <li>University of California, Berkeley - Department of Mechanical Engineering</li>
                <li>Georgia Institute of Technology - School of Aerospace Engineering</li>
                <li>Rice University - Department of Chemistry</li>
                <li>Texas A&M University - Department of Materials Science and Engineering</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Industry Partners</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Aerospace Manufacturing Companies</li>
                <li>Automotive Materials Suppliers</li>
                <li>Advanced Materials Startups</li>
                <li>3D Printing Technology Developers</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Government Laboratories</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>National Renewable Energy Laboratory (NREL)</li>
                <li>Oak Ridge National Laboratory (ORNL)</li>
                <li>NASA Johnson Space Center</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Research;
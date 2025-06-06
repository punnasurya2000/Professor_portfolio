import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link as LinkIcon } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { people, Person } from '../data/peopleData';

type Category = 'all' | 'faculty' | 'postdoc' | 'phd' | 'masters' | 'undergrad' | 'alumni';

const People = () => {
  const [category, setCategory] = useState<Category>('all');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  
  const filteredPeople = people.filter(
    person => category === 'all' || person.category === category
  );

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
  };

  const closeModal = () => {
    setSelectedPerson(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team members collaborating"
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
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Meet the researchers, students, and staff who make our lab's work possible.
          </motion.p>
        </div>
      </section>

      {/* People Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeading 
            title="Lab Members" 
            subtitle="Our team consists of dedicated researchers at various career stages, all working together to advance the frontiers of materials science and manufacturing technology."
          />
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { value: 'all', label: 'All Members' },
              { value: 'faculty', label: 'Faculty' },
              { value: 'postdoc', label: 'Postdoctoral Researchers' },
              { value: 'phd', label: 'Ph.D. Students' },
              { value: 'masters', label: 'Master\'s Students' },
              { value: 'undergrad', label: 'Undergraduate Researchers' },
              { value: 'alumni', label: 'Alumni' }
            ].map(item => (
              <button
                key={item.value}
                onClick={() => setCategory(item.value as Category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  category === item.value 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* People Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPeople.map((person, index) => (
              <AnimatedSection key={person.id} delay={0.1 * index} className="h-full">
                <div 
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() => handlePersonClick(person)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
                    <p className="text-gray-600 mb-4">{person.title}</p>
                    <p className="text-gray-700 line-clamp-3 mb-4">{person.bio}</p>
                    <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm capitalize">
                      {person.category === 'phd' ? 'Ph.D. Student' : 
                       person.category === 'postdoc' ? 'Postdoctoral Researcher' : 
                       person.category}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Person Modal */}
          {selectedPerson && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={closeModal}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={selectedPerson.image} 
                      alt={selectedPerson.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h2 className="text-2xl font-semibold mb-2">{selectedPerson.name}</h2>
                    <p className="text-gray-600 mb-6">{selectedPerson.title}</p>
                    
                    <h3 className="text-lg font-medium mb-3">Biography</h3>
                    <p className="text-gray-700 mb-6">{selectedPerson.bio}</p>
                    
                    <h3 className="text-lg font-medium mb-3">Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      {selectedPerson.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      {selectedPerson.email && (
                        <a 
                          href={`mailto:${selectedPerson.email}`}
                          className="flex items-center text-primary-600 hover:text-primary-800 transition-colors"
                        >
                          <Mail className="mr-2 h-5 w-5" />
                          Email
                        </a>
                      )}
                      {selectedPerson.website && (
                        <a 
                          href={selectedPerson.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-primary-600 hover:text-primary-800 transition-colors"
                        >
                          <LinkIcon className="mr-2 h-5 w-5" />
                          Website
                        </a>
                      )}
                    </div>
                    
                    <button 
                      onClick={closeModal}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Join Our Team" 
            subtitle="We're always looking for talented individuals who are passionate about materials science and manufacturing technology."
          />
          
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Open Positions</h3>
              <p className="text-gray-700 mb-6">
                We regularly have openings for graduate students, postdoctoral researchers, and undergraduate researchers. If you're interested in joining our lab, please review the information below.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Ph.D. Students</h4>
                  <p className="text-gray-700 mb-4">
                    We are looking for motivated Ph.D. students with a strong background in materials science, mechanical engineering, or related fields.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Fall admission deadline: December 15</li>
                    <li>Spring admission deadline: October 1</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Postdoctoral Researchers</h4>
                  <p className="text-gray-700 mb-4">
                    Postdoctoral positions are available based on funding and project needs. Candidates should have a Ph.D. in a relevant field and a strong publication record.
                  </p>
                  <p className="text-gray-700">
                    Positions are advertised as they become available.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Undergraduate Researchers</h4>
                  <p className="text-gray-700 mb-4">
                    We welcome undergraduate students interested in gaining research experience. Students should have completed relevant coursework and be able to commit at least 10 hours per week.
                  </p>
                  <p className="text-gray-700">
                    Applications accepted on a rolling basis.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
              <p className="text-gray-700 mb-4">
                If you're interested in joining our lab, please send the following information to Dr. Rahman at mrahman19@uh.edu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>CV or resume</li>
                <li>Brief statement of research interests and experience</li>
                <li>Academic transcripts</li>
                <li>Contact information for 2-3 references</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default People;
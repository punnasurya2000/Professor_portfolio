import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link as LinkIcon, X } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import { people, Person } from '../data/peopleData';
import { SiGooglescholar, SiLinkedin } from 'react-icons/si';



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
      <section className="relative h-[160px] bg-gray-900 mt-16 ">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team members collaborating"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-raleway leading-tight mb-4"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
          >
          </motion.p>
        </div>
      </section>

      {/* People Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* People Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {filteredPeople.map((person, index) => (
              <AnimatedSection key={person.id} delay={0.1 * index} className="h-full">
                <div
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() => handlePersonClick(person)}
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-white">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-4 text-center">
                  <h3 className="font-raleway text-[17px] font-semibold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-[15px] text-gray-600 font-normal mb-2">{person.title}</p>
                  
                  <div className="flex justify-center gap-3 mt-2">
                    {person.googlescholar && (
                      <a
                        href={person.googlescholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#D14836] p-2 rounded-full text-white hover:opacity-80"
                      >
                        <SiGooglescholar className="w-5 h-5" />
                      </a>
                    )}
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A66C2] p-2 rounded-full text-white hover:opacity-80"
                      >
                        <SiLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="bg-gray-600 p-2 rounded-full text-white hover:opacity-80"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>


                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Modal */}
          {selectedPerson && (
            <div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full max-w-5xl h-[90vh] rounded-lg shadow-lg overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-6 right-6 z-10">
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-black p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 max-h-96 md:max-h-full overflow-hidden">
                    <img
                      src={selectedPerson.image}
                      alt={selectedPerson.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 sm:p-8 overflow-y-auto">
                    <h2 className="text-2xl font-semibold mb-2">{selectedPerson.name}</h2>
                    <p className="text-gray-600 mb-4">{selectedPerson.title}</p>

                    <h3 className="text-lg font-medium mb-2">Biography</h3>
                    <p className="text-gray-700 mb-6">{selectedPerson.bio}</p>

                    <h3 className="text-lg font-medium mb-2">Education</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                      {selectedPerson.education.map((edu, i) => (
                        <li key={i}>{edu}</li>
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
    </div>
  );
};

export default People;

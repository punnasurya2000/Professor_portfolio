import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Contact us"
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Get in touch with our lab for collaborations, inquiries, or to learn more about our research.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeading 
            title="Contact Information" 
            subtitle="Feel free to reach out to us using the information below."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">Rahman Lab</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium mb-1">Address</h4>
                      <p className="text-gray-700">
                        Department of Mechanical Engineering<br />
                        University of Houston<br />
                        4726 Calhoun Rd, Houston, TX 77204
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-700">
                        <a href="mailto:mrahman19@uh.edu" className="hover:text-primary-600 transition-colors">
                          mrahman19@uh.edu
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-700">
                        <a href="tel:+17137436766" className="hover:text-primary-600 transition-colors">
                          (713) 743-6766
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium mb-1">Website</h4>
                      <p className="text-gray-700">
                        <a href="https://maksudrahman.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                          maksudrahman.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Find Us" 
            subtitle="Our lab is located in the Department of Mechanical Engineering at the University of Houston."
          />
          
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                {/* This would typically be an iframe with a Google Map, but for demonstration we'll use an image */}
                <img
                  src="https://images.pexels.com/photos/1062024/pexels-photo-1062024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Map location"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Getting Here</h3>
                <p className="text-gray-700 mb-4">
                  Our lab is located in the Engineering Building 2 (E2) on the University of Houston main campus. Visitor parking is available in the Welcome Center Garage.
                </p>
                
                <h4 className="text-lg font-medium mb-2">Public Transportation</h4>
                <p className="text-gray-700 mb-4">
                  The University of Houston is accessible via METRO bus routes 9, 29, and 80, as well as the METRORail Purple Line.
                </p>
                
                <h4 className="text-lg font-medium mb-2">Parking</h4>
                <p className="text-gray-700">
                  Visitor parking is available in the Welcome Center Garage or Parking Lot 16B. Rates vary depending on the time of day and duration of stay.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeading 
            title="Collaboration Opportunities" 
            subtitle="We're interested in collaborations with academic, industry, and government partners."
          />
          
          <AnimatedSection>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                The Rahman Lab is open to collaborations that align with our research interests and expertise. We believe that interdisciplinary partnerships lead to innovative solutions and accelerate scientific progress.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Areas for Collaboration</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Advanced manufacturing techniques for composite materials</li>
                <li>Development and characterization of multifunctional materials</li>
                <li>Bio-inspired design and biomimetic materials</li>
                <li>Sustainability in materials and manufacturing</li>
                <li>Computational modeling and simulation of materials behavior</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">How to Initiate a Collaboration</h3>
              <p className="text-gray-700 mb-6">
                If you're interested in exploring a potential collaboration, please contact Dr. Rahman directly at mrahman19@uh.edu with a brief description of your research interests and potential areas for collaboration.
              </p>
              
              <div className="bg-white p-6 rounded-md border border-gray-200">
                <h4 className="text-lg font-medium mb-3">Student Exchange and Internship Opportunities</h4>
                <p className="text-gray-700">
                  We occasionally host visiting students and researchers for short-term projects or internships. If you're interested in spending time in our lab, please contact us with your CV, research interests, and preferred timing for your visit.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[160px] bg-gray-900 mt-16">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-black/60 z-10" />
    <img
      src="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Contact us"
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
      Contact
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
    >
      {/* optional subtitle */}
    </motion.p>
  </div>
</section>


      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Rahman Lab Info */}
            <AnimatedSection>
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                <h4 className='font-raleway font-bold text-lg'>Inquiries should be directed to Professor Maksud Rahman</h4>
                
                <div className="space-y-6 mt-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4 text-sm sm:text-base">
                      <h4 className="text-lg font-medium mb-1">Address</h4>
                      <p className="text-gray-700 leading-relaxed">
                      University of Houston <br/>
                      Cullen College of Engineering <br/>
                      Department of Mechanical and Aerospace Engineering <br/>
                      Engineering Building 1, Room N213 <br/>
                      4226 Martin Luther King Boulevard<br/>
                      Houston, TX 77204-4006<br/>
                    
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4 text-sm sm:text-base">
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-700">
                        <a
                          href="mailto:maksud@uh.edu"
                          className="hover:text-primary-600 transition-colors"
                        >
                          maksud@uh.edu
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4 text-sm sm:text-base">
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-700">
                        <a
                          href="tel:+17137436766"
                          className="hover:text-primary-600 transition-colors"
                        >
                          (713)-743-4500
                        </a>
                      </p>
                    </div>
                  </div>

                
                </div>
              </div>
            </AnimatedSection>

            {/* Google Map Embed */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                
                <div className="mt-4">
                  <div className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7507.268344293069!2d-95.34396182415117!3d29.722856175087074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be59ddbfffff%3A0xf65ddb544650f173!2sEngineering%20Building%201-Cullen%20College%20of%20Engineering!5e1!3m2!1sen!2sus!4v1749091331104!5m2!1sen!2sus"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="border-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

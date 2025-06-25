import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import introBg from '../../images/bacterial_cellulose.png'; // adjust path based on your structure


import { newsItems } from '../data/newsData';
import imageData from '../../images/green-energy.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Home = () => {
  const recentNews = [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <img
            src={imageData}
            alt="Laboratory research"
            className="w-full h-[120%] sm:h-[140%] object-cover translate-y-16 sm:translate-y-[70px]"
          />
        </div>

        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-2">
              <h1 className="font-bold font-raleway text-2xl sm:text-2xl md:text-2xl lg:text-6xl tracking-widest">
                Maksud Innovation Lab
              </h1>
            </div>
            <div>
            <p className='font-semibold font-raleway text-2xl sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>
                of Circular Materials and Manufacturing
              </p>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-raleway sm:text-xl md:text-1.5xl mb-8 max-w-2xl"
          >
            Redesigning Materials. Rethinking Waste. Rebuilding the Future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/research"
              className="px-6 sm:px-8 py-3 text-xl bg-primary-600 hover:bg-primary-700 rounded-md font-bold transition-colors flex items-center"
            >
              Our Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://scholar.google.com/citations?user=hky0f9UAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D14836] p-3 rounded-full text-white hover:opacity-80"
            >
              <SiGooglescholar className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maksud-rahman-04559883/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077B5] p-3 rounded-full text-white hover:opacity-80"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
                
      <section
  className="relative w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${introBg})` }}
>
  {/* Full overlay */}
  <div className="absolute inset-0 bg-white/80 z-0"></div>

  {/* Content container */}
  <div className="relative z-10 py-12 sm:py-16 lg:py-20">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="font-raleway text-3xl md:text-4xl font-medium text-blue-400">
          Exploring Nature. Engineering the Future.
        </h2>
      </div>

      <div className="text-center max-w-5xl mx-auto">
        <AnimatedSection delay={0.2}>
          <p className="text-black text-base sm:text-lg mb-4 leading-relaxed">
          At the Maksud Innovation Lab, we pursue curiosity-driven research at the intersection of materials science, advanced manufacturing, and circularity to promote a greener and more resilient future. 
          </p>
          <p className="text-black text-base sm:text-lg mb-4 leading-relaxed">
          Our mission is to develop sustainable and scalable solutions to address global challenges in structural systems, food safety and security, and environmental technologies. We focus on the design and manufacturing of multifunctional circular materials that integrate principles of frugality, functionality, and circular economy. 
          </p>
          <p className="text-black text-base sm:text-lg mb-4 leading-relaxed">
          From architected wood to fresh produce preservation to recyclable structural composites, our research explores structure–property–performance relationships across a wide range of circular material systems, spanning the nano to macro scales. Through this work, we aim to translate fundamental scientific insights into impactful, real-world innovations that promote a more sustainable planet.
          </p>

          <Link
            to="/people"
            className="text-blue-400 hover:text-primary-400 font-medium text-2xl flex items-center justify-center transition-colors"
          >
            Meet Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  </div>
</section>




      {/* News Section */}
      <section className="bg-white pt-8 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest News" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {recentNews.map((news, index) => (
              <AnimatedSection key={news.id} delay={0.1 * index}>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-full transition-transform transform hover:scale-105">
                  <div className="p-6">
                    <span className="text-sm text-gray-500 mb-2 block">
                      {new Date(news.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <h3 className="text-xl font-semibold mb-3">
              <a href="https://uh.edu/news-events/stories/2025/april/04232025-rhaman-origami-inspired-ceramics" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
                {news.title}
              </a>
                   </h3>

                    <div className="sm:w-64 w-full sm:flex-shrink-0">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-auto object-cover rounded-md"

                          />
                        </div>

                    
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/news"
              className=" text-blue-400 hover:text-primary-400 font-medium text-2xl flex items-center justify-center transition-colors"
            >
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Interested in Our Research?</h2>
            <p className="font-raleway text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Anyone interested in making science and our mother nature their way of life is welcome to contact us. We value creativity, integrity, passion, and persistence in everyone we work with, and we are always open to collaborating with like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary-900 hover:bg-gray-100 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { researchAreas } from '../data/researchData';
import { newsItems } from '../data/newsData';

const Home = () => {
  // Get the three most recent news items
  const recentNews = [...newsItems].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
  <img
    src="/images/Homepage.png"
    alt="Laboratory research"
    className="w-full h-[120%] object-cover translate-y-[70px]"
  />
</div>


        <div className="container-wide relative z-20 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
          <div className="flex items-center space-x-2">
      <h1 className="font-thin text-7xl md:text-8xl tracking-widest">
        Maksud Lab 
      </h1>
   
    </div>





          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            Smart Materials and Additive Manufacturing Lab at the University of Houston
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/research"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 rounded-md font-medium transition-colors flex items-center"
            >
              Our Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-md font-medium transition-colors backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className='Flex flex-col items-center justify-center text-center px-4 pb-2 max-w-3xl mx-auto'>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">
      Welcome to Our Lab
    </h2>

          </div>
        <div className="flex flex-col items-center justify-center text-center px-4 py-16 max-w-5xl mx-auto">
  <AnimatedSection delay={0.2}>
    
    <p className="text-gray-700 text-lg mb-4">
      I am an Assistant Professor in the Department of Mechanical and Aerospace Engineering at the University of Houston, USA. I completed my Ph.D. from Cornell University, USA, and B.Sc. from Bangladesh University of Engineering and Technology (BUET), Bangladesh.
    </p>

    <p className="text-gray-700 text-lg mb-4">
      My primary academic interest lies in interdisciplinary research that integrates materials, design, and manufacturing. The overarching goal of my research is to design and develop futuristic multifunctional composite and nanocomposite structures for various structural and functional applications with an emphasis on advanced manufacturing, sustainable materials, and nature-inspired design. 
    </p>

    <p className="text-gray-700 text-lg mb-4">
      Central to my approach is leveraging the nanoscale features of materials to devise macroscale structures with optimized architectures through a fundamental understanding of the process-structure-property relationship.
    </p>

    <p className="text-gray-700 text-lg mb-4">
      I hope you enjoy my website and find information here. If you are influenced to make science your way of life, please feel free to contact me. I value creativity, honesty, comprehensiveness, and persistence in every person with whom I work.
    </p>

    <p className="text-gray-800 text-lg font-semibold mb-5">
      All the best,<br />
      Maksud Rahman
    </p>

    <Link
      to="/people"
      className="text-primary-600 hover:text-primary-800 font-medium flex items-center justify-center transition-colors"
    >
      Meet Our Team
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  </AnimatedSection>
</div>

        </div>
      </section>

      {/* Research Highlights */}
      
      {/* Latest News */}
      <section className="section bg-white pt-4">
        <div className="container-wide">
          <SectionHeading 
            title="Latest News" 
            subtitle="Stay updated with the most recent activities, publications, and achievements from our lab."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <AnimatedSection key={news.id} delay={0.1 * index}>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-full">
                  
                  <div className="p-6">
                    <span className="text-sm text-gray-500 mb-2 block">
                      {new Date(news.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">{news.content}</p>
                    <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                      {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/news"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
            >
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Interested in Our Research?</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We're always looking for talented students and potential collaborators who share our passion for advancing materials science and manufacturing technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary-900 hover:bg-gray-100 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/people"
                className="px-8 py-3 bg-primary-800 hover:bg-primary-700 rounded-md font-medium transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
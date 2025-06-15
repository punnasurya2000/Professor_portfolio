import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { newsItems, NewsItem } from '../data/newsData';

type Category = 'all' | 'publication' | 'award' | 'conference' | 'general';

const News = () => {
  const [category, setCategory] = useState<Category>('all');
  
  const filteredNews = newsItems
    .filter(item => category === 'all' || item.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="News and updates"
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
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Stay updated with the latest happenings, achievements, and announcements from our lab.
          </motion.p>
        </div>
      </section>

      {/* News Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeading 
            title="Lab News" 
          />
          {/* News Timeline */}
          <div className="space-y-12">
            {filteredNews.map((item, index) => (
              <AnimatedSection key={item.id} delay={0.1 * Math.min(index, 5)}>
                <div className="relative pl-8 md:pl-0">
                  {/* Timeline connector (hidden on mobile) */}
                  <div className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="md:grid md:grid-cols-[150px_1fr] gap-8">
                    {/* Date */}
                    <div className="hidden md:block relative">
                      <div className="sticky top-32 text-right pr-8">
                        <span className="text-lg font-medium text-gray-900">
                          {new Date(item.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="block text-gray-500">
                          {new Date(item.date).getFullYear()}
                        </span>
                        
                        {/* Timeline dot */}
                        <div className="absolute right-0 top-2 w-4 h-4 rounded-full bg-primary-600 transform translate-x-2"></div>
                      </div>
                    </div>
                    
                    {/* Mobile date display */}
                    <div className="md:hidden mb-2 text-gray-500">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                        <p className="text-gray-700 mb-4 whitespace-pre-line">{item.content}</p>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm capitalize">
                          {item.category}
                        </span>
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

export default News;
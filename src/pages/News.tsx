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
            subtitle="Browse our latest updates, publications, awards, and conference presentations."
          />
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { value: 'all', label: 'All News' },
              { value: 'publication', label: 'Publications' },
              { value: 'award', label: 'Awards' },
              { value: 'conference', label: 'Conferences' },
              { value: 'general', label: 'General' }
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
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                      )}
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

      {/* Newsletter Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Stay Updated" 
            subtitle="Subscribe to our newsletter to receive regular updates about our research and activities."
            centered
          />
          
          <AnimatedSection>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-6">
                Join our mailing list to receive quarterly newsletters featuring our latest research findings, upcoming events, and opportunities to collaborate.
              </p>
              
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
                  <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 mb-1">
                    Affiliation
                  </label>
                  <input
                    type="text"
                    id="affiliation"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your organization or institution"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default News;
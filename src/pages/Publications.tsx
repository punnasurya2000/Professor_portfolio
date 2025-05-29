import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { publications, Publication } from '../data/publicationsData';

type Category = 'all' | 'journal' | 'conference' | 'book';
type SortBy = 'newest' | 'oldest';

const Publications = () => {
  const [category, setCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<SortBy>('newest');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const filteredPublications = publications
    .filter(pub => category === 'all' || pub.category === category)
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return b.year - a.year;
      } else {
        return a.year - b.year;
      }
    });
  
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);
  
  const years = Object.keys(publicationsByYear).sort((a, b) => 
    sortBy === 'newest' ? Number(b) - Number(a) : Number(a) - Number(b)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/159711/books-bookshelf-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Publications and books"
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
            Publications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Our research contributions to the scientific community and industry through peer-reviewed journals, conference proceedings, and books.
          </motion.p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeading 
            title="Our Publications" 
            subtitle="Browse our research publications, filter by type, and sort by year."
          />
          
          {/* Filters and Sort */}
          <div className="flex flex-wrap gap-6 mb-12">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Filter by Type</label>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'all', label: 'All Publications' },
                  { value: 'journal', label: 'Journal Articles' },
                  { value: 'conference', label: 'Conference Papers' },
                  { value: 'book', label: 'Books & Chapters' }
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
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Sort by Year</label>
              <div className="flex gap-3">
                {[
                  { value: 'newest', label: 'Newest First' },
                  { value: 'oldest', label: 'Oldest First' }
                ].map(item => (
                  <button
                    key={item.value}
                    onClick={() => setSortBy(item.value as SortBy)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      sortBy === item.value 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Publications List */}
          <div className="space-y-12">
            {years.map(year => (
              <AnimatedSection key={year}>
                <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                  {year}
                </h2>
                <div className="space-y-6">
                  {publicationsByYear[Number(year)].map(publication => (
                    <div 
                      key={publication.id}
                      className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md"
                    >
                      <h3 className="text-xl font-medium mb-2">{publication.title}</h3>
                      <p className="text-gray-700 mb-3">{publication.authors}</p>
                      <p className="text-gray-600 mb-4">
                        <span className="font-medium">{publication.journal}</span>, {publication.year}
                        {publication.doi && (
                          <> · <a 
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-800 transition-colors"
                          >
                            DOI: {publication.doi}
                          </a></>
                        )}
                      </p>
                      
                      {publication.abstract && (
                        <div className="mt-4">
                          <button
                            onClick={() => toggleExpand(publication.id)}
                            className="text-primary-600 hover:text-primary-800 font-medium transition-colors"
                          >
                            {expandedId === publication.id ? 'Hide Abstract' : 'Show Abstract'}
                          </button>
                          
                          {expandedId === publication.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-3 p-4 bg-white rounded-md text-gray-700"
                            >
                              <h4 className="font-medium mb-2">Abstract</h4>
                              <p>{publication.abstract}</p>
                            </motion.div>
                          )}
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                          {publication.category === 'journal' ? 'Journal Article' : 
                          publication.category === 'conference' ? 'Conference Paper' : 
                          'Book Chapter'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Citation Information */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Citation Information" 
            subtitle="Information on how to cite our work and access our publications."
          />
          
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">How to Cite Our Work</h3>
              <p className="text-gray-700 mb-6">
                When citing our work in your research, please use the following format or refer to the specific citation format required by your publication venue:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <p className="text-gray-800 font-mono text-sm">
                  Author(s), "Title of the paper," <em>Journal Name</em>, vol. x, no. x, pp. xx-xx, Year. DOI: xxxx
                </p>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Access to Publications</h3>
              <p className="text-gray-700 mb-4">
                Many of our publications are available through open access journals or repositories. For papers that are not openly accessible, please contact us directly for a copy of the manuscript.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Research Profiles</h3>
              <p className="text-gray-700 mb-4">
                You can find more information about our research and publications on the following platforms:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Google Scholar</li>
                <li>ResearchGate</li>
                <li>ORCID</li>
                <li>Web of Science</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Publications;
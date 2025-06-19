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
    .sort((a, b) => sortBy === 'newest' ? b.year - a.year : a.year - b.year);

  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const years = Object.keys(publicationsByYear).sort((a, b) =>
    sortBy === 'newest' ? Number(b) - Number(a) : Number(a) - Number(b)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/159711/books-bookshelf-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Publications and books"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Publications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg max-w-3xl"
          >
            Our research contributions to the scientific community and industry through peer-reviewed journals, conference proceedings, and books.
          </motion.p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Publications" />

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { value: 'all', label: 'All' },
              { value: 'journal', label: 'Journal Articles' },
              { value: 'conference', label: 'Patents' },
              { value: 'book', label: 'Book Chapters' }
            ].map(item => (
              <button
                key={item.value}
                onClick={() => setCategory(item.value as Category)}
                className={`px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
                  category === item.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Publications by Year */}
          <div className="space-y-12">
            {years.map(year => (
              <AnimatedSection key={year}>
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                  {year}
                </h2>

                <div className="space-y-6">
                  {publicationsByYear[Number(year)].map(publication => (
                    <div
                      key={publication.id}
                      className="bg-gray-50 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-md flex flex-col md:flex-row gap-4 sm:gap-6 items-start"
                    >
                      {/* Image */}
                      <img
                        src={publication.image || '/default-publication-image.png'}
                        alt="Publication"
                        className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-md flex-shrink-0"
                      />

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-medium mb-1">{publication.title}</h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-2">{publication.authors}</p>
                        <p className="text-gray-600 text-sm sm:text-base mb-4">
                          <span className="font-medium">{publication.journal}</span>, {publication.year}
                          {publication.doi && (
                            <>
                              {' · '}
                              <a
                                href={`https://doi.org/${publication.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-800"
                              >
                                DOI: {publication.doi}
                              </a>
                            </>
                          )}
                        </p>

                        {/* Abstract */}
                        {publication.abstract && (
                          <div className="mt-3">
                            <button
                              onClick={() => toggleExpand(publication.id)}
                              className="text-primary-600 hover:text-primary-800 font-medium text-sm sm:text-base"
                            >
                              {expandedId === publication.id ? 'Hide Abstract' : 'Show Abstract'}
                            </button>

                            {expandedId === publication.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 p-4 bg-white rounded-md text-gray-700 text-sm sm:text-base"
                              >
                                <h4 className="font-medium mb-2">Abstract</h4>
                                <p>{publication.abstract}</p>
                              </motion.div>
                            )}
                          </div>
                        )}

                        {/* Category Tag */}
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs sm:text-sm capitalize">
                            {publication.category === 'journal'
                              ? 'Journal Article'
                              : publication.category === 'conference'
                              ? 'Conference Paper'
                              : 'Book Chapter'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;

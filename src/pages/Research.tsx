import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { researchAreas } from '../data/researchData';

const Research = () => {
  const { areaId, domainId } = useParams<{ areaId?: string; domainId?: string }>();
  const navigate = useNavigate();

  const selectedArea = researchAreas.find((a) => a.id === areaId);
  const selectedDomain = selectedArea?.domains.find((d) => d.id === domainId);

  return (
    <div >
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
className="text-2xl sm:text-4xl font-raleway md:text-5xl leading-tight mb-4"
          >
            Research Themes
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

      <div className="max-w-7xl mx-auto px-4 py-12 mb-24">

        {/* 1. Research Areas Grid (no areaId in URL) */}
   {!areaId && (
  <div className="grid gap-8 mt-12 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">

    {researchAreas.map((area) => (
      <Link
        to={`/research/${area.id}`}
        key={area.id}
        className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
      >
        {/* Background Image */}
        <img
          src={area.image}
          alt={area.title}
          className="w-full h-100 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-white px-4 text-center transition duration-300 group-hover:bg-black/60">
          {/* Always visible title */}
          <h1 className="text-2xl font-bold mb-10">{area.title}</h1>
          
          {/* Only visible on hover */}
          <p className="text-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {area.description || 'No description available.'}
          </p>
        </div>
      </Link>
    ))}
  </div>
)}

        {/* 2. Domains Grid */}
       {areaId && !domainId && selectedArea && (
  <div>
    <button
      className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      onClick={() => navigate('/research')}
    >
      ← Back to Research Areas
    </button>
    <h2 className="text-3xl mb-6 text-center">{selectedArea.title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-14 py-3">
      {selectedArea.domains.map((domain) => (
        <Link
          key={domain.id}
          to={`/research/${areaId}/${domain.id}`}
          className="relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
        >
          <img
            src={domain.image}
            alt={domain.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-xl font-sans text-center px-2">
              {domain.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
)}

        {/* 3. Projects List under Domain */}
{areaId && domainId && selectedDomain && (
  <div>
    <button
      className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      onClick={() => navigate(`/research/${areaId}`)}
    >
      ← Back to Domains
    </button>
    <h2 className="text-3xl font-bold mb-6 text-center">{selectedDomain.title} Projects</h2>
    <div className="flex items-center justify-center min-h-[200px] px-4">
  <p className="text-lg mb-8 text-center px-17">
    {selectedDomain.description}
  </p>
</div>
    <div className="space-y-6">
      {selectedDomain.projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition w-full max-w-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full sm:w-64 h-auto object-cover flex-shrink-0"
          />
          <div className="p-6 flex flex-col justify-center flex-grow">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}



        {/* Optional: Show error if invalid areaId or domainId */}
        {areaId && !selectedArea && (
          <div className="text-center mt-10 text-red-600 font-semibold">
            Research area not found.
          </div>
        )}
        {domainId && !selectedDomain && (
          <div className="text-center mt-10 text-red-600 font-semibold">
            Domain not found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Research;

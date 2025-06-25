import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { researchAreas } from '../data/researchData';

const ResearchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const area = researchAreas.find((a) => a.id === id);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  if (!area) return <div className="p-8">Research area not found.</div>;

  const domain = area.domains?.find((d) => d.id === selectedDomain);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{area.title}</h1>
      <p className="mb-8 text-gray-700">{area.description}</p>

      {/* Show Domain Tiles if no domain selected */}
      {!selectedDomain && area.domains && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {area.domains.map((domain) => (
            <div
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className="cursor-pointer bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              <h3 className="text-xl font-semibold text-center">{domain.title}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Show projects of selected domain */}
      {domain && (
        <div>
          <button
            onClick={() => setSelectedDomain(null)}
            className="mb-6 text-blue-600 hover:underline"
          >
            &larr; Back to Domains
          </button>
          <h2 className="text-2xl font-semibold mb-6">{domain.title} Projects</h2>
          <div className="space-y-6">
            {domain.projects.map((project) => (
              <div
                key={project.id}
                className="flex bg-white shadow rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-48 h-48 object-cover"
                />
                <div className="p-4 flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description || 'Description coming soon...'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchDetail;

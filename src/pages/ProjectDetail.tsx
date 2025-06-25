import React from 'react';
import { useParams } from 'react-router-dom';
import { researchAreas } from '../data/researchData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  const allProjects = researchAreas.flatMap((area) =>
    area.domains.flatMap((domain) =>
      domain.projects.map((project) => ({
        ...project,
        domainTitle: domain.title,
        areaTitle: area.title,
      }))
    )
  );

  const project = allProjects.find((p) => p.id === id);

  if (!project) return <div className="p-8">Project not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-20">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Research Area:</strong> {project.areaTitle}
      </p>
      <p className="text-gray-600 mb-6">
        <strong>Domain:</strong> {project.domainTitle}
      </p>
      <p className="text-gray-700">{project.description || 'Detailed project info not available.'}</p>
    </div>
  );
};

export default ProjectDetail;

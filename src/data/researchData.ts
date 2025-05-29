export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'Materials & Mechanics',
    title: 'Materials & Mechanics',
    description: 'Our research focuses on developing multifunctional composites with enhanced mechanical, electrical, and thermal properties. We explore novel material combinations and processing techniques to create composites that can serve multiple functions simultaneously.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keywords: ['Composites', 'Smart Materials', 'Multifunctional Design']
  },
  {
    id: 'Manufacturing',
    title: 'Manufacturing',
    description: 'We investigate advanced additive manufacturing techniques for fabricating complex structures with precise control over material composition and properties. Our research spans from developing new printable materials to optimizing printing parameters for specific applications.',
    image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keywords: ['3D Printing', 'Digital Fabrication', 'Rapid Prototyping']
  },
  {
    id: 'Design',
    title: 'Design',
    description: 'Our lab explores the synthesis, characterization, and application of various nanomaterials for enhancing the properties of composites. We develop scalable methods for integrating nanomaterials into larger structures while preserving their unique properties.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keywords: ['Nanocomposites', 'Nanoparticles', 'Carbon Nanotubes']
  },
  {
    id: 'biomimetic-materials',
    title: 'Biomimetic Materials',
    description: 'Inspired by nature, we design and fabricate materials that mimic biological structures and functions. Our research aims to translate the exceptional properties found in natural materials into synthetic counterparts for engineering applications.',
    image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keywords: ['Biomimicry', 'Bio-inspired Design', 'Natural Materials']
  }
];
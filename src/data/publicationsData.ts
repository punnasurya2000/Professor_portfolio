import pub1 from '../../images/pub1.jpg';
import pub2 from '../../images/pub2.jpeg';
import pub3 from '../../images/pub3.jpeg';
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  image?: string; // Optional image URL for the publication
  abstract?: string;
  category: 'journal' | 'conference' | 'book';
}

export const publications: Publication[] = [
  {
    id: 'pub1',
    title: 'Additive Manufacturing of Multifunctional Composites with Embedded Sensors',
    authors: 'Rahman M., Smith J., Johnson A.',
    journal: 'Advanced Materials',
    year: 2023,
    doi: '10.1021/acsnano.0c00000',
    image:pub1,
    abstract: 'This paper presents a novel approach to fabricate multifunctional composites with embedded sensors using additive manufacturing techniques. The resulting materials exhibit enhanced mechanical properties while enabling real-time monitoring of structural health.',
    category: 'journal'
  },
  {
    id: 'pub2',
    title: 'Mechanical Properties of Graphene-Reinforced Polymer Nanocomposites',
    authors: 'Johnson A., Rahman M., Wilson B.',
    journal: 'Composites Science and Technology',
    year: 2022,
    doi: '10.1016/j.compscitech.2022.00000',
    image:pub2,
    abstract: 'This study investigates the effect of graphene concentration on the mechanical properties of polymer nanocomposites. Results show significant improvements in tensile strength and modulus with optimal graphene dispersion.',
    category: 'journal'
  },
  {
    id: 'pub3',
    title: 'Bio-inspired Design Principles for Next-Generation Composite Materials',
    authors: 'Rahman M., Thompson C., Rodriguez E.',
    journal: 'Proceedings of the International Conference on Advanced Materials',
    year: 2022,
    image:pub3,
    abstract: 'This paper explores how principles from biological structures can inform the design of next-generation composite materials with enhanced toughness and damage tolerance.',
    category: 'conference'
  },
  {
    id: 'pub4',
    title: 'Thermal Management in 3D Printed Electronic Enclosures',
    authors: 'Wilson B., Rahman M., Chen H.',
    journal: 'Journal of Electronic Packaging',
    year: 2021,
    doi: '10.1115/1.4000000',
    image:pub1,
    abstract: 'This research presents strategies for optimizing the thermal management in 3D printed electronic enclosures through material selection and geometry design.',
    category: 'journal'
  },
  {
    id: 'pub5',
    title: 'Sustainability Aspects of Additive Manufacturing: A Comprehensive Review',
    authors: 'Green S., Rahman M., Adams J.',
    journal: 'Journal of Cleaner Production',
    year: 2021,
    doi: '10.1016/j.jclepro.2021.00000',
    image:pub2,
    abstract: 'This review examines the environmental, economic, and social sustainability aspects of additive manufacturing technologies compared to traditional manufacturing processes.',
    category: 'journal'
  },
  {
    id: 'pub6',
    title: 'Functionally Graded Materials: Processing, Characterization, and Applications',
    authors: 'Rahman M., Davis L., Wang K.',
    journal: 'Materials & Design',
    year: 2020,
    doi: '10.1016/j.matdes.2020.00000',
    image:pub3,
    abstract: 'This paper discusses various processing techniques, characterization methods, and potential applications of functionally graded materials in aerospace, biomedical, and energy sectors.',
    category: 'journal'
  }
];
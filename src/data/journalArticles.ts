export interface JournalArticle {
  id: string;              // Unique identifier (UUID or string)
  title: string;           // Title of the journal article
  link: string;            // External link (e.g., DOI or full text)
  authors: string;         // Author list (as a single string or array)
  conference: string;      // Conference or journal name
  year: number;            // Publication year
}
export const journalArticles: JournalArticle[] = [
  {
    id: 'JA-001',
    title: 'Processing Dynamics of Carbon Nanotube–Epoxy Nanocomposites during 3D Printing',
    link: 'https://doi.org/10.1016/j.xcrp.2023.101617',
    authors: 'Khater, A.; Saadi, M. A. S. R.; Bhattacharyya, S.; ...; Rahman, M. M.',
    conference: 'Cell Reports Physical Science',
    year: 2023
  },
  {
    id: 'JA-002',
    title: 'Functional Wood for Carbon Dioxide Capture',
    link: 'https://doi.org/10.1016/j.xcrp.2023.101269',
    authors: 'Roy, S.; Philip, F.A.; Oliveira, E.F.; ...; Rahman, M. M.',
    conference: 'Cell Reports Physical Science',
    year: 2023
  },
  {
    id: 'JA-003',
    title: 'Processing Dynamics of Carbon Nanotube–Epoxy Nanocomposites during 3D Printing',
    link: 'https://doi.org/10.1016/j.xcrp.2023.101617',
    authors: 'Khater, A.; Saadi, M. A. S. R.; Bhattacharyya, S.; ...; Rahman, M. M.',
    conference: 'Cell Reports Physical Science',
    year: 2022
  },
  {
    id: 'JA-004',
    title: 'Functional Wood for Carbon Dioxide Capture',
    link: 'https://doi.org/10.1016/j.xcrp.2023.101269',
    authors: 'Roy, S.; Philip, F.A.; Oliveira, E.F.; ...; Rahman, M. M.',
    conference: 'Cell Reports Physical Science',
    year: 2022
  },
  {
    id: 'JA-005',
    title: 'A Review of the Mechanical Properties of 3D Printed Carbon Fiber Reinforced Polymers',
    link: 'https://doi.org/10.1016/j.xcrp.2023.101617',
    authors: 'Rahman, M. M.; Smith, J.; Johnson, A.',
    conference: 'Journal of Materials Science',
    year: 2022
    },
    {
        id: 'JA-006',
        title: 'Advancements in Additive Manufacturing of Multifunctional Composites',
        link: 'https://doi.org/10.1016/j.xcrp.2023.101269',
        authors: 'Rahman, M. M.; Green, S.; Wilson, B.',
        conference: 'Composites Science and Technology',
        year: 2022
    }
];

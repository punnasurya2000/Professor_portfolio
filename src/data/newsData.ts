export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  category: 'publication' | 'award' | 'conference' | 'general';
}

export const newsItems: NewsItem[] = [
  {
    id: 'news1',
    title: 'Dr. Rahman Receives NSF CAREER Award',
    date: '2023-03-15',
    content: 'We are pleased to announce that Dr. Maksud Rahman has been awarded the prestigious NSF CAREER Award for his proposal on "Developing Multifunctional Composites through Additive Manufacturing." This five-year grant will support our lab\'s research on novel manufacturing techniques for next-generation composite materials.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'award'
  },
  {
    id: 'news2',
    title: 'New Publication in Advanced Materials',
    date: '2023-02-10',
    content: 'Our research on "Additive Manufacturing of Multifunctional Composites with Embedded Sensors" has been published in Advanced Materials. This work represents a significant advancement in the field of smart materials and was a collaborative effort between our lab and researchers at MIT.',
    category: 'publication'
  },
  {
    id: 'news3',
    title: 'Lab Presentation at SAMPE 2023',
    date: '2023-01-18',
    content: 'Sarah Johnson will be presenting our latest research on bio-inspired composite materials at the SAMPE 2023 conference in Seattle. Her presentation, titled "Biomimetic Strategies for Enhancing Damage Tolerance in Fiber-Reinforced Composites," is scheduled for May 23rd at 2:30 PM.',
    category: 'conference'
  },
  {
    id: 'news4',
    title: 'New Equipment Acquisition',
    date: '2022-11-30',
    content: 'The lab has recently acquired a new high-resolution 3D printer capable of multi-material printing. This equipment will enhance our capabilities in fabricating complex composite structures with functional gradients and will support several ongoing research projects.',
    image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'general'
  },
  {
    id: 'news5',
    title: 'Collaboration with Aerospace Industry',
    date: '2022-10-15',
    content: 'We are excited to announce a new research collaboration with a leading aerospace company to develop lightweight composite materials for aircraft components. This partnership will provide valuable industry perspective and potential pathways for technology transfer.',
    category: 'general'
  },
  {
    id: 'news6',
    title: 'Graduate Student Wins Best Poster Award',
    date: '2022-09-22',
    content: 'Congratulations to David Chen for winning the Best Poster Award at the International Conference on Advanced Materials for his work on "Functionally Graded Materials via Additive Manufacturing." This recognition highlights the innovative research being conducted in our lab.',
    category: 'award'
  }
];
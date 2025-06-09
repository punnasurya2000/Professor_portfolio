export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  category:  'conference' | 'general';
}

export const newsItems: NewsItem[]  = [
  {
    id: 'news3',
    title: 'Lab Presentation at SAMPE 2023',
    date: '2023-01-18',
    content:
      'Sarah Johnson will be presenting our latest research on bio-inspired composite materials at the SAMPE 2023 conference in Seattle. Her presentation, titled "Biomimetic Strategies for Enhancing Damage Tolerance in Fiber-Reinforced Composites," is scheduled for May 23rd at 2:30 PM.',
    
    category: 'conference'
  },
  {
    id: 'news7',
    title: 'Workshop on Additive Manufacturing Techniques',
    date: '2023-04-12',
    content:
      'Our lab hosted a hands-on workshop on additive manufacturing techniques for multifunctional composites. Attendees included graduate students, faculty, and industry professionals interested in 3D printing and smart material design.',
    
    category: 'conference'
  },
  {
    id: 'news8',
    title: 'STEM Outreach at Local High School',
    date: '2023-05-05',
    content:
      'Team members from our lab visited Lincoln High School to demonstrate 3D printing of composite parts and discuss careers in materials science and engineering. The outreach event aimed to inspire the next generation of engineers.',
    
    category: 'general'
  },
  {
    id: 'news9',
    title: 'Guest Lecture by Dr. Helena Brooks',
    date: '2023-06-01',
    content:
      'We welcomed Dr. Helena Brooks from Georgia Tech for a guest lecture on high-performance polymers and their role in aerospace applications. The talk sparked exciting discussion around sustainable composite alternatives.',
    
    category: 'general'
  },
  {
    id: 'news10',
    title: 'Summer Interns Join the Lab',
    date: '2023-06-15',
    content:
      'This summer, our lab welcomes five undergraduate interns from across the country as part of our NSF REU program. They’ll contribute to ongoing research in multi-material printing and sensor integration.',
    
    category: 'conference'
  }
];

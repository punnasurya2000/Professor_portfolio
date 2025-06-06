export interface Person {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  education: string[];
  email?: string;
  website?: string;
  category: 'faculty' | 'postdoc' | 'phd' | 'masters' | 'undergrad' | 'alumni';
}

export const people: Person[] = [
  {
    id: 'prof-rahman',
    name: 'Dr. Maksud Rahman',
    title: 'Assistant Professor',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Dr. Rahman leads the Smart Materials and Additive Manufacturing Lab at the University of Houston. His research focuses on multifunctional composites, additive manufacturing, and biomimetic materials.',
    education: [
      'Ph.D. in Mechanical Engineering, University of California, 2015',
      'M.S. in Materials Science and Engineering, University of Michigan, 2011',
      'B.S. in Mechanical Engineering, Bangladesh University of Engineering and Technology, 2009'
    ],
    email: 'mrahman19@uh.edu',
    website: 'https://maksudrahman.com',
    category: 'faculty'
  },
  {
    id: 'john-smith',
    name: 'Dr. John Smith',
    title: 'Postdoctoral Research Associate',
    image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Dr. Smith specializes in nanomaterials and their integration into multifunctional composites. His current research explores novel synthesis methods for carbon-based nanomaterials.',
    education: [
      'Ph.D. in Materials Science, MIT, 2020',
      'B.S. in Chemistry, University of Washington, 2016'
    ],
    email: 'jsmith@uh.edu',
    category: 'postdoc'
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    title: 'Ph.D. Candidate',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Sarah is researching bio-inspired design principles for developing damage-tolerant composite materials. Her work combines computational modeling with experimental validation.',
    education: [
      'M.S. in Mechanical Engineering, University of Houston, 2019',
      'B.S. in Mechanical Engineering, Texas A&M University, 2017'
    ],
    email: 'sjohnson@uh.edu',
    category: 'phd'
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    title: 'Ph.D. Student',
    image: 'https://images.pexels.com/photos/3777944/pexels-photo-3777944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'David focuses on developing novel additive manufacturing techniques for functionally graded materials. His research aims to enable multi-material printing with precise control over composition gradients.',
    education: [
      'M.S. in Materials Science, Georgia Tech, 2020',
      'B.S. in Mechanical Engineering, University of California, Berkeley, 2018'
    ],
    email: 'dchen@uh.edu',
    category: 'phd'
  },
  {
    id: 'michael-taylor',
    name: 'Michael Taylor',
    title: 'M.S. Student',
    image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Michael is investigating the mechanical properties of 3D printed composites reinforced with continuous fibers. His work includes both experimental testing and finite element analysis.',
    education: [
      'B.S. in Mechanical Engineering, University of Houston, 2021'
    ],
    email: 'mtaylor@uh.edu',
    category: 'masters'
  },
  {
    id: 'lisa-rodriguez',
    name: 'Lisa Rodriguez',
    title: 'Undergraduate Researcher',
    image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Lisa assists with the characterization of nanomaterials and their integration into polymer composites. She is learning various analytical techniques including SEM, TGA, and DSC.',
    education: [
      'Current B.S. in Mechanical Engineering, University of Houston, Expected 2023'
    ],
    email: 'lrodriguez@uh.edu',
    category: 'undergrad'
  }
];
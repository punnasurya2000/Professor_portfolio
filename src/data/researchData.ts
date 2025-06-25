export interface ResearchProject {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export interface Domain {
  id: string;
  title: string;
  image: string;
  description?: string;
  projects: ResearchProject[];
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
  domains: Domain[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'materials-mechanics',
    title: 'Materials & Mechanics',
    description:
      'Intricate hierarchical structures found in nature reveal how exceptional mechanical and functional performance can be achieved with minimal material diversity. These distinguished properties stem not just from the material composition but, more importantly, from the topology and spatial arrangement of their building blocks. At our lab, we draw inspiration from these natural design principles to engineer advanced lightweight structures with tailored multiscale geometries. Leveraging the capabilities of additive manufacturing, we aim to translate these design paradigms at the macroscale into damage-tolerant and energy-efficient architectures.',
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keywords: ['Composites', 'Smart Materials', 'Multifunctional Design'],
    domains: [
     
  {
    id: "additive-bio-materials",
    title: "Additive Manufacturing of Biotic Materials",
    description: "This research focuses on developing architected bio-based materials that enhance sustainability and scalability through additive manufacturing. By tailoring composition, structure, and properties, and integrating various bio-materials at different scales, the goal is to create next-generation sustainable structures. Customized printheads and adaptive multi-material printing techniques enable fabrication of complex, graded architectures for applications ranging from structural systems to functional devices.",
    image: "https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    projects: [
      {
        id: "multi-material-printing",
        title: "Multi-Material Printing for Functional Structures",
        image: "https://images.pexels.com/photos/586415/pexels-photo-586415.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Development of adaptive printheads for multi-material printing, enabling complex graded structures with tailored functionalities for sustainable infrastructure."
      },
      {
        id: "bio-integrated-architecture",
        title: "Bio-Integrated Architectural Materials",
        image: "https://images.pexels.com/photos/586415/pexels-photo-586415.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Fabrication of architected biotic composites for environmentally responsible construction materials using natural polymers and additive techniques."
      }
    ]
  },
  {
    id: "recyclable-materials",
    title: "Additive Manufacturing of Recyclable Materials",
    description: "This project aims to design recyclable nanocomposite materials using additive manufacturing. By engineering composition, structure, and interfaces, the team develops composites with novel mechanical and functional properties. Future work includes expanding to various polymers and fiber reinforcements, and using interface engineering to program behaviors directly into printed structures. The goal is to develop lightweight, high-performance materials for aerospace and structural systems.",
    image: "https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    projects: [
      {
        id: "nanocomposite-mechanical-study",
        title: "Mechanical Performance of Recyclable Nanocomposites",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Investigation of strength, flexibility, and recyclability in nanocomposites produced via 3D printing using sustainable feedstocks."
      },
      {
        id: "interface-engineered-composites",
        title: "Interface-Engineered Recyclable Composites",
        image: "https://images.pexels.com/photos/3850684/pexels-photo-3850684.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Design of multi-layered fiber-reinforced polymer composites with tailored interfaces to tune structural responses and end-of-life recyclability."
      }
    ]
  },
  {
    id: "bio-inspired-design",
    title: "Bio-Inspired Damage-Tolerant Design",
    description: "This research tackles the classic trade-off between strength and toughness in structural materials by drawing inspiration from nature’s damage-tolerant composites. By combining hard phases for strength and soft bio-based polymers for toughness in intricate architectures across scales, the team aims to create ceramic-based structures with superior mechanical performance.",
    image: "https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    projects: [
      {
        id: "ceramic-polymer-hybrid",
        title: "Ceramic-Polymer Hybrid Composites",
        image: "https://images.pexels.com/photos/5074100/pexels-photo-5074100.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Fabrication of hybrid structures combining ceramic phases with soft polymers arranged in bio-inspired patterns for enhanced toughness."
      },
      {
        id: "multiscale-architectures",
        title: "Multiscale Architectures for Damage Mitigation",
        image: "https://images.pexels.com/photos/5074140/pexels-photo-5074140.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Design of hierarchical structures emulating natural materials to improve energy dissipation and crack resistance in brittle systems."
      }
    ]
  },
  {
    id: "living-composites",
    title: "Biomanufacturing of Living Composites",
    description: "Inspired by nature, this project develops living materials that incorporate organisms to create structurally complex systems. The focus is on cellulose-based living nanocomposites with embedded microorganisms like cellulose-producing bacteria for self-healing and self-strengthening. The team investigates stimuli-responsiveness, biocompatibility, longevity, and energy efficiency to develop sustainable and adaptive material systems.",
    image: "https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    projects: [
      {
        id: "self-healing-cellulose",
        title: "Self-Healing Cellulose-Based Composites",
        image: "https://images.pexels.com/photos/5217880/pexels-photo-5217880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Development of 3D printed cellulose matrices incorporating bacteria that enable in-situ repair of material damage."
      },
      {
        id: "stimuli-responsive-nanocomposites",
        title: "Stimuli-Responsive Living Nanocomposites",
        image: "https://images.pexels.com/photos/1170978/pexels-photo-1170978.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Exploration of dynamic responses of bio-integrated composites under environmental stimuli for functional and adaptive applications."
      }
    ]
  }

    ],
  },
  {
    id: 'manufacturing',
    title: 'DESIGN AND MANUFACTURING FOR CIRCULARITY',
    description:
      'Intricate hierarchical structures found in nature reveal how exceptional mechanical and functional performance can be achieved with minimal material diversity. These distinguished properties stem not just from the material composition but, more importantly, from the topology and spatial arrangement of their building blocks. At our lab, we draw inspiration from these natural design principles to engineer advanced lightweight structures with tailored multiscale geometries. Leveraging the capabilities of additive manufacturing, we aim to translate these design paradigms at the macroscale into damage-tolerant and energy-efficient architectures.',
    image:
      'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    keywords: ['3D Printing', 'Digital Fabrication', 'Rapid Prototyping'],
    domains: [
     
  {
    id: "additive-bio-materials",
    title: "ADDITIVE MANUFACTURING OF BIOTIC MATERIALS",
    description: "This research focuses on developing architected bio-based materials that enhance sustainability and scalability through additive manufacturing. By tailoring composition, structure, and properties, and integrating various bio-materials at different scales, the goal is to create next-generation sustainable structures. Customized printheads and adaptive multi-material printing techniques enable fabrication of complex, graded architectures for applications ranging from structural systems to functional devices.",
    image: "../../images/domain1.jpg",
    projects: [
      {
        id: "multi-material-printing",
        title: "Multi-Material Printing for Functional Structures",
        image: "https://images.pexels.com/photos/586415/pexels-photo-586415.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Development of adaptive printheads for multi-material printing, enabling complex graded structures with tailored functionalities for sustainable infrastructure."
      },
      {
        id: "bio-integrated-architecture",
        title: "Bio-Integrated Architectural Materials",
        image: "https://images.pexels.com/photos/586415/pexels-photo-586415.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Fabrication of architected biotic composites for environmentally responsible construction materials using natural polymers and additive techniques."
      }
    ]
  },
  {
    id: "recyclable-materials",
    title: "Additive Manufacturing of Recyclable Materials",
    description: "This project aims to design recyclable nanocomposite materials using additive manufacturing. By engineering composition, structure, and interfaces, the team develops composites with novel mechanical and functional properties. Future work includes expanding to various polymers and fiber reinforcements, and using interface engineering to program behaviors directly into printed structures. The goal is to develop lightweight, high-performance materials for aerospace and structural systems.",
    image: "https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    projects: [
      {
        id: "nanocomposite-mechanical-study",
        title: "Mechanical Performance of Recyclable Nanocomposites",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Investigation of strength, flexibility, and recyclability in nanocomposites produced via 3D printing using sustainable feedstocks."
      },
      {
        id: "interface-engineered-composites",
        title: "Interface-Engineered Recyclable Composites",
        image: "https://images.pexels.com/photos/3850684/pexels-photo-3850684.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Design of multi-layered fiber-reinforced polymer composites with tailored interfaces to tune structural responses and end-of-life recyclability."
      }
    ]
  },
  {
    id: "bio-inspired-design",
    title: "Bio-Inspired Damage-Tolerant Design",
    description: "This research tackles the classic trade-off between strength and toughness in structural materials by drawing inspiration from nature’s damage-tolerant composites. By combining hard phases for strength and soft bio-based polymers for toughness in intricate architectures across scales, the team aims to create ceramic-based structures with superior mechanical performance.",
    image: "https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    projects: [
      {
        id: "ceramic-polymer-hybrid",
        title: "Ceramic-Polymer Hybrid Composites",
        image: "https://images.pexels.com/photos/5074100/pexels-photo-5074100.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Fabrication of hybrid structures combining ceramic phases with soft polymers arranged in bio-inspired patterns for enhanced toughness."
      },
      {
        id: "multiscale-architectures",
        title: "Multiscale Architectures for Damage Mitigation",
        image: "https://images.pexels.com/photos/5074140/pexels-photo-5074140.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Design of hierarchical structures emulating natural materials to improve energy dissipation and crack resistance in brittle systems."
      }
    ]
  },
  {
    id: "living-composites",
    title: "Biomanufacturing of Living Composites",
    description: "Inspired by nature, this project develops living materials that incorporate organisms to create structurally complex systems. The focus is on cellulose-based living nanocomposites with embedded microorganisms like cellulose-producing bacteria for self-healing and self-strengthening. The team investigates stimuli-responsiveness, biocompatibility, longevity, and energy efficiency to develop sustainable and adaptive material systems.",
    image: "https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    projects: [
      {
        id: "self-healing-cellulose",
        title: "Self-Healing Cellulose-Based Composites",
        image: "https://images.pexels.com/photos/5217880/pexels-photo-5217880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Development of 3D printed cellulose matrices incorporating bacteria that enable in-situ repair of material damage."
      },
      {
        id: "stimuli-responsive-nanocomposites",
        title: "Stimuli-Responsive Living Nanocomposites",
        image: "https://images.pexels.com/photos/1170978/pexels-photo-1170978.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        description: "Exploration of dynamic responses of bio-integrated composites under environmental stimuli for functional and adaptive applications."
      }
    ]
  }

    ],
  }
      
    
  
];

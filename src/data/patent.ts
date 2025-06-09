export interface Patent {
  id: string;               // Unique identifier
  title: string;            // Title of the patent
  link: string;             // External link to the patent (e.g., Google Patents or USPTO)
  author: string;           // Inventors (you can also rename this to 'inventors' for clarity)
  applicationNumber: string;
  year : number // Patent application number
}
export const patents: Patent[] = [
  {
    id: 'P-008',
    title: 'Direct Ink Printing of Multi-material Composite Structures.',
    link: '',
    author: 'Sajadi, S. M.; Boul, P. J.; Tiwary, C.S.; Rahman, M. M.; Ajayan, P. M.; Thaemlitz, C.',
    applicationNumber: '17/575,177',
    year: 2023
  },
  {
    id: 'P-007',
    title: 'Cementing a wellbore using a direct ink printing.',
    link: '',
    author: 'Patel, H. A.; Khater, A.; Boul, P. J.; Ajayan, P. M.; Rahman, M. M.',
    applicationNumber: '17/551,051',
    year: 2023
  },
  {
    id: 'P-006',
    title: 'Shape-memory behavior of epoxy/sliding-ring polymer composites',
    link: '',
    author: 'Patel, H. A.; Khater, A.; Boul, P. J.; Ajayan, P. M.; Rahman, M. M.',
    applicationNumber: '17/550,653',
    year: 2023
  },
  {
    id: 'P-005',
    title: 'Epoxy compositions containing polyrotaxane additives having improved impact strength',
    link: '',
    author: 'Patel, H. A.; Khater, A.; Boul, P. J.; Ajayan, P. M.; Rahman, M. M.',
    applicationNumber: '17/550,638',
    year: 2023
  },
  {
    id: 'P-004',
    title: '3D Printed Polyrotaxane Additives and Compositions.',
    link: '',
    author: 'Patel, H. A.; Khater, A.; Boul, P. J.; Ajayan, P. M.; Rahman, M. M.',
    applicationNumber: '17/550,631',
    year: 2023
  },
  {
    id: 'P-003',
    title: 'Poly-albumen based green coating to enhance shelf life of perishable foods',
    link: '',
    author: 'Rahman, M. M.; JUNG, S.; POTTACKAL, N.; Ajayan, P. M.',
    applicationNumber: 'US20220007692A1',
    year: 2022
  },
  {
    id: 'P-002',
    title: 'Additive manufacture-assisted method for making structural elements having controlled failure characteristics',
    link: '',
    author: 'S. M. Sajadi, A. MEIYAZHAGAN, P. Boul, M. Rahman, C. Thaemlitz, P. Ajayan',
    applicationNumber: 'US20210354366A1',
    year: 2021
  },
  {
    id: 'P-001',
    title: 'Cement-based direct ink for 3D-printing of complex architected structures',
    link: '',
    author: 'Rahman, M. M.; Sajadi, S. M.; Kumar, A.; Boul, P. J.; Thaemlitz, C.; Ajayan, P. M.',
    applicationNumber: '16/596,396',
    year: 2020
  }
];
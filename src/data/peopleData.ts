import maksud from '../../images/People_page/Maksud Rahman portrait.jpg';
import saadi from '../../images/People_page/saadi.jpg';
import shajed from '../../images/People_page/shajed.jpg';
import toffal from '../../images/People_page/Toffal.png';
import mia from '../../images/People_page/Mia.png';
import fahad from '../../images/People_page/Fahad.png';
import reena from '../../images/People_page/reena.jpg';
import rifat from '../../images/People_page/rifat.jpeg';


export interface Person {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  education: string[];
  email?: string;
  website?: string;
  linkedin?:string;
  googlescholar?:string;
  category?: 'faculty' | 'postdoc' | 'phd' | 'masters' | 'undergrad' | 'alumni';
}

export const people: Person[] = [
  {
    id: 'prof-rahman',
    name: 'Prof. Maksud Rahman',
    title: 'PI & Director',
    image: maksud,
    bio: 'Maksud Rahman is an Assistant Professor in the Department of Mechanical and Aerospace Engineering at the University of Houston, Texas. His research interests lie in the design and manufacturing next-generation nanocomposites via advanced manufacturing technologies, including additive manufacturing, emphasizing circularity and sustainability for load-bearing structures, foods, textiles, energy, and environmental applications. He has published articles in many prestigious journals, including Science Advances, Nature Communications, Advanced Materials, Advanced Functional Materials, and ACS Nano. His research achievements have been featured by Science, Nature, BBC, New Scientist, and many other media outlets. Prof. Rahman has received several federal and industrial grants from the USA and Canada, including NSF and USDA, as Principal Investigator. He received the prestigious Herschel M Rich award in 2020 at Rice University and is the Climate Reality Project Leader trained by former vice-president Al Gore.',
    education: [
      'Ph.D., 2016, Cornell University, NY, USA',
      'M.S., 2012, Tuskegee University, AL, USA',
      'B.S., 2005, Bangladesh University of Engineering and Technology, Dhaka, Bangladesh'
    ],
    email: 'maksud@uh.edu',
    website: 'https://maksudrahman.com',
    linkedin: 'https://www.linkedin.com/in/maksud-rahman-04559883/',
    googlescholar: 'https://scholar.google.com/citations?user=hky0f9UAAAAJ&hl=en',
    category: 'faculty'
  },
  {
    id: 'Shajedul Hoque',
    name: 'Shajedul Hoque',
    title: 'Postdoctoral Fellow',
    image: shajed,
    bio: 'Shajedul Hoque is a Post Doctoral Fellow in Mechanical Engineering under the supervision of Prof. Rahman. His current research is focused on advanced manufacturing of wood. Shajed received his Ph.D. from Rice University, focused on pioneering sustainable innovations in additive manufacturing. His dissertation on additive manufacturing of bio-inspired sustainable composites included the first-ever 3D printing of wood structures using water-based inks, a project published in Science Advances and highlighted in Nature. Shajed received his B.Sc. in Mechanical Engineering from Bangladesh University of Engineering and Technology, Bangladesh in 2021, where he worked on deep learning, molecular dynamics, functionally graded nanomaterials, and nanoscale thermal transport. Enthusiastic about bio-inspired design and deep learning, Shajed envisions a transformative role of AI in advanced manufacturing, pushing the boundaries of materials science',
    education: [
      'Ph.D. in Materials Science and NanoEngineering at Rice University',
    ],
    linkedin: 'https://www.linkedin.com/in/mdshajedulhoquethakur/',
    googlescholar:'https://scholar.google.com/citations?user=2PN5lQ8AAAAJ&hl=en&oi=ao',
    category: 'postdoc'
  },
  {
    id: 'Tofazzal',
    name: 'Md Tofazzal Hossain',
    title: 'Doctoral Student',
    image: toffal,
    bio: 'Md Tofazzal Hossain is a Ph.D. candidate in Mechanical Engineering at the University of Houston, supervised by Dr. Maksud Rahman. He concurrently serves as an assistant professor in Mechanical Engineering at Ahsanullah University of Science and Technology, Bangladesh. Hossain earned his M.Sc. (2022) and B.Sc. (2017) in Mechanical Engineering from Bangladesh University of Engineering and Technology, investigating, respectively, finite-element models of the human left ventricle for post-AMI heart-failure prognosis and CFD-based design of naturally ventilated residential buildings. He is currently working on the advanced manufacturing of biopolymer-based composites with goal of sustainability and circular economy. Committed to sustainability, he views machine learning as a transformative driver for next-generation manufacturing and materials science.',
    education: [
      'Ph.D. candidate in Mechanical Engineering at the University of Houston',
      'M.Sc. (2022) in Mechanical Engineering from Bangladesh University of Engineering and Technology',
      'M.Sc. (2022) in Mechanical Engineering from Bangladesh University of Engineering and Technology'
    ],
    linkedin: 'https://www.linkedin.com/in/mohammad-hossain-822659132/',
    googlescholar:'https://scholar.google.com/citations?user=RJ9mJk0AAAAJ&hl=en',
    category: 'phd'
  },
  {
    id: 'Saadi',
    name: 'M.A.S.R. Saadi',
    title: 'PhD. Student',
    image: saadi,
    bio: 'M.A.S.R. Saadi completed his BS in Materials and Metallurgical Engineering from Bangladesh University of Engineering and Technology (BUET), during which he studied the effect of multi-scale reinforcement particle size on mechanical and thermal properties of polymer composites. During his MS in Mechanical and Aerospace Engineering at the George Washington University, his work focused on nanomechanics and electronic structure of organic photovoltaics and 2D materials. He is currently pursuing a PhD degree in Materials Science and NanoEngineering at Rice University, where he is working on the development of sustainable bionanocomposites for multifunctional application with particular focus on energy, environment and food nexus. His developed bionanocomposites typically comprise of hierarchically assembled high performance 1D and 2D nanosystems in carbohydrate and protein-based matrices.Hobby/Other interests: Singing different forms of Metal, Rock and Bengali Folk music, Table-tennis, Soccer, FIFA',
    education: [
      'MS in Mechanical and Aerospace Engineering at the George Washington University',
      'BS in Materials and Metallurgical Engineering from Bangladesh University of Engineering and Technology (BUET)'
    ],
    linkedin: 'https://www.linkedin.com/in/m-a-s-r-saadi-b15a691a9/@uh.edu',
    googlescholar: 'https://scholar.google.com/citations?user=Emevh2EAAAAJ&hl=en&oi=ao'
  },
  {
    id: 'Fahad',
    name: 'Mir Mohammad Fahad',
    title: 'PhD student',
    image: fahad,
    bio: 'Fahad is a Ph.D. student in the Mechanical and Aerospace Engineering Department at the University of Houston, where he works under Dr. Maksud Rahman to develop protein-based nanocomposite films that extend the shelf life of fruits (think of it as body armor for avocados—but edible). His journey with polymer materials began during his BSc in Textile Engineering at the Bangladesh University of Textiles and deepened through an MS in Advanced Materials Engineering for Information and Electronics from Kyung Hee University in South Korea. His research bridges textile chemistry, polymer science, biomedical sensors, and even cryopreservation—because why not try saving both people and produce .Hobby/Other interests: Late-night walks, cooking, swimming, flight simulator games, and overanalyzing the physics of sci-fi movies.',
    education: [
      'PhD student in the Department of Mechanical and Aerospace Engineering at University of Houston'
    ],
    linkedin: 'https://www.linkedin.com/in/mmfahad7430/@uh.edu',
    googlescholar: 'https://scholar.google.com/citations?user=JNd4HhMAAAAJ&hl=en&oi=ao'
  },
  {
    id: 'Reena',
    name: 'Mia Rodriguez ',
    title: 'Undergraduate Researcher',
    image: mia,
    bio: 'Mia Rodriguez is a junior mechanical engineering major at the University of Houston interested in the intersection of engineering and the natural world, with a growing focus on bio-inspired design and conservation. Mia has a strong foundation in CAD, MATLAB, and Arduino systems and is eager to contribute her skills to the team..',
    education: [
      'Current B.S. in Mechanical Engineering, University of Houston'
    ],
 
  },
  {
    id: 'Rifat',
    name: 'Md Rifat Hossain ',
    title: 'Visiting Research Scientist ',
    image: rifat,
    bio: 'Prior to beginning his journey as a visiting research scientist at the University of Houston, Md Rifat Hossain earned a Master of Science in Mechanical Engineering from Rensselaer Polytechnic Institute. During his time at RPI, his research focused on developing multiscale methodologies using the finite element method to investigate the material properties of fibrous structures commonly found in biological tissues.Currently at the University of Houston, Rifat is engaged in research centered on the 3D printing of polyetherimide (PEI), aiming to explore its applications through experimental and computational techniques.',
    education: [
      'Master of Science in Mechanical Engineering from Rensselaer Polytechnic Institute'
    ],
    linkedin: 'https://www.linkedin.com/in/md-rifat-hossain-kawshik/@uh.edu'
  },
  {
    id: 'Reena',
    name: 'Reena',
    title: 'Visiting Research Scientist',
    image: reena,
    bio: 'Reena A. Panchal is a volunteer researcher in Mechanical Engineering at the University of Houston, where she leverages additive manufacturing techniques to develop innovative battery architectures and enhance energy storage efficiency, including work with conductive wood. With a PhD in Mechanical Engineering from Rensselaer Polytechnic Institute, her research expertise lies in advanced battery systems, including anode-free batteries and high-energy-density sodium battery systems. Prior to her PhD, she earned her M.Tech from Panjab Universitys Centre for Nanoscience and Nanotechnology in 2017 and worked as a project associate at the Indian Institute of Science Education and Research, Pune, from 2018 to 2020.',
    education: [
      'PhD in Mechanical Engineering from Rensselaer Polytechnic Institute',
      'M.Tech from Panjab Universitys Centre for Nanoscience and Nanotechnology in 2017'
    ],
    linkedin: 'https://www.linkedin.com/in/panchalreena/',
    googlescholar:'https://scholar.google.com/citations?user=spl64WQAAAAJ&hl=en&oi=ao',
  },

];
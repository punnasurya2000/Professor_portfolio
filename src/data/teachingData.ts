export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  semester: string;
  syllabus?: string;
}

export const courses: Course[] = [
  {
    id: 'mece-4397',
    code: 'MECE 4397',
    title: 'Introduction to Composite Materials',
    description: 'This course provides an introduction to composite materials, including their classification, manufacturing methods, mechanical behavior, and applications. Students will learn about the principles governing the properties of composite materials and how to design components using composites.',
    semester: 'Fall 2023',
    syllabus: '/files/MECE4397_Syllabus.pdf'
  },
  {
    id: 'mece-6397',
    code: 'MECE 6397',
    title: 'Advanced Composite Materials',
    description: 'This graduate-level course covers advanced topics in composite materials, including micromechanics, failure theories, testing methods, and computational modeling. The course also addresses recent developments in nanocomposites and multifunctional composites.',
    semester: 'Spring 2023',
    syllabus: '/files/MECE6397_Syllabus.pdf'
  },
  {
    id: 'mece-3345',
    code: 'MECE 3345',
    title: 'Mechanical Design',
    description: 'This course focuses on the fundamentals of mechanical design, including stress analysis, deflection and stiffness, material selection, and design methodologies. Students will work on design projects that incorporate both analytical and computational approaches.',
    semester: 'Fall 2022',
    syllabus: '/files/MECE3345_Syllabus.pdf'
  },
  {
    id: 'mece-6333',
    code: 'MECE 6333',
    title: 'Additive Manufacturing',
    description: 'This course covers the principles and applications of various additive manufacturing technologies. Topics include material considerations, process selection, design for additive manufacturing, and quality control. Students will gain hands-on experience with 3D printing equipment.',
    semester: 'Spring 2022',
    syllabus: '/files/MECE6333_Syllabus.pdf'
  }
];
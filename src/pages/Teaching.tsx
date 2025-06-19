import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { courses } from '../data/teachingData';

const Teaching = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[350px] bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Classroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Teaching
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg max-w-3xl"
          >
            Information about the courses taught by Dr. Rahman and educational resources for students.
          </motion.p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Teaching Philosophy" 
            subtitle="Our approach to education and mentoring in materials science and engineering."
          />
          <AnimatedSection>
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <p className="text-gray-700 mb-6">
                My teaching philosophy centers on fostering a deep understanding of fundamental concepts while emphasizing their practical applications in real-world engineering problems. I believe in creating an engaging learning environment that encourages critical thinking, creativity, and collaboration among students.
              </p>
              <p className="text-gray-700 mb-6">
                Key elements of my teaching approach include:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li><span className="font-medium">Connecting theory with practice</span> - Integrating theoretical concepts with hands-on experiments and design projects</li>
                <li><span className="font-medium">Interactive learning</span> - Encouraging active participation through discussions, problem-solving sessions, and collaborative activities</li>
                <li><span className="font-medium">Real-world applications</span> - Using case studies and examples from industry and research to illustrate the relevance of course material</li>
                <li><span className="font-medium">Interdisciplinary perspective</span> - Highlighting connections between materials science, mechanical engineering, and other disciplines</li>
                <li><span className="font-medium">Research integration</span> - Incorporating current research topics and methodologies into the curriculum</li>
              </ul>
              <p className="text-gray-700">
                I strive to prepare students not only for technical challenges but also for the broader aspects of engineering practice, including ethical considerations, sustainability, and societal impact. My goal is to help students develop the knowledge, skills, and mindset needed for successful careers in academia, industry, or entrepreneurship.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Courses" 
            subtitle="Current and past courses taught at the University of Houston."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <AnimatedSection key={course.id} delay={0.1 * index}>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{course.code}</h3>
                      <p className="text-lg text-gray-800">{course.title}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                      {course.semester}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6">{course.description}</p>
                  {course.syllabus && (
                    <a 
                      href={course.syllabus}
                      className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Download Syllabus
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Resources */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Teaching Resources" 
            subtitle="Educational materials and resources for students."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Course Materials</h3>
                <p className="text-gray-700 mb-4">
                  Students enrolled in current courses can access lecture notes, assignments, and supplementary materials through the University of Houston's learning management system.
                </p>
                <a 
                  href="#"
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                >
                  Access Learning Management System
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Recommended Textbooks</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>Callister, W. D. & Rethwisch, D. G. "Materials Science and Engineering: An Introduction"</li>
                  <li>Gibson, I., Rosen, D., & Stucker, B. "Additive Manufacturing Technologies"</li>
                  <li>Ashby, M. F. "Materials Selection in Mechanical Design"</li>
                  <li>Chawla, K. K. "Composite Materials: Science and Engineering"</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Online Resources</h3>
                <p className="text-gray-700 mb-4">
                  These additional resources may be helpful for students interested in materials science and manufacturing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>MIT OpenCourseWare - Materials Science courses</li>
                  <li>Materials Project database</li>
                  <li>ASM International's educational resources</li>
                  <li>Society for the Advancement of Material and Process Engineering (SAMPE) resources</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Student Advising */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Student Advising" 
            subtitle="Information for current and prospective students seeking academic advising."
          />
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p className="text-gray-700 mb-6">
                Dr. Rahman holds regular office hours for students enrolled in his courses and for advising graduate students. Current office hours for the semester are:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Tuesdays: 2:00 PM - 4:00 PM</li>
                <li>Thursdays: 10:00 AM - 12:00 PM</li>
                <li>By appointment (email to schedule)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-4">Advising Areas</h3>
              <p className="text-gray-700 mb-4">
                Dr. Rahman provides academic advising in the following areas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Graduate program requirements and course selection</li>
                <li>Research opportunities in the lab</li>
                <li>Career guidance for materials science and mechanical engineering</li>
                <li>Graduate school applications and preparation</li>
                <li>Research project planning and execution</li>
              </ul>
              <h3 className="text-xl font-semibold mb-4">Scheduling an Appointment</h3>
              <p className="text-gray-700">
                To schedule an advising appointment outside of regular office hours, please email Dr. Rahman at mrahman19@uh.edu with your name, student ID, and a brief description of what you would like to discuss.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Teaching;

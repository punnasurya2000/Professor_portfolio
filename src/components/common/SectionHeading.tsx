import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        className={`section-title text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`section-subtitle text-base sm:text-lg text-gray-600 ${
            centered ? 'mx-auto' : ''
          } max-w-3xl px-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;

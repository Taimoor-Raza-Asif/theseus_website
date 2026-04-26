import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HOME_LIMIT = 6;

export default function Services() {
  const preview = services.slice(0, HOME_LIMIT);

  return (
    <section id="services" className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3 mb-3">
              Services
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-base">
              From AI integrations to enterprise cloud migrations — agile, future-proof technology solutions.
            </p>
          </div>
          <Link to="/services" className="btn-outline flex-shrink-0 self-start sm:self-auto">
            View All {services.length} Services <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link to="/services" className="btn-primary">
            Explore All Services <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

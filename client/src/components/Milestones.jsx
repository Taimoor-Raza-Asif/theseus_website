import { motion } from 'framer-motion';
import { milestones } from '../data/milestones';
import MilestoneCard from './MilestoneCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HOME_LIMIT = 6;

export default function Milestones() {
  const preview = milestones.slice(0, HOME_LIMIT);

  return (
    <section id="milestones" className="py-24 px-6">
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
            <span className="section-label">Track Record</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3 mb-3">
              Milestones
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-base">
              Key projects where Theseus drove meaningful outcomes for clients across industries.
            </p>
          </div>
          <Link
            to="/milestones"
            className="btn-outline flex-shrink-0 self-start sm:self-auto"
          >
            View All {milestones.length} Milestones <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Grid — uniform card heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((milestone, index) => (
            <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
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
          <Link
            to="/milestones"
            className="btn-primary"
          >
            See All {milestones.length} Milestones <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

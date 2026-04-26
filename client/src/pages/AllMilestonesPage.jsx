import { useState } from 'react';
import { motion } from 'framer-motion';
import { milestones } from '../data/milestones';
import MilestoneCard from '../components/MilestoneCard';
import { Filter, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FILTERS = ['All', 'Product', 'Tech'];

export default function AllMilestonesPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? milestones : milestones.filter(m => m.type === filter);

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label">Track Record</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3 mb-4">
            All Milestones
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-lg">
            A complete look at every project where Theseus drove meaningful outcomes for clients across industries.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 mb-8 flex-wrap"
        >
          <Filter size={14} className="text-zinc-400" />
          {FILTERS.map(f => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                filter === f
                  ? 'bg-violet-600 dark:bg-violet-500 text-white border-violet-600 dark:border-violet-500 shadow-md shadow-violet-500/25'
                  : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600'
              }`}
            >
              {f}
              {f !== 'All' && (
                <span className="ml-1.5 text-[10px] opacity-60">
                  ({milestones.filter(m => m.type === f).length})
                </span>
              )}
            </motion.button>
          ))}
          <span className="ml-auto text-xs text-zinc-400 font-medium">
            Showing {filtered.length} of {milestones.length}
          </span>
        </motion.div>

        {/* Full Grid — uniform card heights */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((milestone, index) => (
            <MilestoneCard
              key={milestone.id}
              milestone={milestone}
              index={index}
              showAnimation={true}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

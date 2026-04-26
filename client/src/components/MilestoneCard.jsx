import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Tag, ChevronDown, ChevronUp, Cloud, Brain, Workflow, Database, ShieldCheck, Code2, TrendingUp, BarChart3, Globe, Cpu, Lock, FileText, Mic, CreditCard, Layout } from 'lucide-react';
import { milestoneThumbnails } from '../data/milestones';

// Map milestone id → Lucide icon
const ICON_MAP = {
  1: Cloud,
  2: Brain,
  3: Workflow,
  4: BarChart3,
  5: Database,
  6: Database,
  7: CreditCard,
  8: Cloud,
  9: FileText,
  10: Mic,
  11: FileText,
  12: Lock,
  13: BarChart3,
  14: Layout,
  15: Code2,
};

function MilestoneThumbnail({ milestone }) {
  const thumb = milestoneThumbnails[milestone.id];
  const Icon = ICON_MAP[milestone.id] || Cpu;
  const isBright = thumb.isBright !== false; // default to light bg

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden
        ${isBright ? `${thumb.bgSolid} ${thumb.darkBg}` : thumb.bgSolid}
      `}
    >
      {/* Decorative blurred orb */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 60%, ${thumb.primaryColor}40 0%, transparent 70%)`,
        }}
      />

      {/* Logo image (if available) */}
      {thumb.logo ? (
        <img
          src={thumb.logo}
          alt={thumb.primary}
          className={`${thumb.logoSize} object-contain relative z-10 drop-shadow-md`}
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.12))' }}
        />
      ) : (
        <>
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 shadow-lg"
            style={{ backgroundColor: `${thumb.primaryColor}20`, border: `1.5px solid ${thumb.primaryColor}40` }}
          >
            <Icon size={28} style={{ color: thumb.primaryColor }} />
          </div>

          {/* Primary label */}
          <p
            className="text-sm font-bold relative z-10 text-center px-2"
            style={{ color: isBright ? thumb.primaryColor : '#fff', textShadow: isBright ? 'none' : '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            {thumb.primary}
          </p>
        </>
      )}

      {/* Secondary label */}
      {thumb.secondary && (
        <p
          className="text-[10px] font-medium relative z-10 text-center px-3 opacity-70"
          style={{ color: isBright ? '#555' : '#ccc' }}
        >
          {thumb.secondary}
        </p>
      )}

      {/* Bottom chevron accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div
          className="w-6 h-3"
          style={{
            background: 'var(--bg)',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          }}
        />
      </div>
    </div>
  );
}

export default function MilestoneCard({ milestone, index, showAnimation = true }) {
  const [activeType, setActiveType] = useState(milestone.type);
  const [expanded, setExpanded] = useState(false);

  const animProps = showAnimation
    ? {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: { duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] },
      }
    : {};

  return (
    <motion.div
      {...animProps}
      whileHover={{ y: -14, boxShadow: '0 32px 64px rgba(0,0,0,0.18)' }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-[420px] w-full ring-1 ring-transparent hover:ring-violet-400/50 dark:hover:ring-violet-500/40 transition-[box-shadow,ring-color] duration-300"
    >
      {/* Image Thumbnail — fixed height */}
      <div className="h-[160px] flex-shrink-0 relative">
        <MilestoneThumbnail milestone={milestone} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3 overflow-hidden">
        {/* Tags + Date */}
        <div className="flex items-center justify-between flex-wrap gap-1.5">
          <div className="flex items-center gap-1">
            <Tag size={11} className="text-zinc-400 flex-shrink-0" />
            <div className="flex flex-wrap gap-1">
              {milestone.tags.slice(0, 2).map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 text-zinc-400 flex-shrink-0">
            <Calendar size={10} />
            <span className="text-[10px] font-medium whitespace-nowrap">{milestone.date}</span>
          </div>
        </div>

        {/* Title — 2-line clamp */}
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 leading-snug line-clamp-2">
          {milestone.title}
        </h3>

        {/* Description — fills remaining space */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.p
              key={expanded ? 'full' : 'short'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className={`text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed ${expanded ? 'overflow-y-auto h-full pr-1 no-scrollbar' : 'line-clamp-3'}`}
            >
              {expanded ? milestone.fullDesc : milestone.shortDesc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bottom: Product/Tech toggle + expand */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800 flex-shrink-0">
          {/* Pill Toggle */}
          <div className="flex items-center gap-2" role="group" aria-label="View type">
            <span className="text-[11px] font-medium text-zinc-400">Product</span>
            <div
              onClick={() => setActiveType(t => t === 'Product' ? 'Tech' : 'Product')}
              className="relative w-10 h-5 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-700 flex items-center px-0.5 transition-colors duration-300"
              role="switch"
              aria-checked={activeType === 'Tech'}
              id={`toggle-${milestone.id}`}
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                className={`w-4 h-4 rounded-full shadow-sm ${
                  activeType === 'Tech'
                    ? 'ml-auto bg-gradient-to-br from-violet-500 to-fuchsia-500'
                    : 'bg-white dark:bg-zinc-300'
                }`}
              />
            </div>
            <span className="text-[11px] font-medium text-zinc-400">Tech</span>
          </div>

          {/* Expand / Collapse */}
          <button
            onClick={() => setExpanded(e => !e)}
            className="flex items-center gap-0.5 text-[11px] font-semibold text-violet-500 dark:text-violet-400 hover:text-violet-600 transition-colors"
            aria-expanded={expanded}
          >
            {expanded ? <><ChevronUp size={13} />Less</> : <><ChevronDown size={13} />More</>}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

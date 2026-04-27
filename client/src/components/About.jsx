import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Users, Target, Quote } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Projects Delivered', icon: Target },
  { value: '$200B+', label: 'Client AUM Served', icon: Cpu },
  { value: '5+', label: 'Years Experience', icon: GraduationCap },
  { value: '10+', label: 'Satisfied Clients', icon: Users },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Our Story</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3">
            About Us
          </h2>
        </motion.div>

        {/* ── Row 1: Story text + Stats ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              The Ship of Theseus —{' '}
              <span className="text-gradient">Constant evolution,</span>{' '}
              enduring identity.
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              Theseus Group LLC is a technology consultancy founded on a simple but powerful belief:
              technology should <span className="text-zinc-900 dark:text-zinc-100 font-semibold">amplify human capability</span>,
              not replace it. We use AI, automation, and software engineering to streamline operations,
              unlock insights, and drive measurable outcomes for our clients.
            </p>

            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              Named after the ancient paradox — just as the Ship of Theseus evolves while retaining
              its essence — we help organizations transform continuously without losing what makes
              them distinctive. Our team brings together expertise from MIT, top-tier financial
              institutions, and leading technology companies.
            </p>

            {/* Philosophy quote */}
            <div className="glass-card rounded-2xl p-5 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 relative">
              <Quote size={20} className="text-violet-400 mb-2 opacity-60" />
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 italic leading-relaxed">
                "We believe the most powerful technology is invisible — it disappears into human workflow,
                making people more capable without complexity."
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-3 font-medium">— Theseus Group</p>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-violet-500 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50">
                      {stat.value}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Row 2: The Founder ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Founder Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-700">
            <img
              src="/founder.png"
              alt="Adis Ojeda — Founder of Theseus Group"
              className="w-full h-[420px] object-cover object-top"
            />
            {/* gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">The Founder</span>
            </div>
          </div>

          {/* Founder Bio */}
          <div className="space-y-5">
            <div>
              <span className="section-label">Meet the Team</span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3 mb-2">
                Adis Ojeda
              </h3>
              <p className="text-violet-500 dark:text-violet-400 font-semibold text-sm tracking-wide">
                Founder & CEO
              </p>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              Adis is a MIT EECS graduate and the creator of <span className="text-zinc-900 dark:text-zinc-100 font-semibold">DeepMoji</span> at the MIT Media Lab — an influential NLP model
              that became one of the world's first large-scale emotion classification systems.
            </p>

            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              Before founding Theseus Group, Adis worked as an investment banking technologist,
              bridging the worlds of high-performance software and financial systems. He founded
              Theseus to bring that same rigor and innovation to organizations across every sector.
            </p>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['MIT EECS', 'DeepMoji Creator', 'Investment Banking', 'AI Research', 'AWS Activate', 'NVIDIA Inception'].map(tag => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Row 3: Inspiration ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Inspiration text — left on desktop */}
          <div className="space-y-5 order-2 lg:order-1">
            <div>
              <span className="section-label">The Name</span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3 mb-2">
                Our Inspiration
              </h3>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              The <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Ship of Theseus</span> is
              one of philosophy's oldest thought experiments: if a ship has every plank gradually replaced,
              is it still the same ship?
            </p>

            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              We chose this as our namesake because it captures exactly what we do for our clients —
              we modernize, upgrade, and evolve their technology systems piece by piece,
              ensuring they remain competitive without ever losing the core identity
              that makes their business unique.
            </p>

            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Constant evolution. Enduring identity.</span> That
              is the Theseus philosophy.
            </p>
          </div>

          {/* Inspiration Image — right on desktop */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-700 order-1 lg:order-2">
            <img
              src="/inspiration.png"
              alt="Ship of Theseus — Theseus Group inspiration"
              className="w-full h-[380px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Ship of Theseus</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

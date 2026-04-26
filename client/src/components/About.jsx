import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Users, Target } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Projects Delivered', icon: Target },
  { value: '$200B+', label: 'Client AUM Served', icon: Cpu },
  { value: '5+', label: 'Years Experience', icon: GraduationCap },
  { value: '10+', label: 'Satisfied Clients', icon: Users },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Our Story</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3">
            About Us
          </h2>
        </motion.div>

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

            <div className="glass-card rounded-2xl p-5 space-y-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400">
                Founder
              </p>
              <p className="text-base font-bold text-zinc-900 dark:text-zinc-50">Adis Ojeda</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                MIT EECS · Creator of DeepMoji at MIT Media Lab · Former investment banking technologist
              </p>
            </div>
          </motion.div>

          {/* Right: Stats */}
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

            {/* Philosophy card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="col-span-2 glass-card rounded-2xl p-6 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5"
            >
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                "We believe the most powerful technology is invisible — it disappears into human workflow,
                making people more capable without complexity."
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-3 font-medium">— Theseus Group</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

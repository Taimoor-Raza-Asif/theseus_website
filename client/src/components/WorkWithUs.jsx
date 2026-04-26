import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function WorkWithUs() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden bg-zinc-950 dark:bg-zinc-900 border border-zinc-800"
        >
          {/* Background mesh */}
          <div className="absolute inset-0 mesh-gradient opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-transparent to-fuchsia-950/30" />

          {/* Glow orbs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl" />

          <div className="relative z-10 py-20 px-8 sm:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6"
            >
              <Zap size={12} className="text-violet-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                Let's Build Together
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl font-black tracking-tighter text-white mb-6 leading-[0.95]"
            >
              Work with us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10"
            >
              We believe that together, we can help you stay ahead of innovation with agile,
              future-proof technology solutions.{' '}
              <span className="text-white font-medium">Let us show you a few for free.</span>
            </motion.p>

            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-white text-zinc-950 hover:bg-zinc-100 transition-colors shadow-lg shadow-white/10"
            >
              Schedule a Call
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

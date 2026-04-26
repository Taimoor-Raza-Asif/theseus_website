import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AllServicesPage() {
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
          className="mb-12"
        >
          <span className="section-label">What We Do</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3 mb-4">
            All Services
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-lg">
            Our full range of technology services — from AI development to enterprise cloud migrations, built to future-proof your business.
          </p>
        </motion.div>

        {/* Full uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 glass-card rounded-3xl p-10 text-center bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5"
        >
          <h2 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-3">
            Need something custom?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6 max-w-sm mx-auto">
            Every project is unique. Let's build a solution tailored to your exact needs.
          </p>
          <Link
            to="/"
            onClick={() => setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}
            className="btn-primary"
          >
            Schedule a Free Call
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

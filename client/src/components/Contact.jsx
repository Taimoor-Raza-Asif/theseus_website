import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail, Phone, Globe, MessageSquare } from 'lucide-react';
import axios from 'axios';

const REASONS = [
  'Cloud Migration',
  'AI & ML Development',
  'CI/CD & DevOps',
  'Data Engineering',
  'Security & Compliance',
  'Architecture Consulting',
  'Other',
];

const COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
  'India', 'Singapore', 'UAE', 'Ethiopia', 'Kenya', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ email: '', country: '', phone: '', reason: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ email: '', country: '', phone: '', reason: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm font-medium 
    bg-zinc-50 dark:bg-zinc-800/60 
    border-zinc-200 dark:border-zinc-700 
    text-zinc-900 dark:text-zinc-50 
    placeholder-zinc-400 dark:placeholder-zinc-500
    focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/60
    transition-all duration-200`;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mt-3 mb-4">
                Contact Us
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-sm">
                Ready to advance your technology? Tell us about your project and we'll get back to
                you within one business day.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'hello@adaptwith.us' },
                { icon: Globe, label: 'Website', value: 'adaptwith.us' },
                { icon: MessageSquare, label: 'Response Time', value: 'Within 24 hours' },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-violet-500 dark:text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Supported By */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-5">Supported By</p>
              <div className="flex flex-col gap-4">
                {/* AWS Activate */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img src="/aws_logo.png" alt="AWS" className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">AWS Activate</span>
                </div>
                {/* Microsoft for Startups */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img src="/Azure_logo.jpg" alt="Azure" className="max-h-full max-w-full object-contain rounded" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Microsoft for Startups</span>
                </div>
                {/* NVIDIA Inception */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img src="/nvidia_logo.png" alt="NVIDIA" className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">NVIDIA Inception</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Message Sent!</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      We'll get back to you within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary mt-2"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                      Schedule a Free Consultation
                    </h3>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Country */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5">
                          Country
                        </label>
                        <select
                          id="contact-country"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select...</option>
                          {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5">
                          Phone
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5">
                        How can we help? *
                      </label>
                      <select
                        id="contact-reason"
                        name="reason"
                        required
                        value={form.reason}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a service...</option>
                        {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your project..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 rounded-xl px-4 py-3">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <motion.button
                      id="contact-submit"
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Send Message
                        </span>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

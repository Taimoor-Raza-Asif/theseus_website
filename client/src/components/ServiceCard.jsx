import { motion } from 'framer-motion';
import { serviceThumbnails } from '../data/services';

// Thumbnail area — 130px tall with logo or icon+glow
function ServiceThumbnail({ service }) {
  const thumb = serviceThumbnails[service.id];
  const Icon = service.icon;

  return (
    <div className={`w-full h-full relative overflow-hidden flex flex-col items-center justify-center gap-2 ${thumb.bgClass}`}>
      {/* Glow blob */}
      {thumb.glowColor && (
        <div
          className="absolute inset-0 opacity-25"
          style={{ background: `radial-gradient(circle at 50% 65%, ${thumb.glowColor}60 0%, transparent 65%)` }}
        />
      )}

      {thumb.renderLogos ? (
        /* Real logo(s) */
        <div className="flex items-center justify-center gap-4 relative z-10 flex-wrap px-4">
          {thumb.logos.map(logo => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.h} w-auto object-contain drop-shadow-md`}
            />
          ))}
        </div>
      ) : (
        /* Lucide icon with glow ring */
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 shadow-lg"
          style={{
            backgroundColor: `${thumb.iconColor}18`,
            border: `1.5px solid ${thumb.iconColor}35`,
          }}
        >
          <Icon size={26} style={{ color: thumb.iconColor }} />
        </div>
      )}

      {/* Label */}
      <p
        className="text-[11px] font-semibold relative z-10 text-center px-3 leading-tight"
        style={{ color: thumb.labelColor, textShadow: thumb.bgClass.includes('dark') || thumb.bgClass.includes('1C06') || thumb.bgClass.includes('1A0A') ? '0 1px 4px rgba(0,0,0,0.6)' : 'none' }}
      >
        {thumb.label}
      </p>

      {/* Bottom chevron */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="w-6 h-3" style={{ background: 'var(--bg)', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
      </div>
    </div>
  );
}

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -14, boxShadow: '0 32px 64px rgba(0,0,0,0.18)' }}
      className={`
        glass-card rounded-2xl overflow-hidden flex flex-col cursor-default group
        h-[360px] w-full
        ring-1 ring-transparent
        hover:ring-violet-400/50 dark:hover:ring-violet-500/40
        transition-[box-shadow,ring-color] duration-300
      `}
    >
      {/* Thumbnail — 130px */}
      <div className="h-[130px] flex-shrink-0 relative">
        <ServiceThumbnail service={service} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3 overflow-hidden">
        {/* Icon badge + Title */}
        <div className="flex items-start gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5`}
            style={{ backgroundColor: `${service.iconColor}15`, border: `1px solid ${service.iconColor}25` }}
          >
            <Icon size={17} style={{ color: service.iconColor }} />
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 leading-snug line-clamp-2 flex-1">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-4 flex-1">
          {service.description}
        </p>

        {/* Animated accent bar */}
        <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-500`} />
      </div>
    </motion.div>
  );
}

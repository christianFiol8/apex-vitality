"use client"
export default function Footer() {
  return (
    <footer className="bg-cream border-t-2 border-dark py-10 md:py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

        <span className="font-anton text-primary text-xl uppercase tracking-tight">
          APEX VITALITY
        </span>

        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/erickxrom?igsh=MTJ2NGs0c3F-ta2QzaQ==" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary transition-colors duration-200" aria-label="Instagram">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2.163c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.368.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.01 3.057.06 4.123c.167 3.632 2.18 5.65 5.817 5.817C6.944 19.99 7.284 20 10 20s3.057-.01 4.122-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.062-1.407.062-4.123s-.011-3.056-.06-4.122C19.775 2.249 17.76.228 14.122.061 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
            </svg>
          </a>
        </div>

        <p className="font-hanken text-dark/70 text-sm md:text-base tracking-widest uppercase text-center md:text-right">
          © 2026 APEX VITALITY | DESIGNED BY AVENOR STUDIO
        </p>

      </div>
    </footer>
  )
}
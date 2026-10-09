import React from 'react';
import { StudioLogo } from './StudioLogo';
import { SALON_INFO } from '../data/services';
import { MapPin, Calendar, Search, Sparkles, MessageCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="estudio" className="relative min-h-screen pt-28 pb-20 flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden bg-radial from-[#181818] via-[#080808] to-[#030303]">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#D6001C]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* The Studio Logo */}
        <div className="mb-6 animate-fade-in">
          <StudioLogo size={220} showText={false} />
        </div>

        {/* Tagline specified by user: ESTUDIO EXCLUSIVO • DESDE 2016 */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D4AF37]/30 bg-[#120f06]/70 mb-5">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-medium">
            {SALON_INFO.tagline}
          </span>
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
        </div>

        {/* Main Title: CELIA FIGUEREDO */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-light tracking-[0.15em] uppercase text-stone-100 mb-6 drop-shadow-[0_2px_15px_rgba(212,175,55,0.25)]">
          <span className="gold-gradient-text block">CELIA FIGUEREDO</span>
        </h1>

        {/* Studio Manifest specified by user:
            "Un espacio donde la precisión, la experiencia y el cuidado se encuentran para crear una versión de vos que te represente." */}
        <p className="text-base sm:text-lg md:text-xl font-serif-luxury text-[#e0e0e0] italic max-w-2xl mx-auto leading-relaxed mb-6 font-light">
          "{SALON_INFO.slogan}"
        </p>

        {/* Address specified by user:
            "Av. Santa Fe 2450, Local 47, 1.er piso.
             Galería Americana • Esquina Av. Pueyrredón. Recoleta" */}
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#D4AF37] tracking-wider mb-10 max-w-xl mx-auto bg-[#0d0d0d]/80 border border-[#222] py-2.5 px-5 rounded-full">
          <MapPin className="w-4 h-4 text-[#D6001C] flex-shrink-0" />
          <span className="text-stone-300">
            {SALON_INFO.address.street} • {SALON_INFO.address.reference} • Recoleta
          </span>
        </div>

        {/* Primary Dual CTA Buttons: Siempre uno al lado del otro, mismo tamaño */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg mx-auto">
          {/* Botón 1: Turnos online (Rojo) */}
          <a
            href="#reservar"
            className="w-full py-3.5 sm:py-4 px-3 sm:px-6 bg-[#D6001C] hover:bg-[#b00017] text-white text-center text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest font-semibold transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(214,0,28,0.45)] hover:shadow-[0_0_30px_rgba(214,0,28,0.65)] hover:-translate-y-0.5 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Turnos online</span>
          </a>

          {/* Botón 2: Watsapp directo (Verde) */}
          <a
            href={`https://wa.me/${SALON_INFO.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 sm:py-4 px-3 sm:px-6 bg-[#25D366] hover:bg-[#20ba59] text-black text-center text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest font-semibold transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-0.5 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 flex-shrink-0 fill-black text-black" />
            <span className="truncate">Watsapp directo</span>
          </a>
        </div>

        {/* Link to consult existing appointments */}
        <div className="mt-5">
          <a
            href="#mis-turnos"
            className="inline-flex items-center gap-1.5 text-xs text-[#a0a0a0] hover:text-[#D4AF37] transition-colors tracking-wider"
          >
            <Search className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>¿Ya tenés turno? Consultar o reprogramar mi reserva</span>
          </a>
        </div>
      </div>
    </section>
  );
};

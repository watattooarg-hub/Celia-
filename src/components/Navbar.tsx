import React, { useState } from 'react';
import { SALON_INFO } from '../data/services';
import { MessageCircle, Menu, X, Calendar, Instagram, ExternalLink, MapPin, HelpCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#1c1c1c]/90 transition-all">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href={SALON_INFO.websiteUrl} className="flex items-center gap-3 group">
          <img
            src={SALON_INFO.logoUrl}
            alt="Studio Celia Figueredo"
            className="w-10 h-10 object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="font-serif-luxury text-lg md:text-xl tracking-[0.25em] text-[#D4AF37] uppercase group-hover:text-[#f1d592] transition-colors block leading-tight">
              CELIA FIGUEREDO
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#777] font-light block">
              Atelier Recoleta
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-light">
          {/* El Estudio -> https://celiafigueredo.com.ar */}
          <a
            href={SALON_INFO.websiteUrl}
            className="text-[#a0a0a0] hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
          >
            <span>El Estudio</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
          </a>

          {/* Servicios -> https://celiafigueredo.com.ar/#servicios */}
          <a
            href={SALON_INFO.websiteServicesUrl}
            className="text-[#a0a0a0] hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
          >
            <span>Servicios</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
          </a>

          {/* Ubicación -> Google Maps */}
          <a
            href={SALON_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0a0] hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
          >
            <span>Ubicación</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
          </a>

          {/* Preguntas -> https://celiafigueredo.com.ar/preguntas */}
          <a
            href={SALON_INFO.websiteFaqUrl}
            className="text-[#a0a0a0] hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
          >
            <span>Preguntas</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
          </a>

          {/* Mis Turnos -> Internal section */}
          <a
            href="#mis-turnos"
            className="text-[#a0a0a0] hover:text-[#D4AF37] transition-colors"
          >
            Mis Turnos
          </a>
        </div>

        {/* Desktop CTA: Dos botones siempre uno al lado del otro con el mismo tamaño */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Botón 1: Turnos online (Rojo) */}
          <a
            href="#reservar"
            className="py-2.5 px-3.5 bg-[#D6001C] hover:bg-[#b00017] text-white text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 rounded-sm flex items-center gap-1.5 shadow-[0_0_12px_rgba(214,0,28,0.4)]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Turnos online</span>
          </a>

          {/* Botón 2: Watsapp directo (Verde) */}
          <a
            href={`https://wa.me/${SALON_INFO.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 rounded-sm flex items-center gap-1.5 shadow-[0_0_12px_rgba(37,211,102,0.4)]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black text-black" />
            <span>Watsapp directo</span>
          </a>

          {/* Instagram icon */}
          <a
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Oficial @studioceliabelleza"
            className="p-2 text-[#a0a0a0] hover:text-[#D4AF37] hover:bg-[#141414] border border-transparent hover:border-[#333] rounded transition-all ml-1"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#D4AF37] p-2 hover:bg-[#111] rounded cursor-pointer"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-[#222] px-6 py-6 space-y-4 animate-fade-in text-xs uppercase tracking-[0.2em]">
          <a
            href={SALON_INFO.websiteUrl}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#a0a0a0] hover:text-[#D4AF37] py-2 border-b border-[#181818]"
          >
            <span>El Estudio</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#555]" />
          </a>
          <a
            href={SALON_INFO.websiteServicesUrl}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#a0a0a0] hover:text-[#D4AF37] py-2 border-b border-[#181818]"
          >
            <span>Servicios</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#555]" />
          </a>
          <a
            href={SALON_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#a0a0a0] hover:text-[#D4AF37] py-2 border-b border-[#181818]"
          >
            <span>Ubicación (Google Maps)</span>
            <MapPin className="w-3.5 h-3.5 text-[#D6001C]" />
          </a>
          <a
            href={SALON_INFO.websiteFaqUrl}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#a0a0a0] hover:text-[#D4AF37] py-2 border-b border-[#181818]"
          >
            <span>Preguntas Frecuentes</span>
            <HelpCircle className="w-3.5 h-3.5 text-[#555]" />
          </a>
          <a
            href="#mis-turnos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#a0a0a0] hover:text-[#D4AF37] py-2 border-b border-[#181818]"
          >
            Consultar Mis Turnos
          </a>

          {/* Social links row */}
          <div className="flex gap-3 py-2">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 bg-[#111] border border-[#262626] rounded text-stone-300 flex items-center justify-center gap-2 text-[10px]"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Instagram</span>
            </a>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 bg-[#111] border border-[#262626] rounded text-stone-300 flex items-center justify-center gap-2 text-[10px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Action buttons row: Turnos online y Watsapp directo */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <a
              href="#reservar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 bg-[#D6001C] hover:bg-[#b00017] text-white text-center rounded text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(214,0,28,0.4)]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Turnos online</span>
            </a>

            <a
              href={`https://wa.me/${SALON_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 bg-[#25D366] hover:bg-[#20ba59] text-black text-center rounded text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black text-black" />
              <span>Watsapp directo</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

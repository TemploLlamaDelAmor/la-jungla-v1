"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isWhiteNavbar = scrolled || !isHome;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isWhiteNavbar ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          
          {/* Flecha izquierda */}
          <div className="w-8 flex items-center">
            {!isHome && (
              <button
                onClick={() => router.back()}
                className={`transition ${
                  isWhiteNavbar ? "text-gray-800" : "text-white"
                }`}
                aria-label="Volver"
              >
                <ArrowLeft size={26} />
              </button>
            )}
          </div>

          {/* Logo centrado */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logos/la-jungla-encantada-2.png"
              alt="La Jungla Encantada"
              width={160}
              height={60}
              className="h-17 w-auto"
              priority
            />
          </Link>
        </div>
      </nav>

      {/* BOTÓN HAMBURGUESA */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-6 right-6 z-[60] transition-transform duration-300 ${
          isWhiteNavbar || open ? "text-gray-800" : "text-white"
        }`}
        aria-label="Menú"
      >
        <Menu
          size={30}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MENÚ LATERAL */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-24 px-8 gap-8 text-lg font-semibold text-gray-800">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-500 transition">
            Inicio
          </Link>

          <Link href="/servicios" onClick={() => setOpen(false)} className="hover:text-cyan-500 transition">
            Catálogo
          </Link>

          <Link href="/sobre-nosotros" onClick={() => setOpen(false)} className="hover:text-cyan-500 transition">
            Sobre Nosotros
          </Link>

          <Link href="/testimonios" onClick={() => setOpen(false)} className="hover:text-cyan-500 transition">
            Testimonios
          </Link>

          <Link href="/contacto" onClick={() => setOpen(false)} className="hover:text-cyan-500 transition">
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const menuRef = useRef(null);

  const toggleSubMenu = (menu) => {
    setSubMenuOpen((prev) => (prev === menu ? null : menu));
  };

  // Fonction pour gérer les clics en dehors du menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
      setSubMenuOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Définition des animations avec framer-motion
  const dropdownVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } }
  };

  return (
    <div ref={menuRef} className="bg-black text-white p-3 flex items-center justify-between relative z-20">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold hover:text-[#6A5ACD] transition">
        FrozenHost
      </Link>

      {/* Main Menu for large screens */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
        {/* Services de Jeux Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleSubMenu("games")}
            className="flex items-center space-x-1 hover:text-[#6A5ACD] transition"
          >
            <span className="material-icons">sports_esports</span>
            <span>SERVICES DE JEUX</span>
          </button>
          <motion.div
            initial="closed"
            animate={subMenuOpen === "games" ? "open" : "closed"}
            variants={dropdownVariants}
            className="absolute left-0 mt-2 bg-gray-900 text-white rounded shadow-lg overflow-hidden w-48"
          >
            <Link href="/fivem/FiveM" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <img src="/fivem.jpg" alt="GTA 5 Logo" className="w-6 h-6" />
              <span>FiveM</span>
            </Link>
            <Link href="/minecraft/Minecraft" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <img src="/minecraft.png" alt="Minecraft Logo" className="w-6 h-6" />
              <span>Minecraft</span>
            </Link>
            <Link href="/autres/autres" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <img src="/gmod.png" alt="Garry's Mod Logo" className="w-6 h-6" />
              <span>Garry's Mod</span>
            </Link>
          </motion.div>
        </div>

        {/* VPS Cloud Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleSubMenu("vps")}
            className="flex items-center space-x-1 hover:text-[#6A5ACD] transition"
          >
            <span className="material-icons">cloud</span>
            <span>VPS CLOUD</span>
          </button>
          <motion.div
            initial="closed"
            animate={subMenuOpen === "vps" ? "open" : "closed"}
            variants={dropdownVariants}
            className="absolute left-0 mt-2 bg-gray-900 text-white rounded shadow-lg overflow-hidden w-48"
          >
            <Link href="/vps/vpslinux" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ubuntu" viewBox="0 0 16 16">
                <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546M7.4 13.108a5.54 5.54 0 0 1-3.775-2.88 3.27 3.27 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.25 3.25 0 0 1-.666-1.9 6 6 0 0 1-.557-.091m3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546m3.163-3.108a7.44 7.44 0 0 0 .373-8.726 3.3 3.3 0 0 1-1.278 1.498 5.57 5.57 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693M2.098 3.998a3.3 3.3 0 0 1 1.897.486 5.54 5.54 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.47 7.47 0 0 0-7.051 3.745" />
              </svg>
              <span>VPS Linux</span>
            </Link>
            <Link href="/vps/vpswindows" className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
                <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z" />
              </svg>
              <span>VPS Windows</span>
            </Link>

          </motion.div>
        </div>

        <Link href="/autres/autres" className="flex items-center space-x-1 hover:text-[#6A5ACD] transition">
          <span className="material-icons">dns</span>
          <span>AUTRES SERVICES</span>
        </Link>
      </div>

      {/* Espace Client Button */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="https://client.frozenhost.fr/login">
          <button className="bg-[#6A5ACD] flex items-center justify-center space-x-2 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
            <span className="material-icons text-white">person</span>
            <span>Espace Client</span>
          </button>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="flex md:hidden focus:outline-none">
        <span className="material-icons text-3xl">menu</span>
      </button>

      {/* Mobile dropdown with slide-in animation */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-75 text-white flex flex-col items-center space-y-4 py-4 z-50"
      >
        <Link href="/fivem/FiveM" onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
          <img src="/fivem.jpg" alt="GTA 5 Logo" className="w-6 h-6" />
          <span>FiveM</span>
        </Link>
        <Link href="/minecraft/Minecraft" onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
          <img src="/minecraft.png" alt="Minecraft Logo" className="w-6 h-6" />
          <span>Minecraft</span>
        </Link>

        <Link href="/autres/autres" onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-2 hover:bg-[#6A5ACD] space-x-2">
          <img src="/gmod.png" alt="Garry's Mod Logo" className="w-6 h-6" />
          <span>Garry's Mod</span>
        </Link>
        <Link href="/vps/vpswindows" className="block px-4 py-2 hover:bg-[#6A5ACD]">VPS Windows</Link>
        <Link href="/vps/vpslinux" className="block px-4 py-2 hover:bg-[#6A5ACD]">VPS Linux</Link>
        <Link href="/autres/autres" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-[#6A5ACD]">AUTRES SERVICES</Link>
        <Link href="https://client.frozenhost.fr/login" onClick={() => setMenuOpen(false)}>
          <button className="bg-[#6A5ACD] w-full text-center py-2 rounded-full shadow-lg text-white hover:bg-blue-700 transition transform hover:scale-105">
            Espace Client
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

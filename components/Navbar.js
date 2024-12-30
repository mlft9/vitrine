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
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      ref={menuRef}
      className="bg-gray-900 text-white-300 p-4 shadow-md sticky top-0 z-30"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wider text-white hover:text-cyan-300 transition duration-300"
        >
          FrozenHost
        </Link>

        {/* Main Menu for large screens */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Services de Jeux Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleSubMenu("games")}
              className="text-lg font-medium flex items-center space-x-2 hover:text-cyan transition"
            >
              <span className="material-icons">sports_esports</span>
              <span>SERVICES DE JEUX</span>
            </button>
            {subMenuOpen === "games" && (
              <motion.div
                initial="closed"
                animate="open"
                variants={dropdownVariants}
                className="absolute left-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden w-48"
              >
                <Link
                  href="/fivem/FiveM"
                  className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
                >
                  <img src="/fivem.jpg" alt="FiveM" className="w-6 h-6" />
                  <span>FiveM</span>
                </Link>
                <Link
                  href="/minecraft/Minecraft"
                  className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
                >
                  <img
                    src="/minecraft.png"
                    alt="Minecraft"
                    className="w-6 h-6"
                  />
                  <span>Minecraft</span>
                </Link>
                <Link
                  href="/autres/autres"
                  className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
                >
                  <img src="/gmod.png" alt="Garry's Mod" className="w-6 h-6" />
                  <span>Garry's Mod</span>
                </Link>
              </motion.div>
            )}
          </div>

          {/* VPS Cloud Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleSubMenu("vps")}
              className="text-lg font-medium flex items-center space-x-2 hover:text-white transition"
            >
              <span className="material-icons">cloud</span>
              <span>VPS CLOUD</span>
            </button>
            {subMenuOpen === "vps" && (
              <motion.div
                initial="closed"
                animate="open"
                variants={dropdownVariants}
                className="absolute left-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden w-48"
              >
                <Link
                  href="/vps/vpslinux"
                  className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
                >
                  <img src="/linux.png" alt="Linux VPS" className="w-6 h-6" />
                  <span>VPS Linux</span>
                </Link>
                <Link
                  href="/vps/vpswindows"
                  className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
                >
                  <img
                    src="/windows.png"
                    alt="Windows VPS"
                    className="w-6 h-6"
                  />
                  <span>VPS Windows</span>
                </Link>
              </motion.div>
            )}
          </div>

          <Link
            href="/autres/autres"
            className="text-lg font-medium hover:text-white transition flex items-center space-x-2"
          >
            <span className="material-icons">dns</span>
            <span>AUTRES SERVICES</span>
          </Link>
        </div>

        {/* Espace Client Button */}
        <div className="hidden md:flex items-center">
          <Link href="https://client.frozenhost.fr/login">
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-cyan-700 transition flex items-center space-x-2">
              <span className="material-icons">person</span>
              <span>Espace Client</span>
            </button>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cyan-300 text-2xl focus:outline-none"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Mobile dropdown with slide-in animation */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col space-y-4 py-8 z-50"
      >
        <Link
          href="/fivem/FiveM"
          onClick={() => setMenuOpen(false)}
          className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
        >
          <img src="/fivem.jpg" alt="FiveM" className="w-6 h-6" />
          <span>FiveM</span>
        </Link>
        <Link
          href="/minecraft/Minecraft"
          onClick={() => setMenuOpen(false)}
          className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
        >
          <img src="/minecraft.png" alt="Minecraft" className="w-6 h-6" />
          <span>Minecraft</span>
        </Link>
        <Link
          href="/autres/autres"
          onClick={() => setMenuOpen(false)}
          className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
        >
          <img src="/gmod.png" alt="Garry's Mod" className="w-6 h-6" />
          <span>Garry's Mod</span>
        </Link>
        <Link
          href="/vps/vpslinux"
          onClick={() => setMenuOpen(false)}
          className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
        >
          <img src="/linux.png" alt="Linux VPS" className="w-6 h-6" />
          <span>VPS Linux</span>
        </Link>
        <Link
          href="/vps/vpswindows"
          onClick={() => setMenuOpen(false)}
          className="block px-4 py-2 hover:bg-cyan-700 transition flex items-center space-x-2"
        >
          <img src="/windows.png" alt="Windows VPS" className="w-6 h-6" />
          <span>VPS Windows</span>
        </Link>
        <Link
          href="https://client.frozenhost.fr/login"
          onClick={() => setMenuOpen(false)}
        >
          <button className="bg-cyan-600 w-full py-2 rounded-full shadow-lg text-white hover:bg-cyan-700 transition flex items-center justify-center space-x-2">
            <span className="material-icons">person</span>
            <span>Espace Client</span>
          </button>
        </Link>
      </motion.div>
    </nav>
  );
}

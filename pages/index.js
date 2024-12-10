import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Head from 'next/head';
import { Typewriter } from 'react-simple-typewriter';

const texts = [
  "L'avenir du cloud commence avec vous.",
  "Optimisez vos projets avec une infrastructure cloud puissante.",
  "Fiabilité, sécurité, et innovation à chaque étape.",
  "Un cloud pensé pour les créateurs d'aujourd'hui et de demain.",
  "Le cloud n'a jamais été aussi simple et performant.",
  "Connectez-vous à l'avenir avec FrozenHost.",
  "Sécurité renforcée, performances inégalées.",
  "Transformez vos idées en réalité avec une infrastructure flexible.",
  "Votre potentiel, notre cloud.",
  "Prêt à repousser les limites du cloud computing ?",
  "Puissance et sécurité, au service de votre réussite.",
  "Un cloud qui s'adapte à vos besoins, en toute confiance.",
  "Accélérez votre croissance avec une infrastructure évolutive.",
  "Innovation, performance, et simplicité en un seul service.",
  "Le cloud qui propulse vos projets vers l'infini."
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-200 overflow-hidden">
      {/* Effet d'animation en arrière-plan couvrant toute la page */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-80 h-80 bg-indigo-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-400 opacity-25 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <Head>
        <title>FrozenHost - Hébergement</title>
        <meta name="description" content="Découvrez FrozenHost : une infrastructure cloud fiable, sécurisée et innovante pour soutenir vos projets et propulser vos idées." />
        <meta name="keywords" content="cloud, hébergement, infrastructure, innovation, sécurité, performance, xateox, unishadow, exoevel, aCollective, hébergeur français, hébergeur game, hébergeur Minecraft, hébergeur FiveM, hébergeur VPS" />
        <meta name="author" content="FrozenHost" />
      </Head>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Section de bannière */}
      <div className="bg-transparent flex flex-col items-center justify-center h-screen text-center px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bienvenue sur <span className="text-white">FrozenHost</span>
        </h1>

        <div className="text-lg md:text-xl mb-8 max-w-lg text-gray-200 min-h-[60px] flex items-center justify-center">
          <Typewriter
            words={texts}
            loop={true} // ou false si tu veux qu'il s'arrête après une boucle
            typeSpeed={70} // vitesse de frappe
            deleteSpeed={50} // vitesse d'effacement
            delaySpeed={1000} // délai avant de recommencer
          />
        </div>

        <Link to="offersSection" smooth={true} duration={800}>
          <button
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Découvrir nos services"
          >
            Découvrir nos services
          </button>
        </Link>
      </div>

      {/* Section à propos */}
      <div id="aboutUs" className="py-20 px-4 bg-transparent text-gray-200 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">À propos de nous</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Chez FrozenHost, nous nous engageons à offrir une infrastructure cloud fiable et innovante qui soutient les créateurs et les entreprises de toutes tailles. Notre mission est de rendre le cloud plus accessible, sécurisé et performant, tout en mettant l'accent sur l'expérience utilisateur.
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            Grâce à notre expertise et à notre passion pour la technologie, nous développons des solutions adaptées aux besoins modernes, propulsant vos projets vers de nouveaux sommets.
          </p>
        </div>
      </div>

      {/* Section des offres */}
      <div id="offersSection" className="py-20 px-4 bg-transparent text-gray-200 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">Nos Offres</h2>
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 h-48 flex-shrink-0 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-6">
              <img
                src="/fivem.jpg"
                alt="Hébergement FiveM"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-gray-300">Découvrez nos offres d'hébergement FiveM</h3>
              <p className="text-gray-400 mb-4">
              FrozenHost propose des solutions d'hébergement optimisées pour vos serveurs FiveM, garantissant des performances élevées, une sécurité renforcée et une gestion simplifiée. Que vous soyez débutant ou expert, nos offres sont conçues pour s'adapter à vos besoins et propulser votre communauté vers de nouveaux sommets. Découvrez comment notre infrastructure peut transformer votre expérience FiveM.
              </p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                <a href="/fivem/FiveM" aria-label="En savoir plus sur l'offre FiveM">En savoir plus</a>
              </button>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 h-48 flex-shrink-0 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-6">
              <img
                src="/minecraft.png"
                alt="Hébergement Minecraft"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-gray-300">Découvrez nos offres d'hébergement Minecraft</h3>
              <p className="text-gray-400 mb-4">
                Plongez dans l'univers de Minecraft avec nos offres d'hébergement sur mesure, conçues pour offrir des performances optimales, une stabilité inébranlable et une gestion simplifiée. Que vous souhaitiez créer un serveur survie entre amis, lancer une communauté multijoueur ou expérimenter avec des mods et plugins personnalisés, FrozenHost vous offre une infrastructure robuste adaptée à tous vos projets. Bâtissez, explorez et collaborez en toute tranquillité grâce à notre hébergement sécurisé et à faible latence. Faites de vos aventures Minecraft une expérience fluide et mémorable.
              </p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
              <a href="/minecraft/Minecraft" aria-label="En savoir plus sur l'offre Minecraft">En savoir plus</a>
              </button>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 h-48 flex-shrink-0 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-6">
              <img
                src="/vpscloud.png"
                alt="Image de l'offre 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-gray-300">Découvrez nos offres de VPS Cloud</h3>
              <p className="text-gray-400 mb-4">Profitez de la puissance et de la flexibilité de nos VPS cloud, conçus pour répondre aux besoins des particuliers et des entreprises. Avec FrozenHost, vous bénéficiez d'une infrastructure moderne, d'une évolutivité sans précédent et d'une sécurité avancée. Nos VPS cloud offrent des performances optimisées pour héberger des sites web, des applications, des bases de données et bien plus, le tout avec une disponibilité garantie et un support technique réactif. Découvrez comment nos solutions cloud peuvent vous aider à développer et à gérer vos projets en toute sérénité.</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors" aria-label="En savoir plus sur l'offre 3">
              <a href="/vps/vpslinux" aria-label="En savoir plus sur les VPS Cloud">En savoir plus</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}

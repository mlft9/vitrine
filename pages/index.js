

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";

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
  "Le cloud qui propulse vos projets vers l'infini.",
];

const offers = [
  {
    imageSrc: "/fivem.jpg",
    title: "Découvrez nos offres d'hébergement FiveM",
    description:
      "FrozenHost propose des solutions d'hébergement optimisées pour vos serveurs FiveM, garantissant des performances élevées, une sécurité renforcée et une gestion simplifiée. Que vous soyez débutant ou expert, nos offres sont conçues pour s'adapter à vos besoins et propulser votre communauté vers de nouveaux sommets.",
    link: "/fivem/FiveM",
  },
  {
    imageSrc: "/minecraft.png",
    title: "Découvrez nos offres d'hébergement Minecraft",
    description:
      "Plongez dans l'univers de Minecraft avec nos offres d'hébergement sur mesure, conçues pour offrir des performances optimales, une stabilité inébranlable et une gestion simplifiée. Que vous souhaitiez créer un serveur survie entre amis, lancer une communauté multijoueur ou expérimenter avec des mods et plugins personnalisés, FrozenHost vous offre une infrastructure robuste adaptée à tous vos projets.",
    link: "/minecraft/Minecraft",
  },
  {
    imageSrc: "/vpscloud.png",
    title: "Découvrez nos offres de VPS Cloud",
    description:
      "Profitez de la puissance et de la flexibilité de nos VPS cloud, conçus pour répondre aux besoins des particuliers et des entreprises. Avec FrozenHost, vous bénéficiez d'une infrastructure moderne, d'une évolutivité sans précédent et d'une sécurité avancée.",
    link: "/vps/vpslinux",
  },
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
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 overflow-hidden">
      {/* Effet d'animation en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 opacity-20 rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 opacity-15 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <Head>
        <title>FrozenHost - Hébergement Cloud Performant</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="preload" href="/logo.png" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Découvrez FrozenHost : une infrastructure cloud fiable, sécurisée et innovante pour soutenir vos projets et propulser vos idées. Optez pour un hébergement performant et sécurisé à vos besoins."
        />
        <meta
          name="keywords"
          content="cloud, hébergement, infrastructure, innovation, sécurité, performance, frozenhost, unishadow, xateox, matheo, exoevel, vps, pas cher, fiable, jeux, serveur pas cher, location de serveurs, hébergement économique, serveur de jeux à petit prix, VPS haute performance, VPS pas cher, serveur dédié abordable, serveurs SSD pas cher, hébergement gaming pas cher, serveur Minecraft pas cher, serveur Rust pas cher, serveur ARK pas cher, serveur GTA RP, hébergement VPS France, meilleurs prix VPS, VPS low cost, serveur gaming pas cher, infrastructure économique, solutions VPS discount, offres hébergement abordables, VPS rapide et fiable, prix imbattables, serveur pas cher pour jeux, offres spéciales VPS, réduction VPS, hébergement en ligne pas cher, VPS rapide à petit prix, hébergement sécurisé et pas cher, qualité et prix compétitifs, VPS premium à prix réduit, support client inclus, VPS pas cher pour débutants, hébergement VPS 1€/mois, serveur dédié à petit budget, meilleur rapport qualité/prix VPS, serveur privé abordable, serveur performant et économique, service fiable et pas cher, location de serveur gaming low cost, hébergement pour jeux en ligne pas cher"        />
        <meta name="author" content="FrozenHost" />
        <meta property="og:title" content="FrozenHost - Hébergement cloud fiable et innovant" />
        <meta
          property="og:description"
          content="Découvrez FrozenHost : une infrastructure cloud fiable, sécurisée et innovante pour soutenir vos projets et propulser vos idées."
        />
        <meta property="og:image" content="https://frozenhost.fr/logo.png" />
        <meta property="og:url" content="https://frozenhost.fr/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "FrozenHost - Hébergement Cloud Performant",
            "description": "Découvrez une infrastructure cloud fiable, sécurisée et innovante.",
            "url": "https://frozenhost.fr/",
            "publisher": {
              "@type": "Organization",
              "name": "FrozenHost",
              "logo": {
                "@type": "ImageObject",
                "url": "https://frozenhost.fr/logo.png"
              }
            }
          }
        `}
        </script>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PXHHBV5K');
        ` }} />
      </Head>

      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXHHBV5K" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Section de bannière */}
      <div className="flex flex-col items-center justify-center h-screen text-center px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cyan-300">
          Bienvenue sur <span className="text-white">FrozenHost</span>
        </h1>

        <div
          className="text-lg md:text-xl mb-8 max-w-lg text-white-100 min-h-[60px] flex items-center justify-center"
          aria-live="polite"
        >
          <Typewriter
            words={texts}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        <Link href="#offersSection" aria-label="Découvrir nos services">
          <div
            className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-300"
          >
            Découvrir nos services
          </div>
        </Link>
      </div>

      {/* Section à propos */}
      <div
        id="aboutUs"
        className="py-20 px-4 bg-transparent text-white-200 relative z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-8">À propos de nous</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-white-300 mb-6">
            Chez FrozenHost, nous nous engageons à offrir une infrastructure
            cloud fiable et innovante qui soutient les créateurs et les
            entreprises de toutes tailles.
          </p>
          <p className="text-lg md:text-xl text-white-300">
            Grâce à notre expertise, nous développons des solutions adaptées aux
            besoins modernes, propulsant vos projets vers de nouveaux sommets.
          </p>
        </div>
      </div>

      {/* Section des offres */}
      <div
        id="offersSection"
        className="py-20 px-4 bg-transparent text-white-200 relative z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Nos Offres</h2>
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/3 h-64 flex-shrink-0 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-6">
                <img
                  src={offer.imageSrc}
                  alt={offer.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-white-300">
                  {offer.title}
                </h3>
                <p className="text-white-200 mb-4">{offer.description}</p>
                <Link href={offer.link} aria-label={`En savoir plus sur ${offer.title}`}>
                  <div
                    className="px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
                  >
                    En savoir plus
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}

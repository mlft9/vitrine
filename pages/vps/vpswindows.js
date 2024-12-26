import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaShieldAlt, FaMicrochip, FaDesktop, FaFolder, FaHeadset, FaCloud, FaNetworkWired, FaDatabase, FaMapMarkerAlt } from 'react-icons/fa';

const vpsOptions = [
  {
    id: 1,
    name: 'VPS Starter',
    price: '5.99€',
    description: 'Pour démarrer votre projet avec un VPS Cloud fiable et performant.',
    link: 'https://client.frozenhost.fr/store/basket/config/56',
    features: [
      { icon: <FaMicrochip />, text: '2 vCPU' },
      { icon: <FaDatabase />, text: '4 Go RAM DDR4 ECC' },
      { icon: <FaCloud />, text: '40 Go SSD' },
      { icon: <FaNetworkWired />, text: '1 Gbps Réseau' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
  {
    id: 2,
    name: 'VPS Boost',
    price: '10.99€',
    description: 'Une solution équilibrée pour vos besoins croissants.',
    link: 'https://client.frozenhost.fr/store/basket/config/57',
    features: [
      { icon: <FaMicrochip />, text: '4 vCPU' },
      { icon: <FaDatabase />, text: '8 Go RAM DDR4 ECC' },
      { icon: <FaCloud />, text: '80 Go SSD' },
      { icon: <FaNetworkWired />, text: '1 Gbps Réseau' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
  {
    id: 3,
    name: 'VPS Pro',
    price: '17.99€',
    description: 'Idéal pour des applications intensives et un trafic élevé.',
    link: 'https://client.frozenhost.fr/store/basket/config/58',
    features: [
      { icon: <FaMicrochip />, text: '6 vCPU' },
      { icon: <FaDatabase />, text: '12 Go RAM DDR4 ECC' },
      { icon: <FaCloud />, text: '120 Go SSD' },
      { icon: <FaNetworkWired />, text: '2 Gbps Réseau' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
  {
    id: 4,
    name: 'VPS Élite',
    price: '29.99€',
    description: 'Une infrastructure pour vos besoins d’entreprise les plus exigeants.',
    link: 'https://client.frozenhost.fr/store/basket/config/59',
    features: [
      { icon: <FaMicrochip />, text: '8 vCPU' },
      { icon: <FaDatabase />, text: '16 Go RAM DDR4 ECC' },
      { icon: <FaCloud />, text: '180 Go SSD' },
      { icon: <FaNetworkWired />, text: '10 Gbps Réseau' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
  {
    id: 5,
    name: 'VPS Ultra',
    price: '35.99€',
    description: 'Une infrastructure pour vos besoins d’entreprise les plus exigeants.',
    link: 'https://client.frozenhost.fr/store/basket/config/60',
    features: [
      { icon: <FaMicrochip />, text: '12 vCPU' },
      { icon: <FaDatabase />, text: '32 Go RAM DDR4 ECC' },
      { icon: <FaCloud />, text: '240 Go SSD' },
      { icon: <FaNetworkWired />, text: '10 Gbps Réseau' },
      { icon: <FaMapMarkerAlt />, text: 'Localisé en France' },
    ],
  },
];

const includedVpsFeatures = [
  { icon: <FaShieldAlt />, title: 'Anti-DDoS', description: 'Protection avancée contre les attaques DDoS.' },
  { icon: <FaDesktop />, title: 'Accès RDP', description: 'Profitez de votre machine à 100% grâce à votre accès RDP.' },
  { icon: <FaHeadset />, title: 'Support 24/7', description: 'Assistance professionnelle à toute heure.' },
];

export default function VPSCloud() {
  const [selectedProduct, setSelectedProduct] = useState(vpsOptions[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle('dark', darkModePreference);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Head>
        <title>Offres VPS Windows - FrozenHost</title>
      </Head>
      <Navbar />

      <motion.div
        className="relative bg-cover bg-center text-white py-32"
        style={{ backgroundImage: `url('/vpsbanner.png')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-2">VPS - Windows</h1>
          <p className="text-lg">Solutions VPS performantes pour vos projets Cloud en toute sécurité.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-center">Nos Offres VPS Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {vpsOptions.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`p-6 rounded-lg shadow-lg cursor-pointer ${selectedProduct.id === product.id ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-white'} hover:bg-indigo-500 transition`}
            >
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <motion.img
              src="/vpsw-product.png"
              alt="VPS Cloud Product"
              className="w-full h-auto rounded-lg shadow-lg max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-400 mb-6">{selectedProduct.description}</p>
            <p className="text-2xl font-semibold text-indigo-400 mb-4">{selectedProduct.price}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-indigo-400 text-lg">{feature.icon}</span>
                  <span className="text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>
            <a href={selectedProduct.link}>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105 mt-6">
                {selectedProduct.name === 'Serveur Sur-Mesure' ? 'Nous Contacter' : 'Acheter Maintenant'}
              </button>
            </a>
          </div>
        </div>

        <div className="bg-indigo-700 text-white py-12 mt-16">
          <h2 className="text-center text-3xl font-bold mb-6">Inclus avec votre VPS Windows</h2>
          <p className="text-indigo-300 text-center mb-8">
            Une infrastructure de pointe pour héberger vos applications en toute sérénité, avec des ressources fiables et sécurisées.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-16">
            {includedVpsFeatures.map((feature, index) => (
              <div key={index} className="bg-indigo-800 flex items-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-200">
                <span className="text-white text-3xl mr-4">{feature.icon}</span>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-indigo-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

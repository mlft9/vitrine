import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaShieldAlt, FaMicrochip, FaDesktop, FaFolder, FaHeadset, FaMemory, FaHdd, FaCloud, FaCube } from 'react-icons/fa';

const productOptions = [
  {
    id: 1,
    name: 'Minecraft - Essai 48h',
    price: 'Gratuit',
    description: 'Profitez d’un accès gratuit pendant 48 heures pour découvrir la qualité de nos services et tester votre serveur Minecraft.',
    link: 'https://client.frozenhost.fr/store/basket/config/35',
    features: [
      { icon: <FaMicrochip />, text: '2 cœurs' },
      { icon: <FaMemory />, text: '4 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '20 Go SSD' },
    ],
  },
  {
    id: 2,
    name: 'Minecraft - Développement',
    price: '4.99€',
    description: 'Parfait pour développer des serveurs Minecraft personnalisés avec les ressources nécessaires pour débuter.',
    link: 'https://client.frozenhost.fr/store/basket/config/13',
    features: [
      { icon: <FaMicrochip />, text: '2 cœurs' },
      { icon: <FaMemory />, text: '6 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '40 Go SSD' },
    ],
  },
  {
    id: 3,
    name: 'Minecraft - Power',
    price: '9.99€',
    description: 'Une offre idéale pour héberger des serveurs Minecraft performants et accueillir plusieurs joueurs sans compromis sur la fluidité.',
    link: 'https://client.frozenhost.fr/store/basket/config/14',
    features: [
      { icon: <FaMicrochip />, text: '4 cœurs' },
      { icon: <FaMemory />, text: '8 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '60 Go SSD' },
    ],
  },
  {
    id: 4,
    name: 'Minecraft - Élite',
    price: '19.99€',
    description: 'Conçu pour des serveurs très actifs, cette offre assure une stabilité optimale et des performances premium.',
    link: 'https://client.frozenhost.fr/store/basket/config/15',
    features: [
      { icon: <FaMicrochip />, text: '6 cœurs' },
      { icon: <FaMemory />, text: '12 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '100 Go SSD' },
    ],
  },
];

const includedFeatures = [
  { icon: <FaShieldAlt />, title: 'ANTI-DDOS', description: 'Mitigation automatique' },
  { icon: <FaMicrochip />, title: 'INTEL XEON', description: 'Intel(R) Xeon(R) CPU E5-1650 v4 - E5-2680 v2' },
  { icon: <FaDesktop />, title: 'PANEL', description: 'Comme si vous étiez sur votre machine' },
  { icon: <FaFolder />, title: 'WEB-FTP', description: 'Explorez et éditez sans logiciel' },
  { icon: <FaHeadset />, title: 'SUPPORT 24/7', description: 'Un support à votre écoute' },
];

export default function Minecraft() {
  const [selectedProduct, setSelectedProduct] = useState(productOptions[0]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Head>
        <title>Offres Minecraft - FrozenHost</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Navbar />

      <motion.div
        className="relative bg-cover bg-center text-black py-32"
        style={{ backgroundImage: `url('/bannerminecraft.png')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-2">Serveurs Minecraft</h1>
          <p className="text-lg">Créez votre univers Minecraft grâce à nos serveurs performants.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-center">Nos Offres Minecraft</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {productOptions.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`p-6 rounded-lg shadow-lg cursor-pointer ${selectedProduct.id === product.id ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-white'
                } hover:bg-indigo-500 transition`}
            >
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <motion.img
              src="/mcproduct.png"
              alt="Minecraft Product"
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
            <a href={selectedProduct.link} target="_blank" rel="noopener noreferrer">
              <button
                className="px-6 py-3 rounded-full shadow-lg transition transform mt-6 bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Acheter Maintenant
              </button>
            </a>
          </div>
        </div>

        <div className="bg-indigo-700 text-white py-12 mt-16">
          <h2 className="text-center text-3xl font-bold mb-6">Inclus avec votre serveur Minecraft</h2>
          <p className="text-indigo-300 text-center mb-8">
            Hébergé sur des machines performantes pour une expérience sans lag.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-16">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="bg-indigo-800 flex items-center p-6 rounded-lg shadow-lg hover:scale-105 transition">
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

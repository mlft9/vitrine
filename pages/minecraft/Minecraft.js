import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Switch from 'react-switch';
import { FaShieldAlt, FaMicrochip, FaDesktop, FaFolder, FaHeadset, FaUsers, FaMemory, FaHdd, FaCloud, FaCube, FaMapMarkerAlt } from 'react-icons/fa';

const productOptions = {
  ryzen: [
    {
      id: 1, 
      name: 'Minecraft - Essai 48h (Intel)',
      price: 'Gratuit',
      description: 'Idéal pour découvrir nos services et tester votre serveur Minecraft.',
      link: 'https://client.frozenhost.fr/store/basket/config/35',
      features: [
        { icon: <FaMicrochip />, text: '2 cœurs Intel Xeon E5 1650V4' },
        { icon: <FaMemory />, text: '4 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '20 Go SSD' },
        { icon: <FaCube />, text: 'Compatible Spigot/Paper/Forge' },
      ],
    },
    {
      id: 2,
      name: 'Minecraft - Développement (Intel)',
      price: '4.99€',
      description: 'Une offre idéale pour un petit serveur ou pour développer vos plugins.',
      link: 'https://client.frozenhost.fr/store/basket/config/13',
      features: [
        { icon: <FaMicrochip />, text: '2 cœurs Intel Xeon E5 1650V4' },
        { icon: <FaMemory />, text: '6 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '40 Go SSD' },
        { icon: <FaCube />, text: 'Compatible Vanilla et Modpacks' },
      ],
    },
    {
      id: 3,
      name: 'Minecraft - Power (Intel)',
      price: '9.99€',
      description: 'Un serveur performant pour des parties fluides, même avec plusieurs joueurs.',
      link: 'https://client.frozenhost.fr/store/basket/config/14',
      features: [
        { icon: <FaMicrochip />, text: '4 cœurs Intel Xeon E5 1650V4' },
        { icon: <FaMemory />, text: '8 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '60 Go SSD' },
        { icon: <FaCube />, text: 'Prise en charge des shaders et packs HD' },
      ],
    },
    {
      id: 4,
      name: 'Minecraft - Élite (Intel)',
      price: '19.99€',
      description: 'Une solution haut de gamme pour des serveurs très actifs et bien optimisés.',
      link: 'https://client.frozenhost.fr/store/basket/config/15',
      features: [
        { icon: <FaMicrochip />, text: '6 cœurs Intel Xeon E5 1650V4' },
        { icon: <FaMemory />, text: '12 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '100 Go SSD' },
        { icon: <FaCube />, text: 'Support des grandes cartes et plugins complexes' },
      ],
    },
  ],
};

const includedFeatures = [
  { icon: <FaShieldAlt />, title: 'ANTI-DDOS', description: 'Protégez votre serveur contre les attaques.' },
  { icon: <FaMicrochip />, title: 'Processeurs Intel Xeon', description: 'Haute performance jusqu\'à 3.8 GHz.' },
  { icon: <FaFolder />, title: 'FTP & Panel Web', description: 'Gérez vos fichiers et configurations facilement.' },
  { icon: <FaHeadset />, title: 'Support 24/7', description: 'Une assistance toujours disponible.' },
  { icon: <FaCloud />, title: 'Sauvegarde Automatique', description: 'Sécurisez vos données.' },
];

export default function Minecraft() {
  const [selectedProduct, setSelectedProduct] = useState(productOptions.ryzen[0]);

  useEffect(() => {
    setSelectedProduct(productOptions.ryzen[0]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Head>
        <title>Offres Minecraft - FrozenHost</title>
      </Head>
      <Navbar />

      {/* Bannière */}
      <motion.div
        className="relative bg-cover bg-center text-black py-32"
        style={{ backgroundImage: `url('/bannerminecraft.png')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-2">Serveurs Minecraft</h1>
          <p className="text-lg">Créez votre univers Minecraft grâce à nos serveurs performants.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-center">Nos Offres Minecraft</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {productOptions.ryzen.map((product) => (
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

        {/* Fonctionnalités incluses */}
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

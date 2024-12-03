import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Switch from 'react-switch';
import { FaShieldAlt, FaMicrochip, FaDesktop, FaFolder, FaHeadset, FaUsers, FaMemory, FaHdd, FaCloud, FaMapMarkerAlt } from 'react-icons/fa';

const productOptions = {
  ryzen: [
    {
      id: 1,
      name: 'FiveM - Essai 48h (Ryzen)',
      price: 'Gratuit',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/35',
      features: [
        { icon: <FaMicrochip />, text: '2 coeurs AMD Ryzen 7 3800x' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '4 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '60 Go SSD' },
      ],
    },
    {
      id: 2,
      name: 'FiveM - Développement (Ryzen)',
      price: '2.99€',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/13',
      features: [
        { icon: <FaMicrochip />, text: '2 coeurs AMD Ryzen 7 3800x' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '4 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '60 Go SSD' },
      ],
    },
    {
      id: 3,
      name: 'FiveM - Power (Ryzen)',
      price: '6.99€',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/14',
      features: [
        { icon: <FaMicrochip />, text: '4 coeurs AMD Ryzen 7 3800x' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '8 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '100 Go SSD' },
      ],
    },
    {
      id: 4,
      name: 'FiveM - Élite (Ryzen)',
      price: '14.99€',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/15',
      features: [
        { icon: <FaMicrochip />, text: '6 coeurs AMD Ryzen 7 3800x' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '12 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '150 Go SSD' },
      ],
    },
    {
      id: 5,
      name: 'FiveM - Titan (Ryzen)',
      price: '24.99€',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/16',
      features: [
        { icon: <FaMicrochip />, text: '8 coeurs AMD Ryzen 7 3800x' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '16 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '200 Go SSD' },
      ],
    },
    {
      id: 6,
      name: 'FiveM - Infinity (Ryzen)',
      price: 'Nous contacter',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://discord.gg/b4dgg75MmG',
      features: [
        { icon: <FaMicrochip />, text: 'AMD Ryzen 7 3800x' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '? Go RAM DDR4' },
        { icon: <FaCloud />, text: '10 Gb/s' },
        { icon: <FaHdd />, text: '? Go SSD' },
      ],
    },
  ],
  intel: [
    {
      id: 1,
      name: 'FiveM - Essai 48h (Intel)',
      price: 'Gratuit',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/35',
      features: [
        { icon: <FaMicrochip />, text: '2 coeurs Xeon E5 1650V4' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '4 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '60 Go SSD' },
      ],
    },
    {
      id: 2,
      name: 'FiveM - Développement (Intel)',
      price: '2.99€',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/13',
      features: [
        { icon: <FaMicrochip />, text: '2 coeurs Xeon E5 1650V4' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '4 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '60 Go SSD' },
      ],
    },
    {
      id: 3,
      name: 'FiveM - Power (Intel)',
      price: '6.99€',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/14',
      features: [
        { icon: <FaMicrochip />, text: '4 coeurs Xeon E5 1650V4' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '8 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '100 Go SSD' },
      ],
    },
    {
      id: 4,
      name: 'FiveM - Élite (Intel)',
      price: '14.99€',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/15',
      features: [
        { icon: <FaMicrochip />, text: '6 coeurs Xeon E5 1650V4' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '12 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '150 Go SSD' },
      ],
    },
    {
      id: 5,
      name: 'FiveM - Titan (Intel)',
      price: '24.99€',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://client.frozenhost.fr/store/basket/config/16',
      features: [
        { icon: <FaMicrochip />, text: '8 coeurs Xeon E5 1650V4' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '16 Go RAM DDR4' },
        { icon: <FaCloud />, text: '1 Gb/s' },
        { icon: <FaHdd />, text: '200 Go SSD' },
      ],
    },
    {
      id: 6,
      name: 'FiveM - Infinity (Intel)',
      price: 'Nous contacter',
      description: 'Idéal pour commencer à développer votre serveur et essayer la stabilité de nos services.',
      link: 'https://discord.gg/b4dgg75MmG',
      features: [
        { icon: <FaMicrochip />, text: 'Xeon E5 1650V4' },
        { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
        { icon: <FaMemory />, text: '? Go RAM DDR4' },
        { icon: <FaCloud />, text: '10 Gb/s' },
        { icon: <FaHdd />, text: '? Go SSD' },
      ],
    },
  ],
};

const includedFeatures = [
  { icon: <FaShieldAlt />, title: 'ANTI-DDOS', description: 'Mitigation automatique' },
  { icon: <FaMicrochip />, title: 'AMD RYZEN / INTEL XEON', description: '3.8 / 4.6 GHz' },
  { icon: <FaDesktop />, title: 'PANEL', description: 'Comme si vous étiez sur votre machine' },
  { icon: <FaFolder />, title: 'WEB-FTP', description: 'Explorez et éditez sans logiciel' },
  { icon: <FaHeadset />, title: 'SUPPORT 24/7', description: 'Un support à votre écoute' },
];

export default function FiveM() {
  const [selectedProduct, setSelectedProduct] = useState(productOptions.ryzen[0]);
  const [processorType, setProcessorType] = useState('ryzen'); // 'ryzen' ou 'intel'

  useEffect(() => {
    setSelectedProduct(productOptions[processorType][0]);
  }, [processorType]);

  const toggleProcessorType = (checked) => {
    setProcessorType(checked ? 'intel' : 'ryzen');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Head>
        <title>Offres FiveM - FrozenHost</title>
      </Head>
      <Navbar />

      {/* Section Bannière de Service */}
      <motion.div
        className="relative bg-cover bg-center text-white py-32"
        style={{ backgroundImage: `url('/fivembanner.png')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dégradé sur le bas de l'image */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-2">Serveurs FiveM</h1>
          <p className="text-lg">Profitez de performances optimales pour vos serveurs GTA V Roleplay avec nos offres adaptées à vos besoins.</p>
        </div>
      </motion.div>


      <div className="container mx-auto px-4 py-16 bg-gray-900">
        <h1 className="text-3xl font-bold mb-8 text-center">Nos Offres FiveM</h1>

        {/* Switch pour sélectionner le processeur */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-gray-400 text-sm mr-4">AMD Ryzen</span>
          <Switch
            onChange={toggleProcessorType}
            checked={processorType === 'intel'}
            offColor="#4f46e5"
            onColor="#22c55e"
            uncheckedIcon={false}
            checkedIcon={false}
            height={24}
            width={48}
          />
          <span className="text-gray-400 text-sm ml-4">Intel Xeon</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {productOptions[processorType].slice(0, 3).map((product) => (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {productOptions[processorType].slice(3).map((product) => (
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
              src="/images/fivem-product.png"
              alt="FiveM Product"
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
                className={`px-6 py-3 rounded-full shadow-lg transition transform mt-6 ${selectedProduct.name.includes('Infinity')
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
              >
                {selectedProduct.name.includes('Infinity') ? 'Nous Contacter' : 'Acheter Maintenant'}
              </button>
            </a>
          </div>
        </div>

        {/* Section des Fonctionnalités Incluses */}
        <div className="bg-indigo-700 text-white py-12 mt-16">
          <h2 className="text-center text-3xl font-bold mb-6">Inclus avec votre serveur GTA V RP</h2>
          <p className="text-indigo-300 text-center mb-8">
            Hébergé sur des serveurs de dernière génération pour une expérience optimale. Nous utilisons des processeurs AMD Ryzen ou EPYC, ainsi que des disques SSD ou NVMe à haute performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-16">
            {includedFeatures.map((feature, index) => (
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

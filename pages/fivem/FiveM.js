import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaShieldAlt, FaMicrochip, FaDesktop, FaFolder, FaHeadset, FaMemory, FaHdd, FaCloud, FaMapMarkerAlt } from 'react-icons/fa';

const productOptions = [
  {
    id: 1,
    name: 'FiveM - Essai 48h',
    price: 'Gratuit',
    description: 'Découvrez nos services gratuitement pendant 48 heures, idéal pour une première prise en main et pour tester la stabilité de nos hébergements.',
    link: 'https://client.frozenhost.fr/store/basket/config/41',
    features: [
      { icon: <FaMicrochip />, text: '2 coeurs' },
      { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
      { icon: <FaMemory />, text: '4 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '60 Go SSD' },
    ],
  },
  {
    id: 2,
    name: 'FiveM - Développement',
    price: '2.99€',
    description: 'Une solution abordable pour développer et configurer votre serveur avec les performances nécessaires à vos tests.',
    link: 'https://client.frozenhost.fr/store/basket/config/42',
    features: [
      { icon: <FaMicrochip />, text: '2 coeurs' },
      { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
      { icon: <FaMemory />, text: '4 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '60 Go SSD' },
    ],
  },
  {
    id: 3,
    name: 'FiveM - Power',
    price: '6.99€',
    description: 'Idéal pour les serveurs ayant besoin de ressources supplémentaires pour gérer un trafic moyen et des scripts complexes.',
    link: 'https://client.frozenhost.fr/store/basket/config/43',
    features: [
      { icon: <FaMicrochip />, text: '4 coeurs' },
      { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
      { icon: <FaMemory />, text: '8 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '100 Go SSD' },
    ],
  },
  {
    id: 4,
    name: 'FiveM - Élite',
    price: '14.99€',
    description: 'Conçu pour les serveurs exigeants avec un grand nombre de joueurs et des configurations poussées.',
    link: 'https://client.frozenhost.fr/store/basket/config/44',
    features: [
      { icon: <FaMicrochip />, text: '6 coeurs' },
      { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
      { icon: <FaMemory />, text: '12 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '150 Go SSD' },
    ],
  },
  {
    id: 5,
    name: 'FiveM - Titan',
    price: '24.99€',
    description: 'Une puissance inégalée pour des serveurs ayant un trafic élevé et des besoins en ressources maximales.',
    link: 'https://client.frozenhost.fr/store/basket/config/45',
    features: [
      { icon: <FaMicrochip />, text: '8 coeurs' },
      { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
      { icon: <FaMemory />, text: '16 Go RAM DDR4' },
      { icon: <FaCloud />, text: '1 Gb/s' },
      { icon: <FaHdd />, text: '200 Go SSD' },
    ],
  },
  {
    id: 6,
    name: 'FiveM - Infinity',
    price: 'Nous contacter',
    description: 'Pour des projets sur mesure, cette solution offre des configurations adaptées à vos besoins spécifiques avec une connexion ultra rapide.',
    link: 'https://discord.gg/b4dgg75MmG',
    features: [
      { icon: <FaMicrochip />, text: 'Au choix' },
      { icon: <FaMapMarkerAlt />, text: 'Hébergé en France / Allemagne' },
      { icon: <FaMemory />, text: '? Go RAM DDR4' },
      { icon: <FaCloud />, text: '10 Gb/s' },
      { icon: <FaHdd />, text: '? Go SSD' },
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

export default function FiveM() {
  const [selectedProduct, setSelectedProduct] = useState(productOptions[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      <Head>
        <title>Offres FiveM - FrozenHost</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Navbar />

      <motion.div
        className="relative bg-cover bg-center text-white py-32"
        style={{ backgroundImage: `url('/fivembanner.png')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-2 text-white-300">Serveurs FiveM</h1>
          <p className="text-lg text-white-400">Profitez de performances optimales pour vos serveurs GTA V Roleplay avec nos offres adaptées à vos besoins.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-cyan-300">Nos Offres <span className='text-white'>FiveM</span></h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {productOptions.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition ${
                selectedProduct.id === product.id
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-800 text-cyan-300 hover:bg-cyan-500'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <motion.img
              src="/logo-fivem.png"
              alt="FiveM Product"
              className="w-full h-auto rounded-lg shadow-lg max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white-300">{selectedProduct.name}</h2>
            <p className="text-gray-400 mb-6">{selectedProduct.description}</p>
            <p className="text-2xl font-semibold text-cyan-400 mb-4">{selectedProduct.price}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-cyan-400 text-lg">{feature.icon}</span>
                  <span className="text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>
            <a href={selectedProduct.link} target="_blank" rel="noopener noreferrer">
              <button
                className={`px-6 py-3 rounded-full shadow-lg transition transform mt-6 ${
                  selectedProduct.name.includes('Infinity')
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                }`}
              >
                {selectedProduct.name.includes('Infinity') ? 'Nous Contacter' : 'Acheter Maintenant'}
              </button>
            </a>
          </div>
        </div>

        <div className="bg-cyan-700 text-white py-12 mt-16">
          <h2 className="text-center text-3xl font-bold mb-6 text-white">Inclus avec votre serveur GTA V RP</h2>
          <p className="text-cyan-300 text-center mb-8">
            Hébergé sur des serveurs de dernière génération pour une expérience optimale. Nous utilisons des processeurs Intel Xeon, ainsi que des disques SSD ou NVMe à haute performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-16">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="bg-cyan-800 flex items-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-200">
                <span className="text-white text-3xl mr-4">{feature.icon}</span>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-cyan-300 text-sm">{feature.description}</p>
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

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Switch from 'react-switch';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Accordion, AccordionItem, AccordionTrigger, AccordionHeader, AccordionContent } from '@radix-ui/react-accordion';
import Head from 'next/head';
import Link from 'next/link';

// Offres pour les serveurs Minecraft
const ryzenOffers = [
    {
        id: 1,
        name: 'Ryzen Standard',
        price: '€19.99',
        description: 'Serveur Ryzen avec une performance équilibrée.',
        features: [
            'AMD Ryzen 3.8 GHz',
            'Hébergement SSD',
            'Jusqu\'à 20 joueurs',
        ],
        link: '/checkout/ryzen-standard'
    },
    {
        id: 2,
        name: 'Ryzen Premium',
        price: '€39.99',
        description: 'Serveur Ryzen haut de gamme avec plus de puissance.',
        features: [
            'AMD Ryzen 4.4 GHz',
            'Hébergement NVMe rapide',
            'Jusqu\'à 50 joueurs',
            'Assistance prioritaire',
        ],
        link: '/checkout/ryzen-premium'
    },
];

const intelOffers = [
    {
        id: 1,
        name: 'Intel Standard',
        price: '€19.99',
        description: 'Serveur Intel performant pour des expériences fluides.',
        features: [
            'Intel Xeon 4.0 GHz',
            'Hébergement SSD',
            'Jusqu\'à 20 joueurs',
        ],
        link: '/checkout/intel-standard'
    },
    {
        id: 2,
        name: 'Intel Premium',
        price: '€39.99',
        description: 'Serveur Intel Premium pour des performances maximales.',
        features: [
            'Intel Xeon 4.6 GHz',
            'Hébergement NVMe rapide',
            'Jusqu\'à 50 joueurs',
            'Assistance prioritaire',
        ],
        link: '/checkout/intel-premium'
    },
];

export default function Minecraft() {
    const [isRyzen, setIsRyzen] = useState(true); // État pour choisir entre Ryzen et Intel
    const selectedOffers = isRyzen ? ryzenOffers : intelOffers;
    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <Head>
                <title>Offres Minecraft - FrozenHost</title>
            </Head>
            <Navbar />

            {/* Titre et bouton pour basculer entre les modes */}
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-8">Nos Offres Minecraft</h1>
                <div className="flex items-center justify-center space-x-4 mb-8">
                    <span>Ryzen</span>
                    <Switch
                        onChange={() => setIsRyzen(!isRyzen)}
                        checked={!isRyzen}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#4A90E2"
                        offColor="#F59E0B"
                    />
                    <span>Intel</span>
                </div>

                {/* Affichage des offres */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {selectedOffers.map((offer) => (
                        <motion.div
                            key={offer.id}
                            className="p-6 rounded-lg shadow-lg bg-gray-800 text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
                            <p className="text-lg font-bold text-indigo-400 mb-4">{offer.price}</p>
                            <p className="mb-4">{offer.description}</p>
                            <ul className="mb-4 space-y-2">
                                {offer.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <CheckCircleIcon className="h-5 w-5 text-indigo-400 mr-2" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={offer.link} passHref>
                                <motion.button
                                    className="px-4 py-2 rounded-full shadow-lg bg-indigo-700 hover:bg-indigo-800 text-white transition transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Acheter Maintenant
                                </motion.button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Comparaison des fonctionnalités */}
                {/* Code pour la comparaison des fonctionnalités */}
            </div>

            <Footer />
        </div>
    );
}

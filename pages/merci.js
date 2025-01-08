// pages/merci.js
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Merci() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center">
      <Head>
        <title>Merci pour votre achat</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Merci !
      </motion.h1>
      <p className="text-lg mb-8 text-gray-400">
        Nous vous remercions pour votre achat. Vous allez recevoir un email de confirmation dans quelques instants.
      </p>
      <Link href="/">
        <motion.button
          className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-500"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Retour à l'accueil
        </motion.button>
      </Link>
    </div>
  );
}

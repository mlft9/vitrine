// pages/404.js
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 min-h-screen text-white flex flex-col items-center justify-center">
      <Head>
        <title>Oups - FrozenHost</title>
      </Head>
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Oups ! Page non trouvée.
      </motion.h1>
      <p className="text-lg mb-8 text-gray-400">La page que vous cherchez semble introuvable.</p>
      {/* GIF Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mb-8"
      >
        <img
          src="/simpsons-homer-simpson.gif"
          alt="Homer Simpson disappearing into bushes"
          className="w-64 h-64 rounded-full object-cover"
        />
      </motion.div>
      <Link href="/">
        <motion.button
          className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-500"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Retour à l'accueil
        </motion.button>
      </Link>

    </div>
  );
}

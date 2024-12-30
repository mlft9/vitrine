import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 flex flex-col justify-between">
      <Head>
        <title>Bientôt Disponible - FrozenHost</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Navbar />

      <motion.div
        className="flex flex-col items-center justify-center flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-cyan-300 mb-4">Bientôt Disponible</h1>
        <p className="text-xl text-gray-400 mb-8 text-center px-4 max-w-lg">
          Nous travaillons activement sur cette nouvelle fonctionnalité pour vous offrir une expérience encore plus enrichissante. 
          Restez à l’écoute, ça arrive très bientôt !
        </p>
        
        {/* Return to Menu Button */}
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition transform hover:scale-105">
            Revenir à l'accueil
          </button>
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
}

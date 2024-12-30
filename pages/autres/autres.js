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
        <link rel="preload" href="/logo.png" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="FrozenHost travaille activement sur une nouvelle fonctionnalité pour améliorer votre expérience. Restez à l'écoute, ça arrive bientôt !"
        />
        <meta name="author" content="FrozenHost" />
        <meta property="og:title" content="Bientôt Disponible - FrozenHost" />
        <meta
          property="og:description"
          content="FrozenHost travaille activement sur une nouvelle fonctionnalité pour améliorer votre expérience. Restez à l'écoute, ça arrive bientôt !"
        />
        <meta property="og:image" content="https://frozenhost.fr/logo.png" />
        <meta property="og:url" content="https://frozenhost.fr/autres/autres" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
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
        <Link href="/" aria-label="Revenir à la page d'accueil">
          <div className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300">
            Revenir à l'accueil
          </div>
        </Link>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

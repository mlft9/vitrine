import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Head from 'next/head';

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Head>
        <title>Conditions d'Utilisation</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-500 mb-6">Conditions d'Utilisation</h1>
        <p className="text-gray-400 mb-4">
          Les présentes conditions d'utilisation régissent l'utilisation du site <strong>FrozenHost</strong>. En accédant et en naviguant sur notre site, vous acceptez ces conditions dans leur intégralité.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Utilisation du Site</h2>
        <p className="text-gray-400 mb-4">
          L’utilisateur s’engage à utiliser le site de manière respectueuse et légale, et à ne pas perturber le fonctionnement de ce dernier. Toute violation entraînera la suppression de l’accès au site.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Droits et Responsabilités</h2>
        <p className="text-gray-400 mb-4">
        FrozenHost ne peut être tenu responsable des erreurs ou omissions des informations présentes sur le site. L'utilisateur utilise le site à ses propres risques et FrozenHost ne pourra être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation du site.
        </p>
      </div>

      <Footer />
    </div>
  );
}

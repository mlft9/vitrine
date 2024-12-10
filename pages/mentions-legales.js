import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Head from 'next/head';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Head>
        <title>Mentions Légales - Unixo</title>
      </Head>
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-500 mb-6">Mentions Légales</h1>
        <p className="text-gray-400 mb-4">
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site <strong>Unixo</strong> les informations suivantes :
        </p>
        
        <h2 className="text-2xl font-bold text-white mb-4">Éditeur du site</h2>
        <p className="text-gray-400 mb-4">
          Nom de la Société: Unixo<br/>
          Adresse: 123 Rue Exemple, 75000 Paris<br/>
          Email: contact@unixo.com<br/>
          Numéro de téléphone: +33 1 23 45 67 89
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Hébergement</h2>
        <p className="text-gray-400 mb-4">
          Hébergeur: Hebergetamere<br/>
          Adresse: 10 Place gustave de l'aune, 93270 Sevran<br/>
          Téléphone: +7 mes couilles sur ton front
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Droits de Propriété Intellectuelle</h2>
        <p className="text-gray-400 mb-4">
          Tous les éléments du site <strong>Unixo</strong> sont la propriété de l'éditeur, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, est strictement interdite sans l'accord écrit de <strong>Unixo</strong>.
        </p>
      </div>

      <Footer />
    </div>
  );
}

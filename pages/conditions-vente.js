import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Head from 'next/head';

export default function ConditionsVente() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Head>
        <title>Conditions de Vente - FrozenHost</title>
      </Head>
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-500 mb-6">Conditions de Vente</h1>
        <p className="text-gray-400 mb-4">
          Les présentes conditions de vente s'appliquent à toutes les transactions effectuées sur le site <strong>FrozenHost</strong>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Commandes et Paiements</h2>
        <p className="text-gray-400 mb-4">
          Toutes les commandes sont effectuées en ligne via notre plateforme. Les paiements sont sécurisés et peuvent être effectués par carte bancaire, PayPal, ou tout autre moyen de paiement indiqué sur notre site.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Politique de Remboursement</h2>
        <p className="text-gray-400 mb-4">
          Un remboursement peut être demandé sous certaines conditions. Veuillez nous contacter dans un délai de 14 jours suivant votre achat pour toute demande de remboursement.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Garanties et Responsabilité</h2>
        <p className="text-gray-400 mb-4">
          Nos produits et services sont couverts par une garantie limitée. Cependant, nous ne pouvons être tenus responsables de tout dommage indirect résultant de l'utilisation de nos produits.
        </p>
      </div>

      <Footer />
    </div>
  );
}

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Head from 'next/head';

export default function ConditionsVente() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Head>
        <title>Termes et Conditions de Facturation - FrozenHost</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-500 mb-6">Termes et Conditions de Facturation</h1>
        <p className="text-gray-400 mb-4">
          Les présents termes et conditions de facturation s'appliquent à tous les clients de <strong>FrozenHost</strong>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Émission des Factures</h2>
        <p className="text-gray-400 mb-4">
          Les factures sont émises automatiquement à la fin de chaque période de facturation et envoyées à l'adresse e-mail fournie lors de l'inscription.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Modes de Paiement</h2>
        <p className="text-gray-400 mb-4">
          Les paiements peuvent être effectués via carte bancaire, PayPal ou virement bancaire. Tous les paiements doivent être effectués en euros (€).
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Délais de Paiement</h2>
        <p className="text-gray-400 mb-4">
          Le paiement doit être effectué dans un délai de 14 jours suivant l'émission de la facture. En cas de retard, des frais de retard peuvent être appliqués.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Réclamations et Litiges</h2>
        <p className="text-gray-400 mb-4">
          Toute réclamation concernant une facture doit être signalée dans un délai de 7 jours suivant sa réception. Passé ce délai, la facture est considérée comme acceptée.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Politique de Remboursement</h2>
        <p className="text-gray-400 mb-4">
          Les remboursements sont accordés uniquement en cas de dysfonctionnement avéré du service ou de facturation incorrecte. Contactez notre support pour toute demande.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Renouvellement Automatique</h2>
        <p className="text-gray-400 mb-4">
          Les services sont renouvelés automatiquement à la fin de chaque période de facturation, sauf annulation préalable dans l'espace client.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Modification des Conditions</h2>
        <p className="text-gray-400 mb-4">
          FrozenHost se réserve le droit de modifier ces termes et conditions avec un préavis de 30 jours.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-400 mb-4">
          Pour toute question concernant les factures, contactez-nous par e-mail à support@frozenhost.com ou via notre site web.
        </p>
      </div>

      <Footer />
    </div>
  );
}

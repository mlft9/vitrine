// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo et description */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo FrozenHost" className="w-10 h-10" />
            <span className="text-2xl font-bold">FrozenHost</span>
          </div>
          <p className="mt-4 text-sm">
          FrozenHost est un site spécialisé dans l'hébergement de services en ligne : hébergement web, VPS, serveurs de jeux (...) et bien plus encore !
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b-2 border-orange-500 inline-block">
            Support
          </h3>
          <ul className="space-y-2 mt-2">
            <li>
              <Link href="https://discord.gg/b4dgg75MmG" className="hover:text-orange-500 transition">
                &#x276F; Notre Discord
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-500 transition">
                &#x276F; Wiki
              </Link>
            </li>
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b-2 border-orange-500 inline-block">
            Légal
          </h3>
          <ul className="space-y-2 mt-2">
            <li>
              <Link href="/mentions-legales" className="hover:text-orange-500 transition">
                &#x276F; Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/conditions-utilisation" className="hover:text-orange-500 transition">
                &#x276F; Conditions d'utilisation
              </Link>
            </li>
            <li>
              <Link href="/conditions-vente" className="hover:text-orange-500 transition">
                &#x276F; Conditions de vente
              </Link>
            </li>
          </ul>
        </div>

        {/* Moyens de paiement */}
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b-2 border-orange-500 inline-block">
            Moyens de paiement
          </h3>
          <div className="flex space-x-4 mt-2">
            <img src="/visa.png" alt="Visa" className="w-10 h-6" />
            <img src="/mastercard.png" alt="Mastercard" className="w-10 h-6" />
            <img src="/paypal.png" alt="PayPal" className="w-10 h-6" />
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>&copy; 2024 aCollective. Tous droits réservés.</p>
        <p className="mt-4 md:mt-0">
          Site réalisé par <a href="https://www.twitch.tv/jenestreampasbeaucoup" target="_blank" rel="noopener noreferrer" className="text-orange-500">Matheo</a>
        </p>
      </div>

    </footer>
  );
}

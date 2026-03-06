import Link from 'next/link';
import { Wifi } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1e40af' }}>
                <Wifi className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                Bredbånd<span style={{ color: '#06b6d4' }}>Pilot</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              BredbåndPilot hjælper danske forbrugere med at finde det bedste bredbånd til deres behov.
              Vi sammenligner priser, hastigheder og vilkår fra alle større udbydere.
            </p>
            <p className="text-xs mt-3 text-gray-500">
              * Vi modtager provision ved klik på affiliate-links. Dette påvirker ikke vores anbefalinger.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Bredbåndstyper</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fiber" className="hover:text-white transition-colors">Fiber internet</Link></li>
              <li><Link href="/mobilt-bredbaand" className="hover:text-white transition-colors">Mobilt bredbånd</Link></li>
              <li><Link href="/tv-og-bredbaand" className="hover:text-white transition-colors">TV + bredbånd</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide/bredbaand-uden-binding" className="hover:text-white transition-colors">Bredbånd uden binding</Link></li>
              <li><Link href="/guide/hastighed-forklaret" className="hover:text-white transition-colors">Hastighed forklaret</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Sammenlign alle udbydere</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-center text-gray-600">
          © {new Date().getFullYear()} BredbåndPilot · Upartisk sammenligning af bredbånd i Danmark
        </div>
      </div>
    </footer>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { providers } from '@/data/providers';
import ComparisonTable from '@/components/ComparisonTable';
import SpeedCalculator from '@/components/SpeedCalculator';
import Quiz from '@/components/Quiz';
import ProviderCard from '@/components/ProviderCard';
import { CheckCircle, Wifi, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sammenlign Bredbånd 2024 – Find billigste internet | BredbåndPilot',
  description:
    'Sammenlign alle bredbåndstyper i Danmark. Fiber, kabel og mobilt bredbånd fra Norlys, Hiper, YouSee, Stofa og flere. Find den bedste pris og hastighed.',
};

const topProviders = providers
  .filter(p => p.type !== 'fiber (erhverv)')
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-16 px-4" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #0e7490 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: 'rgba(6,182,212,0.2)', color: '#67e8f9' }}>
            <Zap className="w-4 h-4" /> Opdateret {new Date().getFullYear()}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Find det bedste bredbånd<br />
            <span style={{ color: '#67e8f9' }}>til din husstand</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Vi sammenligner fiber, kabel og mobilt bredbånd fra alle store udbydere i Danmark.
            Spar op til 600 kr. om året ved at vælge rigtigt.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: '✅', text: '9 udbydere sammenlignet' },
              { icon: '🔓', text: 'Upartisk og gratis' },
              { icon: '⚡', text: 'Opdaterede priser' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bread crumb / Quick links */}
      <section className="py-6 px-4 border-b bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {[
            { href: '/fiber', label: '🔵 Fiber internet' },
            { href: '/mobilt-bredbaand', label: '📡 Mobilt bredbånd' },
            { href: '/tv-og-bredbaand', label: '📺 TV + bredbånd' },
            { href: '/guide/bredbaand-uden-binding', label: '🔓 Uden binding' },
            { href: '/guide/hastighed-forklaret', label: '⚡ Hastighed forklaret' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Intro text */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sammenlign alle bredbåndsudbydere i Danmark
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At vælge den rette bredbåndsforbindelse er ikke altid let. Der er mange udbydere, forskellige teknologier og
            prismodeller der kan virke forvirrende. Hos BredbåndPilot gør vi det nemt — vi har samlet alle relevante
            informationer på ét sted, så du hurtigt kan finde det bredbånd der passer til netop dine behov og din økonomi.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fiber er den hurtigste og mest stabile løsning og er tilgængelig i store dele af Danmark. Kabelbredbånd er et
            godt alternativ med høje downloadhastigheder, mens mobilt bredbånd er den mest fleksible løsning — perfekt hvis
            du bor steder uden fiberdækning eller ofte er på farten.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Brug vores sammenligningstabel nedenfor til at sortere og filtrere udbyderne efter det der betyder mest for dig:
            pris, hastighed, bindingsperiode eller type. Du kan også bruge vores hastigheds-beregner eller quiz for en mere
            personlig anbefaling.
          </p>
        </div>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sammenligningstabel — alle udbydere
          </h2>
          <ComparisonTable providers={providers} />
        </section>

        {/* Smart tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Personlige anbefalinger</h2>
          <p className="text-gray-600 mb-6">Brug vores smarte værktøjer til at finde det perfekte bredbånd.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpeedCalculator />
            <Quiz />
          </div>
        </section>

        {/* Top rated */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Højest vurderede udbydere</h2>
          <p className="text-gray-600 mb-6">Baseret på kundeanmeldelser og vores uafhængige tests.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topProviders.map((p, i) => (
              <ProviderCard key={p.id} provider={p} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Guide teaser */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Guides og vejledninger</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                href: '/fiber',
                title: 'Fiber internet guide',
                desc: 'Alt om fiberforbindelser, hvad de koster, og hvem der tilbyder det bedste fiber i Danmark.',
                icon: '🔵',
              },
              {
                href: '/guide/bredbaand-uden-binding',
                title: 'Bredbånd uden binding',
                desc: 'Undgå dyre bindingsperioder. Vi viser dig de bedste tilbud med fuld fleksibilitet.',
                icon: '🔓',
              },
              {
                href: '/guide/hastighed-forklaret',
                title: 'Hastighed forklaret',
                desc: 'Hvad er Mbit/s, download vs. upload, og hvad har du egentlig brug for? Vi forklarer det enkelt.',
                icon: '⚡',
              },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="text-sm font-semibold mt-3" style={{ color: '#06b6d4' }}>
                  Læs guide →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why */}
        <section className="rounded-2xl p-8 mb-12" style={{ backgroundColor: '#eff6ff' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hvorfor bruge BredbåndPilot?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <CheckCircle className="w-6 h-6" style={{ color: '#06b6d4' }} />,
                title: 'Upartisk sammenligning',
                desc: 'Vi præsenterer alle udbydere objektivt. Vores anbefalinger er baseret på fakta, ikke provisioner.',
              },
              {
                icon: <Wifi className="w-6 h-6" style={{ color: '#06b6d4' }} />,
                title: 'Altid opdateret',
                desc: 'Vi opdaterer løbende priser og tilbud fra alle udbydere, så du altid ser de nyeste informationer.',
              },
              {
                icon: <Shield className="w-6 h-6" style={{ color: '#06b6d4' }} />,
                title: 'Gratis service',
                desc: 'BredbåndPilot er helt gratis at bruge. Vi finansieres via affiliate-provisioner uden ekstraomkostninger for dig.',
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ofte stillede spørgsmål</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Hvad er forskellen på fiber og kabelbredbånd?',
                a: 'Fiber bruger lysstråler til at overføre data og giver symmetriske hastigheder (samme download og upload). Kabelbredbånd bruger eksisterende TV-kabler og har typisk høj downloadhastighed men lavere upload. Fiber er generelt hurtigere og mere stabilt.',
              },
              {
                q: 'Hvad er den hurtigste bredbåndsforbindelse i Danmark?',
                a: 'Fiberforbindelser tilbyder i dag op til 1000/1000 Mbit/s til private og op til 10 Gbit/s til erhvervskunder. Globalconnect tilbyder den højeste hastighed med 10.000/10.000 Mbit/s til virksomheder.',
              },
              {
                q: 'Kan jeg skifte bredbåndsudbyder uden gebyrer?',
                a: 'Det afhænger af din nuværende aftale. Mange udbydere tilbyder nu bredbånd uden binding, hvilket betyder du kan skifte frit. Har du en aftale med binding, kan der være opsigelsesvarsler. Tjek altid dine vilkår, inden du skifter.',
              },
              {
                q: 'Hvad koster et gennemsnitligt bredbåndsabonnement i Danmark?',
                a: 'Et gennemsnitligt bredbåndsabonnement i Danmark koster mellem 199 og 399 kr. pr. måned afhængigt af hastighed og type. Mobilt bredbånd er typisk billigst fra 199 kr., mens fiber starter fra ca. 259 kr. pr. måned.',
              },
            ].map(item => (
              <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

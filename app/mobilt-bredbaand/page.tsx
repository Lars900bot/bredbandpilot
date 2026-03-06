import { Metadata } from 'next';
import Link from 'next/link';
import { mobileProviders } from '@/data/providers';
import ComparisonTable from '@/components/ComparisonTable';
import ProviderCard from '@/components/ProviderCard';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobilt Bredbånd Guide 2024 – Sammenlign 5G tilbud | BredbåndPilot',
  description:
    'Find det bedste mobilt bredbånd i Danmark. Sammenlign 5G og 4G tilbud fra 3, Telia og andre udbydere. Gratis guide til mobilt bredbånd uden binding.',
};

export default function MobiltBredbandPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-14 px-4" style={{ background: 'linear-gradient(135deg, #065f46 0%, #0e7490 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-green-200 mb-4">
            <Link href="/" className="hover:text-white">Forside</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Mobilt bredbånd</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Mobilt bredbånd — 5G og 4G
          </h1>
          <p className="text-lg text-green-100 max-w-2xl leading-relaxed">
            Mobilt bredbånd er den mest fleksible internetløsning. Ingen installatør, ingen kabler —
            bare internet overalt i Danmark via mobilnettet. Perfekt til sommerhus, campingvogn og som backup.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <div className="bg-white/10 px-4 py-2 rounded-full">📡 Op til 300 Mbit/s (5G)</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">🔓 Ingen binding</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">💨 Klar på minutter</div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hvad er mobilt bredbånd?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mobilt bredbånd er internet via mobilnettet — enten 4G LTE eller det nyere 5G. I stedet for et
            fast kabel til hjemmet bruger du en router der modtager signal fra nærmeste mobilmast. Det gør
            løsningen ekstremt fleksibel: du kan tage routeren med til sommerhuset, campingpladsen eller
            bruge den som backup hvis din faste forbindelse falder ud.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Med 5G er hastighederne forbedret markant. Udbydere som 3 og Telia tilbyder op til 300 Mbit/s
            download via 5G, hvilket er mere end rigeligt til streaming, videomøder og daglig surfing. I
            tæt bebyggede områder med god 5G-dækning kan hastigheden endda være højere.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Prismæssigt er mobilt bredbånd attraktivt. Fra 199 kr./md. hos 3 og 219 kr./md. hos Telia —
            begge uden binding. Det er billigere end de fleste faste bredbåndsabonnementer og kræver ingen
            installationsgebyr eller lang ventetid.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Den primære ulempe ved mobilt bredbånd er, at hastighed og stabilitet afhænger af
            mobilnetdækningen. I tæt bebyggede områder med mange brugere kan hastigheden variere i
            myldretiden. Men for de fleste formål — og særligt som supplement til en fast forbindelse
            — er mobilt bredbånd en glimrende løsning.
          </p>
        </div>

        {/* Top providers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bedste mobile bredbåndstilbud</h2>
          <p className="text-gray-600 mb-6">Sammenlign de bedste tilbud på mobilt bredbånd i Danmark.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mobileProviders.map((p, i) => (
              <ProviderCard key={p.id} provider={p} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sammenligningstabel — mobilt bredbånd</h2>
          <ComparisonTable providers={mobileProviders} showTypeFilter={false} />
        </section>

        {/* 4G vs 5G */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4G vs. 5G — hvad er forskellen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📶 4G LTE</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                4G er den nuværende standard for mobilinternet og har god dækning i hele Danmark — også
                i landområder. Hastighederne er typisk 20-100 Mbit/s download i praksis, og op til 150
                Mbit/s under ideelle forhold. 4G er mere end nok til streaming, sociale medier og videomøder.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> God dækning over hele Danmark</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Stabil forbindelse</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Lavere hastighed end 5G</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Højere latenstid end 5G</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 5G</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                5G er den nye mobilstandard med markant højere hastigheder og lavere latenstid. I Danmark
                er 5G-dækningen god i de store byer og vokser hurtigt. Med 5G kan du forvente 100-300 Mbit/s
                download i praksis, og op til 1 Gbit/s under ideelle forhold.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Meget høje hastigheder</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Lav latenstid (godt til gaming)</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Fremtidssikret teknologi</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Dækning endnu ikke fuldt udbygget</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hvem bør vælge mobilt bredbånd?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: '🏠',
                title: 'Sommerhusejere',
                desc: 'Mobilt bredbånd er perfekt til sommerhuset, hvor det ikke kan betale sig at installere en fast forbindelse. Tag routeren med derhen og hjem igen.',
              },
              {
                icon: '🚐',
                title: 'Digitale nomader',
                desc: 'Arbejder du hjemmefra og bevæger dig rundt? Mobilt bredbånd giver dig internet overalt hvor der er mobildækning.',
              },
              {
                icon: '🏘️',
                title: 'Uden fiberdækning',
                desc: 'Bor du et sted uden fiber eller kabel, er mobilt bredbånd via 5G/4G et godt alternativ der kan give tilfredsstillende hastigheder.',
              },
              {
                icon: '💼',
                title: 'Backup løsning',
                desc: 'Brug mobilt bredbånd som backup til din faste forbindelse. Hvis fiber eller kabel fejler, er du stadig online.',
              },
              {
                icon: '🎓',
                title: 'Studerende',
                desc: 'Til studieboliger og kollegier er mobilt bredbånd en billig og fleksibel løsning uden krav om installation eller binding.',
              },
              {
                icon: '🔓',
                title: 'Kortvarige ophold',
                desc: 'Bor du et sted i kortere tid? Mobilt bredbånd uden binding er ideel — ingen lange kontrakter eller installationsbesvær.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros and cons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fordele og ulemper ved mobilt bredbånd</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Fordele
              </h3>
              <ul className="space-y-2 text-sm text-green-800">
                {[
                  'Ingen installation — klar på minutter',
                  'Fleksibelt — tag det med dig overalt',
                  'Ingen binding hos de fleste udbydere',
                  'Billigt fra 199 kr./md.',
                  'Fungerer som backup ved nedbrud',
                  '5G giver op til 300 Mbit/s',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="font-bold text-red-900 mb-4">Ulemper</h3>
              <ul className="space-y-2 text-sm text-red-800">
                {[
                  'Hastighed afhænger af dækning og trængsel',
                  'Kan være ustabilt i myldretiden',
                  'Lavere max-hastighed end fiber',
                  'Datamængde kan have grænser',
                  'Ikke ideel til professionelt hjemmekontor',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ: Mobilt bredbånd</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Hvad er den bedste udbyder af mobilt bredbånd i Danmark?',
                a: '3 og Telia er de to største udbydere af mobilt bredbånd i Danmark. 3 er billigst fra 199 kr./md., mens Telia koster 219 kr./md. Begge tilbyder 5G og ingen binding. Valget afhænger af dækning i dit område.',
              },
              {
                q: 'Kan jeg bruge mobilt bredbånd som min primære internetforbindelse?',
                a: 'Ja, for mange husstande er mobilt bredbånd fuldt tilstrækkeligt som primær forbindelse. Særligt med 5G og god dækning. Det er dog bedst egnet til 1-2 personers husstande med moderat forbrug.',
              },
              {
                q: 'Har mobilt bredbånd et dataloft?',
                a: 'De fleste moderne mobilbredbåndsabonnementer er ubegrænsede i antal GB. Dog kan hastighederne reduceres efter en vis grænse i perioder med høj trængsel på nettet. Tjek altid de specifikke vilkår hos din udbyder.',
              },
              {
                q: 'Hvad er forskel på mobilt bredbånd og en mobil hotspot?',
                a: 'En mobil hotspot bruger mobildata fra en telefon og deler den via WiFi. Mobilt bredbånd er en dedikeret router der er optimeret til bredbåndshastigheder og har bedre antenner. For hjemmebrug er en dedikeret mobil bredbåndsrouter langt bedre.',
              },
            ].map(item => (
              <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/fiber" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <div className="text-2xl mb-2">🔵</div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-800">Fiber internet →</h3>
            <p className="text-sm text-gray-500 mt-1">Sammenlign fibertilbud for den hurtigste og mest stabile forbindelse</p>
          </Link>
          <Link href="/" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-800">Alle udbydere →</h3>
            <p className="text-sm text-gray-500 mt-1">Se fuld sammenligning af alle bredbåndstyper og udbydere</p>
          </Link>
        </div>
      </div>
    </>
  );
}

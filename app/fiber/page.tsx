import { Metadata } from 'next';
import Link from 'next/link';
import { fiberProviders, providers } from '@/data/providers';
import ComparisonTable from '@/components/ComparisonTable';
import ProviderCard from '@/components/ProviderCard';
import SpeedCalculator from '@/components/SpeedCalculator';
import { CheckCircle, Zap, Wifi, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fiber Internet Guide 2024 – Sammenlign fibertilbud | BredbåndPilot',
  description:
    'Alt du skal vide om fiber internet i Danmark. Sammenlign fibertilbud fra Norlys, Hiper, Waoo og YouSee. Find den bedste pris på hurtigt og stabilt fiber.',
};

const sortedFiber = [...fiberProviders].sort((a, b) => b.rating - a.rating);

export default function FiberPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-14 px-4" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Forside</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Fiber internet</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Fiber internet i Danmark
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            Fiber er den hurtigste og mest stabile internetforbindelse. Vi hjælper dig med at finde
            det bedste fibertilbud til den rigtige pris — fra de bedste udbydere i Danmark.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <div className="bg-white/10 px-4 py-2 rounded-full">⚡ Op til 1000 Mbit/s</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">🔵 Symmetrisk hastighed</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">🔓 Mange tilbyder ingen binding</div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hvad er fiber internet?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fiber internet — også kaldet FTTH (Fiber to the Home) — er en bredbåndsteknologi der bruger
            glasfiberkabler til at sende data som lysstråler. Det giver markant højere hastigheder og mere
            stabil forbindelse sammenlignet med traditionelle kobberkabler eller kabelnetværk. I Danmark er
            fiberdækningen god, særligt i byerne og i mange landdistrikter, og stadig flere husstande får
            adgang til fiber hvert år.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            En af de store fordele ved fiber er den <strong>symmetriske hastighed</strong> — det betyder at
            download og upload er lige hurtige. Det er perfekt til videomøder, cloudstorage, gaming og streaming
            i 4K. Med fiber på 1000/1000 Mbit/s kan alle i husstanden streame, spille og arbejde hjemmefra
            samtidig uden problemer.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Prisen på fiber starter fra ca. 259 kr. om måneden for 1000/1000 Mbit/s, hvilket gør det til en
            meget konkurrencedygtig løsning sammenlignet med kabel og DSL. Mange udbydere tilbyder desuden
            fiber uden binding, så du kan skifte frit hvis du finder et bedre tilbud.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nedenfor finder du en oversigt over de bedste fibertilbud i Danmark, sorteret efter vores
            uafhængige vurdering baseret på pris, kundetilfredshed og teknisk kvalitet.
          </p>
        </div>

        {/* Top 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Top 3 fiber udbydere</h2>
          <p className="text-gray-600 mb-6">Vores anbefalede fibertilbud baseret på pris, hastighed og kundeanmeldelser.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sortedFiber.slice(0, 3).map((p, i) => (
              <ProviderCard key={p.id} provider={p} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Full table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alle fibertilbud — sammenlign og sorter</h2>
          <ComparisonTable providers={fiberProviders} showTypeFilter={false} />
        </section>

        {/* Speed Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Hvor hurtig fiber har du brug for?</h2>
          <p className="text-gray-600 mb-6">Beregn den rette hastighed til din husstand.</p>
          <div className="max-w-lg">
            <SpeedCalculator />
          </div>
        </section>

        {/* Fiber explained */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fiber internet — fordele og ulemper</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Fordele ved fiber
              </h3>
              <ul className="space-y-3 text-sm text-green-800">
                {[
                  'Ekstremt høje hastigheder — op til 1000 Mbit/s og derover',
                  'Symmetrisk hastighed: download = upload',
                  'Meget stabil forbindelse med lav latenstid',
                  'Ikke påvirket af vejrforhold eller interferens',
                  'Ideel til hjemmekontor, gaming og 4K-streaming',
                  'Mange udbydere med ingen binding',
                  'Fremtidssikret teknologi der kan skaleres yderligere',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="font-bold text-red-900 mb-4">Ulemper ved fiber</h3>
              <ul className="space-y-3 text-sm text-red-800">
                {[
                  'Ikke tilgængeligt alle steder i Danmark (endnu)',
                  'Kræver installation af fiberopsætning i hjemmet',
                  'Kan have installationstid på op til flere uger',
                  'Lidt dyrere end kabelbredbånd ved lavere hastigheder',
                  'Kræver strøm til ONT-boksen (mister internet ved strømsvigt)',
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

        {/* Provider details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">De bedste fiber udbydere — dybdegående gennemgang</h2>
          <div className="space-y-6 text-gray-600">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Norlys Fiber — Bedst vurderet</h3>
              <p className="leading-relaxed mb-3">
                Norlys er Danmarks største grønne energi- og telekoncern og er en af landets mest populære
                fiberleverandører. De tilbyder fiber på 1000/1000 Mbit/s til 299 kr./md. uden binding, og
                scorer 4,6 ud af 5 i gennemsnit baseret på kundeanmeldelser. Norlys er kendt for god
                kundeservice og stabil forbindelse.
              </p>
              <p className="leading-relaxed">
                En af de store fordele ved Norlys er, at de tilbyder fiber i rigtig mange dele af Danmark,
                og at oprettelsesgebyret er lavt. De har desuden mulighed for at kombinere fiber med el og
                varme, hvilket kan give rabat på samlet forbrug.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hiper — Billigst fiber</h3>
              <p className="leading-relaxed mb-3">
                Hiper er en relativt ny, dansk fiber-udbyder der fokuserer på simpel prissætning og
                ingen skjulte gebyrer. Med fiber til 259 kr./md. er de den billigste udbyder af 1000/1000
                Mbit/s fiber i Danmark. De scorer 4,5 ud af 5 og modtager konsekvent ros for transparent
                kommunikation og hurtig levering.
              </p>
              <p className="leading-relaxed">
                Hiper er særligt populær hos unge og digitale forbrugere, der sætter pris på online
                selvbetjening og ingen binding. Alt håndteres digitalt, hvilket holder omkostningerne nede.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waoo — Stærkt lokalt netværk</h3>
              <p className="leading-relaxed">
                Waoo er et unikt samarbejde mellem lokale energiselskaber i Danmark, der tilsammen dækker
                over 500.000 husstande. De tilbyder fiber på 1000/1000 Mbit/s til 279 kr./md. uden binding
                og scorer 4,4 ud af 5. Waoo er særligt stærke i landdistrikter og mellemstore byer, og
                kunderne fremhæver stabil forbindelse og god lokalt forankret support.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ: Fiber internet</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Kan jeg få fiber internet til min adresse?',
                a: 'Dækningen af fiber i Danmark er god og voksende. Gå ind på den ønskede udbyders hjemmeside og tjek adresseopslag for at se om fiber er tilgængeligt hos dig. Alternativt kan du kontakte en lokal udbyder som Waoo eller Norlys.',
              },
              {
                q: 'Hvor lang tid tager det at få installeret fiber?',
                a: 'Installationstiden varierer. I mange tilfælde kan tekniker komme inden for 1-2 uger. Hvis der skal graves kabler, kan det tage 4-8 uger. Selve installationen i hjemmet tager typisk 2-3 timer.',
              },
              {
                q: 'Er fiber internet bedre end kabelbredbånd?',
                a: 'Fiber er generelt hurtigere og mere stabilt, særligt hvad angår uploadhastighed. Kabel er godt til download men har typisk lavere upload. Til de fleste formål — streaming, gaming, hjemmekontor — er fiber det bedste valg.',
              },
              {
                q: 'Hvad koster fiber internet om måneden?',
                a: 'Fiber til 1000/1000 Mbit/s koster fra 259 kr./md. hos Hiper og op til 299 kr./md. hos Norlys og YouSee. Telenor tilbyder fiber til 229 kr./md. men med 6 mdr. binding og lavere hastighed (500 Mbit/s).',
              },
            ].map(item => (
              <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to other guides */}
        <section className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #1e40af, #0e7490)' }}>
          <h2 className="text-xl font-bold mb-2">Klar til at skifte til fiber?</h2>
          <p className="text-blue-100 mb-4">Brug vores sammenligningstabel ovenfor til at finde det bedste tilbud, eller læs vores guides.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guide/bredbaand-uden-binding"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Bredbånd uden binding →
            </Link>
            <Link
              href="/guide/hastighed-forklaret"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Hvad hastighed har du brug for? →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

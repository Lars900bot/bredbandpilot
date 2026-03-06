import { Metadata } from 'next';
import Link from 'next/link';
import { noBindingProviders } from '@/data/providers';
import ComparisonTable from '@/components/ComparisonTable';
import ProviderCard from '@/components/ProviderCard';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bredbånd Uden Binding 2024 – Find fleksibelt internet | BredbåndPilot',
  description:
    'Find de bedste bredbåndstilbud uden binding i Danmark. Sammenlign Norlys, Hiper, Waoo, YouSee og 3 der tilbyder fleksibelt internet uden kontrakt.',
};

const sortedNoBinding = [...noBindingProviders]
  .filter(p => p.type !== 'fiber (erhverv)')
  .sort((a, b) => a.priceFrom - b.priceFrom);

export default function BredbandUdenBindingPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-14 px-4" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #06b6d4 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Forside</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-blue-200">Guides</span>
            <ArrowRight className="w-3 h-3" />
            <span>Bredbånd uden binding</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Bredbånd uden binding
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            Sæt dig ikke fast i lange kontrakter. Vi viser dig de bedste bredbåndsabonnementer
            der kan opsiges fra måned til måned — helt uden bindingsperiode.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <div className="bg-white/10 px-4 py-2 rounded-full">🔓 Opsig når du vil</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">✅ 7 udbydere uden binding</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">💰 Fra 199 kr./md.</div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hvad betyder bredbånd uden binding?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bredbånd uden binding betyder at du kan opsige dit abonnement på ethvert tidspunkt uden
            at betale gebyr eller have en minimumskontrakt. Du er typisk bundet til en måneds opsigelsesvarsel,
            men der er ingen bindingsperiode der tvinger dig til at blive i 6, 12 eller 24 måneder.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For mange forbrugere er det den ideelle løsning: du beholder fleksibiliteten til at skifte
            udbyder hvis du finder et bedre tilbud, du flytter til et nyt sted, eller hvis du simpelthen
            er utilfreds med din nuværende udbyder. Uden binding er du i kontrol.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Heldigvis tilbyder de fleste store bredbåndssudbydere i Danmark nu bredbånd uden binding
            som standard. Det gælder Norlys, Hiper, Waoo, TDC/YouSee og alle mobile bredbåndsudbydere.
            Kun Stofa og Telenor kræver stadig 6 måneders binding på udvalgte produkter.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Herunder finder du en komplet oversigt over alle udbydere der tilbyder bredbånd uden binding,
            sorteret efter pris.
          </p>
        </div>

        {/* Top deals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bedste tilbud uden binding</h2>
          <p className="text-gray-600 mb-6">De billigste og bedst vurderede bredbåndsabonnementer helt uden bindingsperiode.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sortedNoBinding.slice(0, 3).map((p, i) => (
              <ProviderCard key={p.id} provider={p} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Full table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alle udbydere uden binding</h2>
          <ComparisonTable providers={noBindingProviders.filter(p => p.type !== 'fiber (erhverv)')} showTypeFilter={true} />
        </section>

        {/* Why no binding */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fordele ved bredbånd uden binding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Fordele
              </h3>
              <ul className="space-y-3 text-sm text-green-800">
                {[
                  'Fuld fleksibilitet — opsig hvornår du vil',
                  'Skift til bedre tilbud uden sanktioner',
                  'Ingen straf ved flytning til nyt hjem',
                  'Ingen risiko for at sidde fast i en dårlig aftale',
                  'Nemmere at prøve en ny udbyder',
                  'Markedskonkurrencen er til din fordel',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Hvornår er binding OK?
              </h3>
              <ul className="space-y-3 text-sm text-amber-800">
                {[
                  'Hvis bindingen giver en markant lavere pris',
                  'Hvis du er sikker på ikke at flytte inden for perioden',
                  'Hvis du er tilfreds med udbyderen og ikke forventer at skifte',
                  'Kampagnetilbud kan give 50-100 kr. rabat/md. ved binding',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to switch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sådan skifter du bredbåndsudbyder</h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Tjek din nuværende aftale',
                desc: 'Find ud af om du har binding og hvornår den udløber. Har du ingen binding, kan du opsige med 1 måneds varsel. Tjek din kontrakt eller ring til din udbyder.',
              },
              {
                step: '2',
                title: 'Find en ny udbyder',
                desc: 'Brug vores sammenligningstabel til at finde det bedste tilbud til din adresse og dine behov. Sammenlign pris, hastighed og binding.',
              },
              {
                step: '3',
                title: 'Bestil nyt abonnement',
                desc: 'Bestil det nye abonnement direkte hos den nye udbyder. Vælg en startdato der passer med opsigelsen af det gamle. De fleste udbydere hjælper med at koordinere skiftet.',
              },
              {
                step: '4',
                title: 'Opsig det gamle abonnement',
                desc: 'Opsig dit nuværende abonnement skriftligt — enten via mail, brev eller på udbyderens hjemmeside. Få en bekræftelse på opsigelsen.',
              },
              {
                step: '5',
                title: 'Nyd dit nye bredbånd',
                desc: 'Tekniker installerer evt. ny udstyr. For mobilt bredbånd og mange fiber-udbydere er det blot at tilslutte routeren og du er online.',
              },
            ].map(item => (
              <div key={item.step} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 mt-0.5"
                  style={{ backgroundColor: '#1e40af' }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Binding vs no binding table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sammenligning: binding vs. ingen binding</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#1e40af' }}>
                  <th className="px-4 py-3 text-white font-semibold text-left">Udbyder</th>
                  <th className="px-4 py-3 text-white font-semibold text-left">Pris/md.</th>
                  <th className="px-4 py-3 text-white font-semibold text-left">Hastighed</th>
                  <th className="px-4 py-3 text-white font-semibold text-left">Binding</th>
                  <th className="px-4 py-3 text-white font-semibold text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Hiper', price: '259 kr.', speed: '1000 Mbit/s', binding: 'Ingen', ok: true },
                  { name: 'Norlys Fiber', price: '299 kr.', speed: '1000 Mbit/s', binding: 'Ingen', ok: true },
                  { name: 'Waoo', price: '279 kr.', speed: '1000 Mbit/s', binding: 'Ingen', ok: true },
                  { name: 'TDC/YouSee', price: '299 kr.', speed: '1000 Mbit/s', binding: 'Ingen', ok: true },
                  { name: '3 (mobilt)', price: '199 kr.', speed: '300 Mbit/s', binding: 'Ingen', ok: true },
                  { name: 'Telenor', price: '229 kr.', speed: '500 Mbit/s', binding: '6 mdr.', ok: false },
                  { name: 'Stofa', price: '249 kr.', speed: '1000 Mbit/s', binding: '6 mdr.', ok: false },
                ].map((row, i) => (
                  <tr key={row.name} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.price}</td>
                    <td className="px-4 py-3 text-gray-600">{row.speed}</td>
                    <td className="px-4 py-3 text-gray-600">{row.binding}</td>
                    <td className="px-4 py-3">
                      {row.ok ? (
                        <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-0.5 rounded-full">✓ Ingen binding</span>
                      ) : (
                        <span className="text-orange-600 text-xs font-semibold bg-orange-100 px-2 py-0.5 rounded-full">⚠ Binding kræves</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ: Bredbånd uden binding</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Er bredbånd uden binding dyrere end med binding?',
                a: 'Ikke nødvendigvis. Hos Hiper, Norlys, Waoo og YouSee er prisen den samme uanset om du har binding eller ej. Binding giver kun rabat ved specielle kampagner. Tjek altid den aktuelle pris hos den specifikke udbyder.',
              },
              {
                q: 'Kan jeg opsige mit bredbånd midt i en måned?',
                a: 'Normalt opsiger du med 1 måneds varsel, og du betaler til udgangen af den periode du har betalt for. Tjek altid din udbyders specifikke betingelser i aftalen.',
              },
              {
                q: 'Hvad sker der med min udrustning (router) ved opsigelse?',
                a: 'Routeren er typisk din egen hvis du har købt den, men mange udbydere lejer routeren ud. Lejet udstyr skal returneres ved opsigelse — ellers kan du blive faktureret for det. Tjek altid vilkårene i aftalen.',
              },
              {
                q: 'Kan jeg skifte til en billigere pakke uden at opsige?',
                a: 'Ja, de fleste udbydere giver dig mulighed for at skifte til en billigere eller anderledes pakke inden for dit abonnement. Dette sker typisk ved næste faktureringsperiode. Kontakt din udbyder for at høre om mulighederne.',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/fiber" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <div className="text-2xl mb-2">🔵</div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-800">Fiber internet →</h3>
            <p className="text-sm text-gray-500 mt-1">Sammenlign alle fibertilbud</p>
          </Link>
          <Link href="/mobilt-bredbaand" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <div className="text-2xl mb-2">📡</div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-800">Mobilt bredbånd →</h3>
            <p className="text-sm text-gray-500 mt-1">Altid uden binding</p>
          </Link>
          <Link href="/guide/hastighed-forklaret" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-800">Hastighed forklaret →</h3>
            <p className="text-sm text-gray-500 mt-1">Hvad Mbit/s betyder</p>
          </Link>
        </div>
      </div>
    </>
  );
}

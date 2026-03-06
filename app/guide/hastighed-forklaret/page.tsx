import { Metadata } from 'next';
import Link from 'next/link';
import SpeedCalculator from '@/components/SpeedCalculator';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bredbåndshastighed Forklaret – Download, Upload og Ping | BredbåndPilot',
  description:
    'Forstå bredbåndshastighed. Hvad er Mbit/s, download og upload? Hvad er ping og latenstid? Guide til at vælge den rigtige hastighed til din husstand.',
};

export default function HastighedForklaretPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-14 px-4" style={{ background: 'linear-gradient(135deg, #0e7490 0%, #1e40af 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-cyan-200 mb-4">
            <Link href="/" className="hover:text-white">Forside</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-cyan-200">Guides</span>
            <ArrowRight className="w-3 h-3" />
            <span>Hastighed forklaret</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Bredbåndshastighed forklaret
          </h1>
          <p className="text-lg text-cyan-100 max-w-2xl leading-relaxed">
            Hvad er Mbit/s? Hvad er download og upload? Og hvad er ping? Vi forklarer det enkelt
            og hjælper dig med at finde den rette hastighed til din husstand.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Forstå bredbåndshastighed på 5 minutter</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Når du ser på bredbåndsabonnementer, støder du på begreber som Mbit/s, download, upload og ping.
            Det kan virke teknisk og forvirrende, men det er faktisk ret simpelt, når du forstår de grundlæggende
            begreber. Denne guide forklarer alt hvad du behøver at vide for at vælge den rette forbindelse.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Kort fortalt handler det om tre ting: <strong>hastighed ned</strong> (download), <strong>hastighed op</strong> (upload)
            og <strong>reaktionstid</strong> (ping). Kombinationen af disse tre faktorer bestemmer din
            samlede internetoplevelse.
          </p>
        </div>

        {/* Mbit/s explained */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Hvad er Mbit/s?</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mbit/s</strong> står for <em>megabit per sekund</em> og er den standard enhed for
              bredbåndshastighed. Jo højere tal, jo hurtigere kan du modtage og sende data over internettet.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              For at give et konkret billede: En standard Netflix-video i HD kræver ca. 5 Mbit/s, og i 4K
              kræves ca. 25 Mbit/s. En fil på 1 GB (som et spil eller en film) tager ca. 1,3 minutter at
              downloade på 100 Mbit/s, og kun 8 sekunder på 1000 Mbit/s.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {[
                { speed: '10 Mbit/s', use: 'Simpel surfing, email' },
                { speed: '50 Mbit/s', use: '1-2 personers streaming' },
                { speed: '100 Mbit/s', use: 'Familie med børn' },
                { speed: '500+ Mbit/s', use: 'Gamers og arbejde hjemmefra' },
              ].map(item => (
                <div key={item.speed} className="rounded-xl p-3 text-center" style={{ backgroundColor: '#eff6ff' }}>
                  <div className="font-black text-lg mb-1" style={{ color: '#1e40af' }}>{item.speed}</div>
                  <div className="text-xs text-gray-600">{item.use}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 text-sm text-amber-800">
            <strong>Husk:</strong> Mbit/s og MB/s er ikke det samme! 1 MB/s (megabyte) = 8 Mbit/s. Filstørrelser
            vises typisk i MB eller GB, mens internethastigheder vises i Mbit/s. Del altid med 8 for at konvertere.
          </div>
        </section>

        {/* Download */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⬇️ Download — hastighed ned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Hvad er downloadhastighed?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Downloadhastighed er, hvor hurtigt data kan flyttes fra internettet til dig — fra servere
                rundt om i verden til din computer, tablet eller telefon. Det er den hastighed du oplever
                når du streamer, surfer, downloader filer eller opdaterer apps.
              </p>
              <p className="text-gray-600 leading-relaxed">
                De fleste aktiviteter på internettet er primært download: at se YouTube, Netflix, Twitch,
                TikTok, læse nyheder, tjekke sociale medier og downloade spil. Downloadhastighed er
                derfor den vigtigste faktor for de fleste brugere.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Hvad har du brug for?</h3>
              <div className="space-y-3 text-sm">
                {[
                  { activity: 'Email og surfing', needed: '5 Mbit/s', persons: '1 person' },
                  { activity: 'HD-streaming (Netflix)', needed: '5-10 Mbit/s', persons: 'Per skærm' },
                  { activity: '4K HDR streaming', needed: '25 Mbit/s', persons: 'Per skærm' },
                  { activity: 'Online gaming', needed: '10-30 Mbit/s', persons: 'Per spiller' },
                  { activity: 'Videomøde (Zoom)', needed: '5-10 Mbit/s', persons: 'Per deltager' },
                  { activity: 'Download af store filer', needed: '100+ Mbit/s', persons: 'Anbefalet' },
                ].map(item => (
                  <div key={item.activity} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                      <div className="font-medium text-gray-800">{item.activity}</div>
                      <div className="text-gray-400 text-xs">{item.persons}</div>
                    </div>
                    <div className="font-bold text-blue-800">{item.needed}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upload */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⬆️ Upload — hastighed op</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Hvad er uploadhastighed?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Uploadhastighed er, hvor hurtigt data kan flyttes fra dig til internettet. Det er relevant
                når du sender emails med bilag, uploader billeder og videoer, streamer live eller deltager
                i videomøder.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Uploadhastighed er ofte overset, men den er kritisk vigtig for hjemmekontor og gaming.
                Fiber giver symmetrisk hastighed (ens download og upload), mens kabel typisk har meget
                lavere upload.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Hvornår er upload vigtigt?</h3>
              <div className="space-y-3 text-sm">
                {[
                  { scenario: 'Videomøder (Zoom, Teams)', upload: '5-10 Mbit/s op', important: true },
                  { scenario: 'Live streaming (Twitch)', upload: '10-25 Mbit/s op', important: true },
                  { scenario: 'Cloud backup', upload: '50+ Mbit/s op', important: true },
                  { scenario: 'Online gaming', upload: '5 Mbit/s op', important: false },
                  { scenario: 'Normal surfing', upload: '1 Mbit/s op', important: false },
                ].map(item => (
                  <div key={item.scenario} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="font-medium text-gray-800">{item.scenario}</div>
                    <div className={`font-bold text-sm ${item.important ? 'text-orange-600' : 'text-gray-500'}`}>
                      {item.upload}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl p-6" style={{ backgroundColor: '#eff6ff', border: '2px solid #1e40af' }}>
            <h3 className="font-bold text-gray-900 mb-2">🔵 Fiber = symmetrisk hastighed</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fiber er den eneste teknologi der tilbyder symmetrisk hastighed — det vil sige at download og
              upload er ens. Kabelbredbånd fra f.eks. Stofa tilbyder 1000 Mbit/s download men kun 100 Mbit/s
              upload. For hjemmekontor med mange videomøder og cloud-arbejde er fiber klart det bedste valg.
            </p>
          </div>
        </section>

        {/* Ping */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏓 Ping — latenstid og reaktionstid</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              Ping (eller latenstid) er den tid det tager for et signal at rejse fra din computer til en
              server og tilbage igen. Det måles i millisekunder (ms). Jo lavere ping, jo hurtigere reagerer
              internettet på dine handlinger.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ping er særligt vigtigt for online gaming, videoopkald og videokonferencer. Et høj ping (over
              100 ms) kan føre til hakken, forsinkelse og frustration. Fiber giver typisk et ping på 5-15 ms,
              mens mobilt bredbånd typisk er 15-50 ms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { range: '< 10 ms', quality: 'Fremragende', color: '#16a34a', bg: '#f0fdf4', use: 'Professionel gaming, real-time apps' },
              { range: '10-30 ms', quality: 'Meget godt', color: '#2563eb', bg: '#eff6ff', use: 'Gaming, videomøder, streaming' },
              { range: '30-60 ms', quality: 'Godt', color: '#d97706', bg: '#fffbeb', use: 'Normal browsing, casual gaming' },
              { range: '> 100 ms', quality: 'Dårligt', color: '#dc2626', bg: '#fef2f2', use: 'Problematisk ved gaming og video' },
            ].map(item => (
              <div key={item.range} className="rounded-xl p-4 text-center border" style={{ backgroundColor: item.bg, borderColor: item.color + '40' }}>
                <div className="text-lg font-black mb-1" style={{ color: item.color }}>{item.range}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{item.quality}</div>
                <div className="text-xs text-gray-500">{item.use}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Real vs. advertised */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Annonceret vs. reel hastighed</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              Udbydere annoncerer den maksimale tekniske hastighed, men i praksis kan den reelle hastighed
              være lavere. Faktorer der påvirker din reelle hastighed inkluderer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {[
                { factor: 'WiFi-forbindelsesstyrke', impact: 'WiFi kan reducere hastighed med 10-50% vs. kabel' },
                { factor: 'Router-kvalitet', impact: 'En gammel router kan bremse selv et hurtigt abonnement' },
                { factor: 'Trængsel på nettet', impact: 'Myldretider (17-21) kan give lavere hastigheder' },
                { factor: 'Enheden du bruger', impact: 'Ældre enheder har langsommere netværkskort' },
                { factor: 'Serverens hastighed', impact: 'Serveren du downloader fra kan bremse dig' },
                { factor: 'Kabler og installationer', impact: 'Dårlige kabler fra modem til router giver tab' },
              ].map(item => (
                <div key={item.factor} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-blue-600 mt-0.5">→</div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.factor}</div>
                    <div className="text-gray-600">{item.impact}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
              <strong>Tip:</strong> Test din faktiske hastighed på speedtest.net. Brug gerne et LAN-kabel direkte fra
              routeren for at se den maksimale hastighed. Sammenlign med den annoncerede hastighed fra din udbyder.
            </div>
          </div>
        </section>

        {/* Speed Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Find den rette hastighed til din husstand</h2>
          <p className="text-gray-600 mb-6">Brug vores beregner til at finde ud af hvad du faktisk har brug for.</p>
          <div className="max-w-lg">
            <SpeedCalculator />
          </div>
        </section>

        {/* Comparison table simplified */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hastighed pr. teknologi</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#1e40af' }}>
                  <th className="px-4 py-3 text-white font-semibold text-left">Teknologi</th>
                  <th className="px-4 py-3 text-white font-semibold text-left">Typisk download</th>
                  <th className="px-4 py-3 text-white font-semibold text-left">Typisk upload</th>
                  <th className="px-4 py-3 text-white font-semibold text-left">Ping</th>
                  <th className="px-4 py-3 text-white font-semibold text-left">Bemærkning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tech: 'Fiber (FTTH)', dl: '100-1000 Mbit/s', ul: '100-1000 Mbit/s', ping: '5-15 ms', note: 'Bedst til alle formål' },
                  { tech: 'Kabel (HFC)', dl: '100-1000 Mbit/s', ul: '10-100 Mbit/s', ping: '10-30 ms', note: 'Asymmetrisk upload' },
                  { tech: '5G mobilt', dl: '50-300 Mbit/s', ul: '20-100 Mbit/s', ping: '15-40 ms', note: 'Variabel, afhænger af dækning' },
                  { tech: '4G LTE', dl: '20-100 Mbit/s', ul: '10-50 Mbit/s', ping: '30-60 ms', note: 'God dækning overalt' },
                  { tech: 'DSL/ADSL', dl: '5-50 Mbit/s', ul: '1-10 Mbit/s', ping: '20-50 ms', note: 'Udgående teknologi' },
                ].map((row, i) => (
                  <tr key={row.tech} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.tech}</td>
                    <td className="px-4 py-3 text-gray-700">{row.dl}</td>
                    <td className="px-4 py-3 text-gray-700">{row.ul}</td>
                    <td className="px-4 py-3 text-gray-700">{row.ping}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ: Hastighed og bredbånd</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Har jeg brug for 1000 Mbit/s?',
                a: 'De fleste husstande på 2-4 personer har mere end nok med 100-500 Mbit/s. 1000 Mbit/s (1 Gbit/s) er fremtidssikret og perfekt til store husstande med mange enheder, men langt de fleste aktiviteter kræver aldrig mere end 100 Mbit/s pr. person.',
              },
              {
                q: 'Hvorfor er min wifi langsommere end mit abonnement?',
                a: 'WiFi har overhead og er påvirket af afstand til router, vægge og interferens fra andre enheder. Brug et LAN-kabel direkte fra routeren for at opnå den fulde hastighed. Opdater evt. til en nyere WiFi 6-router.',
              },
              {
                q: 'Hvad er forskellen på Mbit/s og MB/s?',
                a: 'Mbit/s = megabit per sekund (internethastighed). MB/s = megabyte per sekund (filstørrelser). 1 MB = 8 Mbit. Så 100 Mbit/s giver ca. 12,5 MB/s download. Mange forveksler disse to, men de er forskellige enheder.',
              },
              {
                q: 'Kan ping blive bedre med et dyrere abonnement?',
                a: 'Ikke nødvendigvis. Ping afhænger mere af teknologien (fiber vs. kabel vs. mobil) og din fysiske afstand til serveren end af selve abonnementsprisen. Fiber giver generelt den laveste ping.',
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
          <Link href="/" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-800">Sammenlign udbydere →</h3>
            <p className="text-sm text-gray-500 mt-1">Find det hurtigste og billigste bredbånd</p>
          </Link>
          <Link href="/fiber" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <div className="text-2xl mb-2">🔵</div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-800">Fiber internet →</h3>
            <p className="text-sm text-gray-500 mt-1">Hurtigste forbindelses-type</p>
          </Link>
          <Link href="/guide/bredbaand-uden-binding" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <div className="text-2xl mb-2">🔓</div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-800">Uden binding →</h3>
            <p className="text-sm text-gray-500 mt-1">Fleksible bredbåndsaftaler</p>
          </Link>
        </div>
      </div>
    </>
  );
}

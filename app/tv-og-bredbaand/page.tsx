import { Metadata } from 'next';
import Link from 'next/link';
import { providers } from '@/data/providers';
import { ExternalLink, ArrowRight, Star, Tv } from 'lucide-react';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'TV og Bredbånd Pakker 2024 – Sammenlign kombinationsabonnementer | BredbåndPilot',
  description:
    'Sammenlign TV og bredbånd pakker fra Stofa, YouSee, Norlys og Waoo. Find den bedste kombinationsaftale og spar penge på internet og TV.',
};

const tvProviders = [
  {
    id: 'stofa-tv',
    provider: 'Stofa',
    tvChannels: 70,
    streaming: ['DR Play', 'TV 2 Play', 'Discovery+'],
    broadband: '500 Mbit/s',
    price: 449,
    originalPrice: 598,
    binding: '6 mdr.',
    url: 'https://www.stofa.dk',
    rating: 4.2,
    tag: 'Mest populær',
    description: 'Stofas kombipakke inkluderer 70 TV-kanaler, dansk og international streaming og hurtigt kabelbredbånd. God pakke til familier.',
  },
  {
    id: 'yousee-tv',
    provider: 'TDC/YouSee',
    tvChannels: 100,
    streaming: ['DR Play', 'TV 2 Play', 'YouSee on demand'],
    broadband: '1000 Mbit/s',
    price: 549,
    originalPrice: 698,
    binding: 'Ingen binding',
    url: 'https://www.yousee.dk',
    rating: 4.1,
    tag: 'Flest kanaler',
    description: 'YouSee tilbyder Danmarks største TV-pakke med over 100 kanaler kombineret med 1000 Mbit/s fiber. Inkluderer gode on-demand muligheder.',
  },
  {
    id: 'norlys-tv',
    provider: 'Norlys',
    tvChannels: 55,
    streaming: ['DR Play', 'TV 2 Play', 'Norlys TV'],
    broadband: '1000 Mbit/s',
    price: 499,
    originalPrice: 628,
    binding: 'Ingen binding',
    url: 'https://www.norlys.dk',
    rating: 4.4,
    tag: 'Bedst vurderet',
    description: 'Norlys tilbyder en komplet pakke med fiber og TV. God billedkvalitet og brugervenlig TV-boks med adgang til de populære streamingplatforme.',
  },
  {
    id: 'waoo-tv',
    provider: 'Waoo',
    tvChannels: 60,
    streaming: ['DR Play', 'TV 2 Play', 'Waoo TV'],
    broadband: '1000 Mbit/s',
    price: 479,
    originalPrice: 618,
    binding: 'Ingen binding',
    url: 'https://www.waoo.dk',
    rating: 4.3,
    description: 'Waoos TV + fiber pakke er populær i lokalområderne. God TV-platform med lokal forankring og konkurrencedygtige priser.',
  },
];

export default function TvOgBredbandPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-14 px-4" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #1e40af 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-purple-200 mb-4">
            <Link href="/" className="hover:text-white">Forside</Link>
            <ArrowRight className="w-3 h-3" />
            <span>TV + bredbånd</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            TV og bredbånd pakker
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl leading-relaxed">
            Spar penge ved at kombinere TV og bredbånd i én pakke. Vi sammenligner de bedste
            kombinationsabonnementer fra de store udbydere i Danmark.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <div className="bg-white/10 px-4 py-2 rounded-full">📺 Op til 100 TV-kanaler</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">💰 Spar op til 150 kr./md.</div>
            <div className="bg-white/10 px-4 py-2 rounded-full">🎬 Streaming inkluderet</div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Intro */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kombiner TV og internet — og spar penge</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mange danskere har separat TV og bredbånd fra to forskellige udbydere — men det er sjældent
            det billigste valg. Kombinationspakker fra TV- og bredbåndsudbydere kan spare dig 100-200 kr.
            om måneden sammenlignet med to separate abonnementer.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            I Danmark er de største TV + bredbånds-udbydere Stofa, TDC/YouSee, Norlys og Waoo. Alle tilbyder
            kombinerede pakker der inkluderer TV-kanaler, streaming-adgang og hurtigt internet — alt i én
            månedlig regning.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Moderne TV-pakker er ikke kun lineære kanaler. De inkluderer typisk adgang til on-demand
            platform, mulighed for at optage programmer, catch-up TV og integration med de store
            streamingplatforme som Netflix, HBO Max og Disney+.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nedenfor finder du vores sammenligning af de bedste TV + bredbånds-pakker i Danmark.
            Vi har inkluderet priser, kanalantal, inkluderet streaming og bindingsperiode.
          </p>
        </div>

        {/* TV packages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bedste TV + bredbånd pakker</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tvProviders.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Tv className="w-5 h-5" style={{ color: '#1e40af' }} />
                      <h3 className="font-bold text-gray-900 text-lg">{pkg.provider} TV + bredbånd</h3>
                    </div>
                    {pkg.tag && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-cyan-100 text-cyan-800">
                        {pkg.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{pkg.price} kr.</div>
                    {pkg.originalPrice && (
                      <div className="text-xs text-gray-400 line-through">{pkg.originalPrice} kr./md.</div>
                    )}
                    <div className="text-xs text-gray-500">pr. måned</div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{pkg.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                    <div className="text-xs text-gray-500 mb-0.5">TV kanaler</div>
                    <div className="font-bold text-gray-900">{pkg.tvChannels}+</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                    <div className="text-xs text-gray-500 mb-0.5">Bredbånd</div>
                    <div className="font-bold text-gray-900 text-xs">{pkg.broadband}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                    <div className="text-xs text-gray-500 mb-0.5">Binding</div>
                    <div className="font-bold text-gray-900 text-xs">{pkg.binding}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Inkluderet streaming</div>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.streaming.map(s => (
                      <span key={s} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={clsx('w-4 h-4', i < Math.round(pkg.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300')}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{pkg.rating}</span>
                  </div>
                  <a
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    Se pakke <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What to look for */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hvad skal man kigge efter i en TV + bredbånd pakke?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-base">📺 TV-kanaler og indhold</h3>
              <p className="leading-relaxed mb-3">
                Kanalantallet i sig selv fortæller ikke hele historien. Vigtigere er det at tjekke om de kanaler
                du faktisk ser er inkluderet — F.eks. TV 2, DR, Discovery, Viasat Sport m.fl. Tjek også om
                pakken inkluderer adgang til on-demand og catch-up TV.
              </p>
              <p className="leading-relaxed">
                Mange pakker inkluderer nu også adgang til DR Play og TV 2 Play som ekstra apps i TV-boksen,
                hvilket er et stort plus.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-base">⚡ Bredbåndshastighed</h3>
              <p className="leading-relaxed mb-3">
                Til streaming af 4K HDR TV kræves minimum 25 Mbit/s per enhed. Til en husstand med 2-4 personer
                der streamer, arbejder hjemmefra og bruger tablets, anbefaler vi minimum 100 Mbit/s — helst 500
                Mbit/s eller derover.
              </p>
              <p className="leading-relaxed">
                Kombinationspakker inkluderer typisk 500-1000 Mbit/s, hvilket er mere end rigeligt til de
                fleste husstande.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-base">💰 Pris og binding</h3>
              <p className="leading-relaxed mb-3">
                Kombinationspakker er typisk billigere end to separate abonnementer. Regn altid begge dele
                ud og sammenlign den samlede månedspris. Husk at tjekke om der er oprettelsesgebyr og
                hvilken bindingsperiode der gælder.
              </p>
              <p className="leading-relaxed">
                Norlys og Waoo tilbyder TV + bredbånd uden binding, mens Stofa kræver 6 måneder.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-base">🖥️ TV-boks og platform</h3>
              <p className="leading-relaxed mb-3">
                TV-boksen og dens brugergrænseflade er vigtig for den daglige oplevelse. Moderne TV-bokse
                har 4K HDR-support, stemmefjernbetjening og apps til Netflix, Disney+ m.fl.
              </p>
              <p className="leading-relaxed">
                Tjek om boksen inkluderes i prisen eller koster ekstra. Alternativt kan du bruge en smart-TV
                eller Apple TV i stedet for en dedikeret TV-boks.
              </p>
            </div>
          </div>
        </section>

        {/* Streaming vs cable TV */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">TV-pakke vs. streaming-only — hvad er bedst?</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              Med fremkomsten af Netflix, Disney+, HBO Max og TV 2 Play, vælger mange danskere at droppe
              den traditionelle TV-pakke og nøjes med streaming. Det kan sagtens fungere, men er ikke altid
              det billigste. En fuldt udstyret streamingliste (Netflix, Disney+, HBO Max, TV 2 Play) kan
              nemt løbe op i 300-400 kr./md. plus bredbånd.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              En kombipakke med TV og bredbånd til 449-549 kr./md. inkluderer lineær TV, on-demand og
              mange streamingintegrationer — og er for mange husstande det billigste og mest praktiske valg.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vores anbefaling: Hvis du ser TV 2, DR og internationale kanaler jævnligt, er en TV + bredbånd
              pakke formentlig det bedste valg. Ser du primært Netflix og egne valgte streamingplatforme,
              kan du nøjes med et bredbåndsabonnement og selvstændig streaming.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ: TV og bredbånd pakker</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Er TV + bredbånd billigere end separat?',
                a: 'I de fleste tilfælde ja. Udbydere giver typisk rabat på 100-200 kr./md. ved kombination. Regn begge dele ud og sammenlign den samlede pris for at se om det kan betale sig.',
              },
              {
                q: 'Kan jeg beholde mine Netflix og Disney+ abonnementer?',
                a: 'Ja, de fleste TV + bredbånd pakker inkluderer apps til Netflix, Disney+, HBO Max m.fl. i TV-boksen. Du beholder dine egne abonnementer og får adgang via TV-boksens app-menu.',
              },
              {
                q: 'Hvad er forskellen på kabel-TV og fiber-TV?',
                a: 'Kabel-TV bruger det eksisterende kabelnetværk og er typisk tilgængeligt i byer og tæt befolkede områder. Fiber-TV leveres via glasfiberkabel og tilbyder højere kvalitet og hastighed. Begge er gode løsninger til TV.',
              },
              {
                q: 'Kan jeg bruge en antenne i stedet for et TV-abonnement?',
                a: 'Ja, en antenne giver adgang til de danske public service-kanaler gratis (DR, TV 2 m.fl.). Du kan kombinere dette med kun et bredbåndsabonnement og streaming. Det er den billigste løsning, men med færrest kanaler.',
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

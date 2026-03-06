export type ProviderType = 'fiber' | 'kabel' | 'mobil' | 'fiber (erhverv)';

export interface Provider {
  id: string;
  name: string;
  downloadSpeed: number; // Mbit/s
  uploadSpeed: number;   // Mbit/s
  priceFrom: number;     // kr/md
  type: ProviderType;
  binding: string; // 'Ingen binding' | '6 mdr.'
  bindingMonths: number;
  url: string;
  rating: number;
  tag?: string;
  description: string;
}

export const providers: Provider[] = [
  {
    id: 'norlys',
    name: 'Norlys Fiber',
    downloadSpeed: 1000,
    uploadSpeed: 1000,
    priceFrom: 299,
    type: 'fiber',
    binding: 'Ingen binding',
    bindingMonths: 0,
    url: 'https://www.norlys.dk',
    rating: 4.6,
    tag: 'Bedst vurderet',
    description: 'Norlys er Danmarks største grønne energi- og telekoncern. Deres fiber tilbyder symmetrisk 1000/1000 Mbit/s uden binding.',
  },
  {
    id: 'hiper',
    name: 'Hiper',
    downloadSpeed: 1000,
    uploadSpeed: 1000,
    priceFrom: 259,
    type: 'fiber',
    binding: 'Ingen binding',
    bindingMonths: 0,
    url: 'https://www.hiper.dk',
    rating: 4.5,
    tag: 'Billigst fiber',
    description: 'Hiper er en dansk fiber-udbyder med fokus på enkel prissætning og ingen skjulte gebyrer. Populær hos prissøgende forbrugere.',
  },
  {
    id: 'waoo',
    name: 'Waoo',
    downloadSpeed: 1000,
    uploadSpeed: 1000,
    priceFrom: 279,
    type: 'fiber',
    binding: 'Ingen binding',
    bindingMonths: 0,
    url: 'https://www.waoo.dk',
    rating: 4.4,
    description: 'Waoo er et samarbejde mellem lokale energiselskaber og tilbyder fiber i store dele af Danmark med stabil og hurtig forbindelse.',
  },
  {
    id: 'stofa',
    name: 'Stofa',
    downloadSpeed: 1000,
    uploadSpeed: 100,
    priceFrom: 249,
    type: 'kabel',
    binding: '6 mdr.',
    bindingMonths: 6,
    url: 'https://www.stofa.dk',
    rating: 4.2,
    tag: 'Billigst samlet',
    description: 'Stofa tilbyder kabelinternet via HFC-nettet med høj downloadhastighed. God til husstande med mange streamende enheder.',
  },
  {
    id: 'yousee',
    name: 'TDC/YouSee',
    downloadSpeed: 1000,
    uploadSpeed: 1000,
    priceFrom: 299,
    type: 'fiber',
    binding: 'Ingen binding',
    bindingMonths: 0,
    url: 'https://www.yousee.dk',
    rating: 4.1,
    description: 'YouSee er en af Danmarks største teleudbydere og tilbyder både fiber og kabel. Stærk dækning over hele landet.',
  },
  {
    id: 'telenor',
    name: 'Telenor',
    downloadSpeed: 500,
    uploadSpeed: 500,
    priceFrom: 229,
    type: 'fiber',
    binding: '6 mdr.',
    bindingMonths: 6,
    url: 'https://www.telenor.dk',
    rating: 4.1,
    description: 'Telenor tilbyder fiber til attraktive priser med god kundeservice og stabile forbindelser i hele Danmark.',
  },
  {
    id: 'telia',
    name: 'Telia Mobil',
    downloadSpeed: 300,
    uploadSpeed: 300,
    priceFrom: 219,
    type: 'mobil',
    binding: 'Ingen binding',
    bindingMonths: 0,
    url: 'https://www.telia.dk',
    rating: 4.0,
    description: 'Telia tilbyder 5G mobilt bredbånd med god dækning i byerne. Fleksibel løsning der kan bruges hvor som helst.',
  },
  {
    id: '3dk',
    name: '3 (mobilt)',
    downloadSpeed: 300,
    uploadSpeed: 300,
    priceFrom: 199,
    type: 'mobil',
    binding: 'Ingen binding',
    bindingMonths: 0,
    url: 'https://www.3.dk',
    rating: 4.0,
    tag: 'Billigst mobil',
    description: '3 er pionerer inden for mobilt bredbånd i Danmark og tilbyder 5G-hastigheder til meget konkurrencedygtige priser.',
  },
  {
    id: 'globalconnect',
    name: 'Globalconnect',
    downloadSpeed: 10000,
    uploadSpeed: 10000,
    priceFrom: 499,
    type: 'fiber (erhverv)',
    binding: 'Ingen binding',
    bindingMonths: 0,
    url: 'https://www.globalconnect.dk',
    rating: 4.3,
    tag: 'Erhverv',
    description: 'Globalconnect er specialiseret i erhvervsfiber med op til 10 Gbit/s symmetrisk hastighed og dedikeret support til virksomheder.',
  },
];

export const fiberProviders = providers.filter(p => p.type === 'fiber');
export const mobileProviders = providers.filter(p => p.type === 'mobil');
export const noBindingProviders = providers.filter(p => p.bindingMonths === 0);

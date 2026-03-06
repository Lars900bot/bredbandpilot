import { Provider } from '@/data/providers';
import { Star, ExternalLink, Zap, Clock } from 'lucide-react';
import clsx from 'clsx';

interface ProviderCardProps {
  provider: Provider;
  rank?: number;
}

const typeColors: Record<string, string> = {
  fiber: 'bg-blue-100 text-blue-800',
  kabel: 'bg-purple-100 text-purple-800',
  mobil: 'bg-green-100 text-green-800',
  'fiber (erhverv)': 'bg-orange-100 text-orange-800',
};

export default function ProviderCard({ provider, rank }: ProviderCardProps) {
  const stars = Math.round(provider.rating);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {rank && (
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ backgroundColor: rank === 1 ? '#06b6d4' : rank === 2 ? '#1e40af' : '#6b7280' }}
            >
              {rank}
            </div>
          )}
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{provider.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={clsx('text-xs px-2 py-0.5 rounded-full font-medium', typeColors[provider.type])}>
                {provider.type.charAt(0).toUpperCase() + provider.type.slice(1)}
              </span>
              {provider.tag && (
                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-cyan-100 text-cyan-800">
                  {provider.tag}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="text-2xl font-bold text-gray-900">{provider.priceFrom} kr.</div>
          <div className="text-xs text-gray-500">pr. måned</div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-3 leading-relaxed">{provider.description}</p>

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Zap className="w-3.5 h-3.5" style={{ color: '#06b6d4' }} />
            <span className="text-xs text-gray-500">Download</span>
          </div>
          <div className="font-bold text-gray-900 text-sm">
            {provider.downloadSpeed >= 1000
              ? `${provider.downloadSpeed / 1000} Gbit/s`
              : `${provider.downloadSpeed} Mbit/s`}
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Zap className="w-3.5 h-3.5 rotate-180" style={{ color: '#1e40af' }} />
            <span className="text-xs text-gray-500">Upload</span>
          </div>
          <div className="font-bold text-gray-900 text-sm">
            {provider.uploadSpeed >= 1000
              ? `${provider.uploadSpeed / 1000} Gbit/s`
              : `${provider.uploadSpeed} Mbit/s`}
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-500">Binding</span>
          </div>
          <div className="font-bold text-gray-900 text-sm">{provider.binding}</div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={clsx('w-4 h-4', i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300')}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">{provider.rating}</span>
        </div>

        <a
          href={provider.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#1e40af' }}
        >
          Se tilbud
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

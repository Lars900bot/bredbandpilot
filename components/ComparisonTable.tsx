'use client';

import { useState } from 'react';
import { Provider } from '@/data/providers';
import { ArrowUpDown, ArrowUp, ArrowDown, Star, ExternalLink } from 'lucide-react';
import clsx from 'clsx';

type SortKey = 'priceFrom' | 'downloadSpeed' | 'rating' | 'bindingMonths';
type SortDir = 'asc' | 'desc';

interface ComparisonTableProps {
  providers: Provider[];
  showTypeFilter?: boolean;
}

const typeColors: Record<string, string> = {
  fiber: 'bg-blue-100 text-blue-800',
  kabel: 'bg-purple-100 text-purple-800',
  mobil: 'bg-green-100 text-green-800',
  'fiber (erhverv)': 'bg-orange-100 text-orange-800',
};

export default function ComparisonTable({ providers, showTypeFilter = true }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('priceFrom');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [typeFilter, setTypeFilter] = useState<string>('alle');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir(key === 'rating' || key === 'downloadSpeed' ? 'desc' : 'asc');
    }
  };

  const filtered = typeFilter === 'alle' ? providers : providers.filter(p => p.type === typeFilter);

  const sorted = [...filtered].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    if (typeof av === 'number' && typeof bv === 'number') {
      return sortDir === 'asc' ? av - bv : bv - av;
    }
    return 0;
  });

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ArrowUpDown className="w-4 h-4 opacity-40" />;
    return sortDir === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />;
  };

  const types = ['alle', ...Array.from(new Set(providers.map(p => p.type)))];

  return (
    <div>
      {showTypeFilter && (
        <div className="flex flex-wrap gap-2 mb-4">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={clsx(
                'px-3 py-1.5 rounded-full text-sm font-medium transition-colors capitalize',
                typeFilter === t ? 'text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
              style={typeFilter === t ? { backgroundColor: '#1e40af' } : {}}
            >
              {t === 'alle' ? 'Alle typer' : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left" style={{ backgroundColor: '#1e40af' }}>
              <th className="px-4 py-3 text-white font-semibold">Udbyder</th>
              <th className="px-4 py-3 text-white font-semibold">Type</th>
              <th className="px-4 py-3 text-white font-semibold">
                <button
                  onClick={() => handleSort('downloadSpeed')}
                  className="flex items-center gap-1 hover:opacity-80"
                >
                  Hastighed <SortIcon col="downloadSpeed" />
                </button>
              </th>
              <th className="px-4 py-3 text-white font-semibold">
                <button
                  onClick={() => handleSort('priceFrom')}
                  className="flex items-center gap-1 hover:opacity-80"
                >
                  Pris/md <SortIcon col="priceFrom" />
                </button>
              </th>
              <th className="px-4 py-3 text-white font-semibold">
                <button
                  onClick={() => handleSort('bindingMonths')}
                  className="flex items-center gap-1 hover:opacity-80"
                >
                  Binding <SortIcon col="bindingMonths" />
                </button>
              </th>
              <th className="px-4 py-3 text-white font-semibold">
                <button
                  onClick={() => handleSort('rating')}
                  className="flex items-center gap-1 hover:opacity-80"
                >
                  Rating <SortIcon col="rating" />
                </button>
              </th>
              <th className="px-4 py-3 text-white font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((p, i) => (
              <tr
                key={p.id}
                className={clsx(
                  'border-t border-gray-100 hover:bg-blue-50 transition-colors',
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                )}
              >
                <td className="px-4 py-3">
                  <div className="font-semibold text-gray-900">{p.name}</div>
                  {p.tag && (
                    <span className="text-xs bg-cyan-100 text-cyan-800 px-1.5 py-0.5 rounded-full">{p.tag}</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span className={clsx('text-xs px-2 py-1 rounded-full font-medium', typeColors[p.type])}>
                    {p.type.charAt(0).toUpperCase() + p.type.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {p.downloadSpeed >= 1000 ? `${p.downloadSpeed / 1000} Gbit/s` : `${p.downloadSpeed} Mbit/s`}
                  <span className="text-gray-400 text-xs"> / {p.uploadSpeed >= 1000 ? `${p.uploadSpeed / 1000}G` : `${p.uploadSpeed}M`}</span>
                </td>
                <td className="px-4 py-3 font-bold text-gray-900">
                  {p.priceFrom} kr.
                </td>
                <td className="px-4 py-3 text-gray-600">{p.binding}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-700">{p.rating}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold whitespace-nowrap hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#06b6d4' }}
                  >
                    Se tilbud <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">* Priser er vejledende. Klik på &ldquo;Se tilbud&rdquo; for aktuelle priser.</p>
    </div>
  );
}

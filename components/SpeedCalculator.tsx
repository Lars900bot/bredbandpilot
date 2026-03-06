'use client';

import { useState, useMemo } from 'react';
import { providers } from '@/data/providers';
import { Zap, Users, ExternalLink } from 'lucide-react';
import clsx from 'clsx';

type Usage = 'casual' | 'streaming' | 'gaming' | 'hjemmekontor';

const usageLabels: Record<Usage, string> = {
  casual: 'Afslappet surfing',
  streaming: 'Streaming / video',
  gaming: 'Online gaming',
  hjemmekontor: 'Hjemmekontor',
};

const usageIcons: Record<Usage, string> = {
  casual: '📱',
  streaming: '📺',
  gaming: '🎮',
  hjemmekontor: '💼',
};

// Base Mbit/s per person per usage type
const usageMbits: Record<Usage, number> = {
  casual: 5,
  streaming: 25,
  gaming: 30,
  hjemmekontor: 20,
};

export default function SpeedCalculator() {
  const [persons, setPersons] = useState(2);
  const [usage, setUsage] = useState<Usage>('streaming');
  const [calculated, setCalculated] = useState(false);

  const needed = useMemo(() => {
    const base = persons * usageMbits[usage];
    // Add 20% buffer
    return Math.ceil(base * 1.2);
  }, [persons, usage]);

  const recommended = useMemo(() => {
    if (!calculated) return null;
    return (
      providers
        .filter(p => p.downloadSpeed >= needed && p.type !== 'fiber (erhverv)')
        .sort((a, b) => a.priceFrom - b.priceFrom)[0] || null
    );
  }, [needed, calculated]);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: '#06b6d4' }}
        >
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Hastigheds-beregner</h3>
          <p className="text-sm text-gray-500">Find den rette hastighed til din husstand</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Persons */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
            <Users className="w-4 h-4" style={{ color: '#1e40af' }} />
            Antal personer i husstanden: <span className="text-xl font-bold" style={{ color: '#1e40af' }}>{persons}</span>
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPersons(Math.max(1, persons - 1))}
              className="w-10 h-10 rounded-full border-2 font-bold text-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
              style={{ borderColor: '#1e40af', color: '#1e40af' }}
            >
              −
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <button
                  key={n}
                  onClick={() => setPersons(n)}
                  className={clsx(
                    'w-9 h-9 rounded-full text-sm font-semibold transition-colors',
                    persons === n ? 'text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                  style={persons === n ? { backgroundColor: '#1e40af' } : {}}
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPersons(Math.min(10, persons + 1))}
              className="w-10 h-10 rounded-full border-2 font-bold text-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
              style={{ borderColor: '#1e40af', color: '#1e40af' }}
            >
              +
            </button>
          </div>
        </div>

        {/* Usage */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Primær brug af internet
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(usageLabels) as Usage[]).map(u => (
              <button
                key={u}
                onClick={() => setUsage(u)}
                className={clsx(
                  'flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all text-sm',
                  usage === u
                    ? 'text-white border-transparent'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'
                )}
                style={usage === u ? { backgroundColor: '#1e40af', borderColor: '#1e40af' } : {}}
              >
                <span className="text-xl">{usageIcons[u]}</span>
                <span className="font-medium">{usageLabels[u]}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setCalculated(true)}
          className="w-full py-3 rounded-xl text-white font-bold text-base transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#06b6d4' }}
        >
          Beregn min hastighed →
        </button>

        {calculated && (
          <div className="rounded-xl p-5" style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #1e40af' }}>
            <div className="text-sm text-gray-600 mb-1">Din husstand har brug for mindst</div>
            <div className="text-4xl font-black mb-1" style={{ color: '#1e40af' }}>
              {needed} Mbit/s
            </div>
            <div className="text-sm text-gray-500 mb-4">
              ({persons} {persons === 1 ? 'person' : 'personer'} × {usageMbits[usage]} Mbit/s + 20% buffer)
            </div>

            {recommended && (
              <div className="bg-white rounded-xl p-4 border border-blue-200">
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#06b6d4' }}>
                  Anbefalet løsning
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{recommended.name}</div>
                    <div className="text-sm text-gray-600">
                      {recommended.downloadSpeed} Mbit/s · fra {recommended.priceFrom} kr./md
                    </div>
                    <div className="text-xs text-gray-400">{recommended.binding}</div>
                  </div>
                  <a
                    href={recommended.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    Se tilbud <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { providers } from '@/data/providers';
import { ExternalLink, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Hvad er vigtigst for dig?',
    options: [
      { label: '💰 Laveste pris', value: 'pris' },
      { label: '⚡ Højeste hastighed', value: 'hastighed' },
      { label: '🔓 Ingen binding', value: 'frihed' },
      { label: '📱 Fleksibilitet (flyt med)', value: 'fleksibel' },
    ],
  },
  {
    id: 2,
    text: 'Hvilken forbindelsestype foretrækker du?',
    options: [
      { label: '🔵 Fiber (hurtigst, stabilt)', value: 'fiber' },
      { label: '📡 Mobilt bredbånd (ingen installatør)', value: 'mobil' },
      { label: '🟣 Kabel (godt til download)', value: 'kabel' },
      { label: '🤷 Ligeglad, bare billigst', value: 'any' },
    ],
  },
  {
    id: 3,
    text: 'Hvor mange bruger internettet hjemme?',
    options: [
      { label: '👤 1 person', value: '1' },
      { label: '👥 2 personer', value: '2' },
      { label: '👨‍👩‍👧 3-4 personer', value: '3-4' },
      { label: '👨‍👩‍👧‍👦 5+ personer', value: '5+' },
    ],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  const getRecommendation = () => {
    const [priority, type, size] = answers;
    let candidates = providers.filter(p => p.type !== 'fiber (erhverv)');

    // Filter by type preference
    if (type === 'fiber') candidates = candidates.filter(p => p.type === 'fiber');
    else if (type === 'mobil') candidates = candidates.filter(p => p.type === 'mobil');
    else if (type === 'kabel') candidates = candidates.filter(p => p.type === 'kabel');

    // Filter by size needs
    if (size === '5+') candidates = candidates.filter(p => p.downloadSpeed >= 500);
    else if (size === '3-4') candidates = candidates.filter(p => p.downloadSpeed >= 200);

    // Filter by binding preference
    if (priority === 'frihed' || priority === 'fleksibel') {
      candidates = candidates.filter(p => p.bindingMonths === 0);
    }

    if (candidates.length === 0) {
      candidates = providers.filter(p => p.type !== 'fiber (erhverv)');
    }

    // Sort by priority
    if (priority === 'pris' || type === 'any') {
      return candidates.sort((a, b) => a.priceFrom - b.priceFrom)[0];
    } else if (priority === 'hastighed') {
      return candidates.sort((a, b) => b.downloadSpeed - a.downloadSpeed)[0];
    } else if (priority === 'fleksibel') {
      return candidates.sort((a, b) => a.priceFrom - b.priceFrom)[0];
    } else {
      return candidates.sort((a, b) => b.rating - a.rating)[0];
    }
  };

  const recommendation = done ? getRecommendation() : null;
  const current = questions[step];
  const progress = ((step) / questions.length) * 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="font-bold text-gray-900 text-xl mb-1">Hvad passer til dig?</h3>
      <p className="text-sm text-gray-500 mb-5">Svar på 3 spørgsmål — vi finder dit ideelle bredbånd</p>

      {!done ? (
        <>
          {/* Progress */}
          <div className="mb-5">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Spørgsmål {step + 1} af {questions.length}</span>
              <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${((step + 1) / questions.length) * 100}%`, backgroundColor: '#06b6d4' }}
              />
            </div>
          </div>

          <div className="text-base font-semibold text-gray-800 mb-4">{current.text}</div>

          <div className="grid grid-cols-1 gap-2">
            {current.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="text-left px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-medium hover:border-blue-400 hover:bg-blue-50 transition-all text-sm"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <div className="text-center mb-5">
            <div className="text-3xl mb-2">🎯</div>
            <div className="font-bold text-gray-900 text-lg">Vi anbefaler</div>
          </div>

          {recommendation && (
            <div className="rounded-2xl p-5" style={{ backgroundColor: '#eff6ff', border: '2px solid #1e40af' }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#06b6d4' }}>
                    Bedste match
                  </div>
                  <div className="text-2xl font-black text-gray-900">{recommendation.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {recommendation.downloadSpeed} Mbit/s · {recommendation.binding}
                  </div>
                  <div className="text-sm text-gray-600">{recommendation.type.charAt(0).toUpperCase() + recommendation.type.slice(1)}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black" style={{ color: '#1e40af' }}>
                    {recommendation.priceFrom} kr.
                  </div>
                  <div className="text-xs text-gray-500">pr. måned</div>
                </div>
              </div>

              <a
                href={recommendation.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-center gap-2 mt-4 py-3 rounded-xl text-white font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1e40af' }}
              >
                Gå til {recommendation.name} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          <button
            onClick={reset}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mt-4 mx-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Tag quizzen igen
          </button>
        </div>
      )}
    </div>
  );
}

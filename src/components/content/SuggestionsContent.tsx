'use client';

import { Camera, ChevronRight, MapPin, Star } from 'lucide-react';
import { COLORS, SUGGESTIONS } from '@/lib/constants';
import VideoReel from '@/components/VideoReel';

interface SuggestionsContentProps {
  isKids: boolean;
  accent: string;
}

export default function SuggestionsContent({
  isKids,
  accent,
}: SuggestionsContentProps) {
  return (
    <div className="space-y-2">
      {/* Camera call-to-action button */}
      <button
        className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-2xl transition-all active:scale-98"
        style={{
          background: isKids ? `rgba(255,45,138,0.08)` : `rgba(74,29,150,0.05)`,
          border: `1.5px solid ${accent}`,
        }}
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md"
          style={{ background: accent }}
        >
          <Camera size={20} color="#fff" strokeWidth={2} />
        </div>
        <div className="flex-1 text-left">
          <p className="text-sm font-black" style={{ color: accent }}>
            {isKids ? '✨ Point & Discover Magic!' : 'Point Camera at Heritage'}
          </p>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Tap to open camera and identify
          </p>
        </div>
        <ChevronRight size={18} color={accent} strokeWidth={2.5} />
      </button>

      {/* Featured stories section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-black text-gray-900">
            Featured Stories
          </h2>
          <button className="text-xs font-bold" style={{ color: 'var(--color-brand-purple)' }}>
            View all
          </button>
        </div>
        <VideoReel />
      </div>

      {/* Nearby heritage sites section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-black text-gray-900">
            Nearby Heritage
          </h2>
          <button className="text-xs font-bold" style={{ color: 'var(--color-brand-purple)' }}>
            View map
          </button>
        </div>

        {/* List of nearby suggestions */}
        <div className="space-y-3">
          {SUGGESTIONS.map((site) => (
            <div
              key={site.id}
              className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer active:scale-98 transition-transform"
              style={{
                background: '#F8F7FF',
                border: `1px solid rgba(74,29,150,0.07)`,
              }}
            >
              {/* Emoji icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-2xl"
                style={{ background: `rgba(74,29,150,0.07)` }}
              >
                {site.emoji}
              </div>

              {/* Site info - name and location */}
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm text-gray-900 truncate">
                  {site.name}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={9} color="#9CA3AF" />
                  <span className="text-gray-400 text-[10px]">
                    {site.location}
                  </span>
                </div>
              </div>

              {/* Tag and rating */}
              <div className="flex flex-col items-end gap-1">
                <span
                  className="text-[9px] font-black px-2 py-0.5 rounded-full"
                  style={{
                    background: `rgba(74,29,150,0.07)`,
                    color: 'var(--color-brand-purple)',
                  }}
                >
                  {site.tag}
                </span>
                <div className="flex items-center gap-0.5">
                  <Star size={9} fill="#FFE600" color="#FFE600" />
                  <span className="text-[10px] font-bold text-gray-600">
                    {site.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

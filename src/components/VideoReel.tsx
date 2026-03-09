'use client';

import { useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { COLORS, REELS } from '@/lib/constants';

export default function VideoReel() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const currentReel = REELS[active];

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
      style={{ height: '236px' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{ background: currentReel.bg }}
      />

      {/* Large emoji watermark */}
      <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-15 select-none pointer-events-none">
        {currentReel.emoji}
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      {/* Top controls bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
        {/* Live indicator */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
          style={{
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: COLORS.GREEN }}
          />
          <span className="text-white text-[10px] font-black tracking-wider">
            LIVE STORY
          </span>
        </div>

        {/* Mute button */}
        <button
          onClick={() => setMuted((m) => !m)}
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(12px)',
          }}
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <VolumeX size={14} color="#fff" strokeWidth={2} />
          ) : (
            <Volume2 size={14} color="#fff" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Center play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-90"
          style={{
            background: playing
              ? 'rgba(255,255,255,0.15)'
              : `linear-gradient(135deg,${COLORS.PINK},${COLORS.PURPLE})`,
            backdropFilter: playing ? 'blur(8px)' : 'none',
            boxShadow: playing ? 'none' : `0 8px 32px ${COLORS.PINK}66`,
          }}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <div className="flex gap-1.5">
              <div className="w-1.5 h-5 bg-white rounded-full" />
              <div className="w-1.5 h-5 bg-white rounded-full" />
            </div>
          ) : (
            <Play size={24} fill="#fff" color="#fff" className="ml-1" />
          )}
        </button>
      </div>

      {/* Bottom info and navigation */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{
          background:
            'linear-gradient(to top,rgba(0,0,0,0.82) 0%,transparent 100%)',
        }}
      >
        <h3
          className="text-white font-black text-xl leading-tight"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
        >
          {currentReel.title}
        </h3>
        <p className="text-white/60 text-xs font-medium mt-0.5">
          {currentReel.sub}
        </p>

        {/* Reel navigation dots */}
        <div className="flex gap-1.5 mt-3">
          {REELS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === active ? '28px' : '6px',
                background:
                  i === active
                    ? COLORS.GREEN
                    : 'rgba(255,255,255,0.3)',
              }}
              aria-label={`Go to reel ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

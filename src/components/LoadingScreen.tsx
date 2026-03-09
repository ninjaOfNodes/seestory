'use client';

import { useState, useEffect } from 'react';
import { COLORS } from '@/lib/constants';

interface LoadingScreenProps {
  onDone: () => void;
}

export default function LoadingScreen({ onDone }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 300);
          return 100;
        }
        return p + 2;
      });
    }, 46);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
      style={{
        background: `linear-gradient(160deg,${COLORS.PURPLE} 0%,#2D0E6B 60%,#16073a 100%)`,
      }}
    >
      {/* Blur effect circles */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-25"
        style={{ background: COLORS.PINK }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full blur-3xl opacity-15"
        style={{ background: COLORS.GREEN }}
      />

      {/* Spinning loader with nested rings */}
      <div className="relative flex items-center justify-center mb-10">
        <div
          className="absolute w-32 h-32 rounded-full border border-white/10"
          style={{ animation: 'ld-spin 4s linear infinite' }}
        />
        <div
          className="absolute w-24 h-24 rounded-full border"
          style={{
            borderColor: `${COLORS.GREEN}55`,
            animation: 'ld-spin 3s linear infinite',
          }}
        />
        <div
          className="absolute w-16 h-16 rounded-full border"
          style={{
            borderColor: `${COLORS.PINK}77`,
            animation: 'ld-spin 2s linear infinite reverse',
          }}
        />
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl text-white z-10 shadow-2xl"
          style={{
            background: `linear-gradient(135deg,${COLORS.PINK},${COLORS.PURPLE})`,
            boxShadow: `0 0 40px ${COLORS.PINK}55`,
          }}
        >
          S
        </div>
      </div>

      {/* App title and tagline */}
      <h1 className="text-5xl font-black text-white tracking-widest mb-2">
        SeeStory
      </h1>
      <p
        className="text-xs font-bold tracking-[0.25em] uppercase mb-12"
        style={{ color: COLORS.GREEN }}
      >
        Point · Discover · Explore
      </p>

      {/* Loading progress bar */}
      <div className="w-48 flex flex-col items-center gap-3">
        <div
          className="w-full h-0.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg,${COLORS.PINK},${COLORS.GREEN})`,
            }}
          />
        </div>
        <span
          className="text-xs font-bold tabular-nums"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          {progress}%
        </span>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes ld-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

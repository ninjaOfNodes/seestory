'use client';

import { useState } from 'react';
import { Heart, MapPin, Play, Star } from 'lucide-react';
import { COLORS, STORIES } from '@/lib/constants';

interface StoryCardProps {
  story: (typeof STORIES)[0];
}

export default function StoryCard({ story }: StoryCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden shrink-0 cursor-pointer active:scale-95 transition-transform"
      style={{ width: '160px', height: '210px', background: story.bg }}
    >
      {/* Background emoji watermark */}
      <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20 select-none">
        {story.emoji}
      </div>

      {/* Like button - top right */}
      <button
        onClick={() => setLiked((l) => !l)}
        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
        style={{
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(8px)',
        }}
        aria-label={liked ? 'Unlike' : 'Like'}
      >
        <Heart
          size={14}
          fill={liked ? 'var(--color-brand-pink)' : 'none'}
          color={liked ? 'var(--color-brand-pink)' : '#fff'}
          strokeWidth={2}
        />
      </button>

      {/* Play indicator - top left */}
      <div
        className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)' }}
      >
        <Play size={10} fill="#fff" color="#fff" />
      </div>

      {/* Info section - bottom with gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 p-3"
        style={{
          background: 'linear-gradient(to top,rgba(0,0,0,0.88) 0%,transparent 100%)',
        }}
      >
        <p className="text-white font-bold text-sm leading-snug">{story.name}</p>

        {/* Location and rating */}
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-1">
            <MapPin size={9} color="rgba(255,255,255,0.55)" />
            <span className="text-white/55 text-[9px]">{story.location}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Star size={9} fill="#FFE600" color="#FFE600" />
            <span className="text-white/80 text-[10px] font-bold">{story.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

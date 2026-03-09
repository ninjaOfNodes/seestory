'use client';

import { Heart } from 'lucide-react';
import { COLORS, FAVOURITES } from '@/lib/constants';
import StoryCard from '@/components/StoryCard';

export default function FavouritesContent() {
  return (
    <div className="space-y-4">
      {/* Header with count */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-black text-gray-900">Your Favourites</h2>
        <span className="text-xs font-bold text-gray-400">
          {FAVOURITES.length} saved
        </span>
      </div>

      {/* Horizontal scroll of favorite story cards */}
      <div
        className="flex gap-3 overflow-x-auto pb-1"
        style={{ scrollbarWidth: 'none' }}
      >
        {FAVOURITES.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      {/* Empty state encouraging more exploration */}
      <div
        className="flex flex-col items-center justify-center gap-3 py-8 rounded-2xl"
        style={{
          background: `${COLORS.PINK}07`,
          border: `2px dashed ${COLORS.PINK}20`,
        }}
      >
        <Heart size={28} color={COLORS.PINK} strokeWidth={1.5} />
        <p className="text-sm font-black" style={{ color: COLORS.PINK }}>
          Find more to love
        </p>
        <p className="text-xs text-gray-400">Explore heritage sites near you</p>
      </div>
    </div>
  );
}

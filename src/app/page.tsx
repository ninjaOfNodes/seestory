'use client';

import { useState } from 'react';
import { Sparkles, Search, SlidersHorizontal, User } from 'lucide-react';
import { COLORS } from '@/lib/constants';
import { NavTab, Mode } from '@/lib/types';
import LoadingScreen from '@/components/LoadingScreen';
import BottomNav from '@/components/BottomNav';
import SuggestionsContent from '@/components/content/SuggestionsContent';
import HistoryContent from '@/components/content/HistoryContent';
import FavouritesContent from '@/components/content/FavouritesContent';
import ProfileContent from '@/components/content/ProfileContent';

// Main application component - handles layout and state
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [navTab, setNavTab] = useState<NavTab>('suggestions');
  const [mode, setMode] = useState<Mode>('default');

  // Determine if in kids mode and which color accent to use
  const isKids = mode === 'kids';
  const accent = isKids ? COLORS.PINK : COLORS.PURPLE;

  // HOME/SUGGESTIONS LAYOUT
  const homePage = (
    <main className="flex flex-col bg-white overflow-hidden" style={{ height: '100dvh', width: '100vw' }}>
      {/* Status bar spacer for notch/safe area */}
      <div
        className="shrink-0"
        style={{ height: 'env(safe-area-inset-top, 44px)', minHeight: '44px' }}
      />

      {/* Header section with logo and controls */}
      <div className="shrink-0 flex items-center justify-between px-5 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm text-white"
              style={{ background: 'var(--color-brand-purple)' }}
            >
              S
            </div>
            <h1 className="text-xl font-black" style={{ color: 'var(--color-brand-purple)' }}>
              SeeStory
            </h1>
          </div>
          <p className="text-xs text-gray-400 font-medium mt-0.5 ml-10">
            Point. Discover. Explore.
          </p>
        </div>

        {/* Kids mode toggle and user profile */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode(isKids ? 'default' : 'kids')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full transition-all"
            style={{
              background: isKids ? 'var(--color-brand-purple)' : '#F5F3FF',
              border: isKids ? 'none' : `1.5px solid var(--color-brand-purple)`,
            }}
          >
            <Sparkles
              size={12}
              color={isKids ? 'var(--color-brand-green)' : 'var(--color-brand-purple)'}
              strokeWidth={2.5}
            />
            <span
              className="text-xs font-black"
              style={{ color: isKids ? '#fff' : 'var(--color-brand-purple)' }}
            >
              Kids
            </span>
          </button>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shadow-md"
            style={{ background: 'var(--color-brand-purple)' }}
          >
            <User size={16} color="#fff" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Search bar section */}
      <div className="shrink-0 px-5 pb-3">
        <div className="relative">
          <Search
            size={16}
            color="#9CA3AF"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search heritage, monuments..."
            className="w-full pl-11 pr-14 py-3.5 rounded-2xl text-sm font-medium outline-none"
            style={{
              background: '#F8F7FF',
              border: `1.5px solid rgba(74,29,150,0.1)`,
              color: '#1a1a1a',
            }}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: 'var(--color-brand-purple)' }}
          >
            <SlidersHorizontal size={14} color="#fff" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Scrollable content area */}
      <div
        className="flex-1 overflow-y-auto min-h-0 px-5 space-y-2 pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        <SuggestionsContent isKids={isKids} accent={accent} />
      </div>

      {/* Bottom navigation bar */}
      <BottomNav tab={navTab} setTab={setNavTab} />
    </main>
  );

  // EXPLORE/HISTORY LAYOUT - Full screen reel-like
  const explorePage = (
    <main className="flex flex-col bg-black overflow-hidden" style={{ height: '100dvh', width: '100vw' }}>
      <div className="flex-1 overflow-y-auto min-h-0" style={{ scrollbarWidth: 'none' }}>
        <HistoryContent />
      </div>
      <BottomNav tab={navTab} setTab={setNavTab} />
    </main>
  );

  // SAVED/FAVOURITES LAYOUT
  const savedPage = (
    <main className="flex flex-col bg-white overflow-hidden" style={{ height: '100dvh', width: '100vw' }}>
      <div className="shrink-0" style={{ height: 'env(safe-area-inset-top, 44px)', minHeight: '44px' }} />
      <div className="shrink-0 px-5 py-4">
        <h1 className="text-2xl font-black text-gray-900">Saved</h1>
        <p className="text-sm text-gray-400 font-medium mt-1">Your favorite heritage sites</p>
      </div>
      <div className="flex-1 overflow-y-auto min-h-0 px-5" style={{ scrollbarWidth: 'none' }}>
        <FavouritesContent />
      </div>
      <BottomNav tab={navTab} setTab={setNavTab} />
    </main>
  );

  // PROFILE LAYOUT
  const profilePage = (
    <main className="flex flex-col bg-white overflow-hidden" style={{ height: '100dvh', width: '100vw' }}>
      <div className="shrink-0" style={{ height: 'env(safe-area-inset-top, 44px)', minHeight: '44px' }} />
      <div className="shrink-0 px-5 py-4">
        <h1 className="text-2xl font-black text-gray-900">Profile</h1>
        <p className="text-sm text-gray-400 font-medium mt-1">Your SeeStory account</p>
      </div>
      <div className="flex-1 overflow-y-auto min-h-0 px-5" style={{ scrollbarWidth: 'none' }}>
        <ProfileContent />
      </div>
      <BottomNav tab={navTab} setTab={setNavTab} />
    </main>
  );

  // Render appropriate layout based on current tab
  const renderPage = () => {
    switch (navTab) {
      case 'suggestions':
        return homePage;
      case 'history':
        return explorePage;
      case 'favourites':
        return savedPage;
      case 'profile':
        return profilePage;
    }
  };

  return (
    <>
      {/* Show loading screen on initial load */}
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      {loaded && renderPage()}
    </>
  );
}
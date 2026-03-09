'use client';

import { useState } from 'react';
import { Heart, Bookmark, Share2, MessageCircle, X } from 'lucide-react';
import { REELS } from '@/lib/constants';

export default function HistoryContent() {
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});
  const [saved, setSaved] = useState<{ [key: number]: boolean }>({});
  const [openCommentReel, setOpenCommentReel] = useState<number | null>(null);

  const toggleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id: number) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div
        className="flex flex-col gap-0 overflow-y-scroll"
        style={{
          height: 'calc(100dvh - env(safe-area-inset-bottom, 80px) - 60px)',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
        }}
      >
      {/* Full screen vertical reels - snap scrolling like TikTok */}
      {REELS.map((reel) => (
        <div
          key={reel.id}
          className="shrink-0 w-full"
          style={{
            height: 'calc(100dvh - env(safe-area-inset-bottom, 80px) - 60px)',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
          }}
        >
          {/* Reel card - full height */}
          <div
            className="w-full h-full rounded-none overflow-hidden"
            style={{
              background: reel.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Emoji watermark */}
            <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10 select-none pointer-events-none">
              {reel.emoji}
            </div>

          {/* Reel content overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
              }}
            >
              <h2 className="text-3xl font-black text-white mb-1">{reel.title}</h2>
              <p className="text-lg text-gray-200">{reel.sub}</p>
            </div>

            {/* Right side action bar */}
            <div
              className="absolute right-4 bottom-24 flex flex-col items-center gap-6"
              style={{
                zIndex: 10,
              }}
            >
              {/* Like button */}
              <button
                onClick={() => toggleLike(reel.id)}
                className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
                style={{
                  color: likes[reel.id] ? '#7C3AED' : '#fff',
                }}
              >
                <div
                  className="p-3 rounded-full transition-all"
                  style={{
                    background: likes[reel.id] ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Heart
                    size={22}
                    fill={likes[reel.id] ? '#7C3AED' : 'none'}
                    strokeWidth={2}
                  />
                </div>
                <span className="text-xs font-bold text-white">Like</span>
              </button>

              {/* Comment button */}
              <button
                onClick={() => setOpenCommentReel(reel.id)}
                className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
                style={{ color: '#fff' }}
              >
                <div className="p-3 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <MessageCircle size={22} fill="none" strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-white">Comment</span>
              </button>

              {/* Save button */}
              <button
                onClick={() => toggleSave(reel.id)}
                className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
                style={{
                  color: saved[reel.id] ? '#7C3AED' : '#fff',
                }}
              >
                <div
                  className="p-3 rounded-full transition-all"
                  style={{
                    background: saved[reel.id] ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Bookmark
                    size={22}
                    fill={saved[reel.id] ? '#7C3AED' : 'none'}
                    strokeWidth={2}
                  />
                </div>
                <span className="text-xs font-bold text-white">Save</span>
              </button>

              {/* Share button */}
              <button className="flex flex-col items-center gap-1 transition-transform hover:scale-110" style={{ color: '#fff' }}>
                <div className="p-3 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Share2 size={22} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-white">Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>

      {/* Comment Drawer */}
      {openCommentReel !== null && (
      <>
        {/* Overlay */}
        <div
          onClick={() => setOpenCommentReel(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 40,
            animation: 'fadeIn 0.3s ease-out',
          }}
        />

        {/* Drawer */}
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#fff',
            borderRadius: '20px 20px 0 0',
            maxHeight: '90vh',
            zIndex: 50,
            boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideUp 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: '1px solid #f0f0f0',
            }}
          >
            <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Comments</h2>
            <button
              onClick={() => setOpenCommentReel(null)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={24} color="#333" />
            </button>
          </div>

          {/* Comments List */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ textAlign: 'center', color: '#999', paddingTop: '20px' }}>
              <p>No comments yet. Be the first to comment!</p>
            </div>
          </div>

          {/* Comment Input */}
          <div
            style={{
              padding: '12px 20px',
              borderTop: '1px solid #f0f0f0',
              display: 'flex',
              gap: '8px',
              paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
            }}
          >
            <input
              type="text"
              placeholder="Add a comment..."
              style={{
                flex: 1,
                padding: '10px 12px',
                border: '1px solid #ddd',
                borderRadius: '20px',
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            />
            <button
              style={{
                padding: '10px 16px',
                background: '#7C3AED',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              Post
            </button>
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}</style>
      </>
    )}
    </>
  );
}

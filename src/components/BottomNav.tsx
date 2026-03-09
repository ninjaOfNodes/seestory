'use client';

import { useState } from 'react';
import { Camera, Home, Heart, Sparkles, User } from 'lucide-react';
import { NavTab } from '@/lib/types';

interface BottomNavProps {
  tab: NavTab;
  setTab: (tab: NavTab) => void;
}

interface NavItemConfig {
  id: NavTab | 'spacer';
  label: string;
  Icon?: React.ElementType;
  isSpacer?: boolean;
}

const LEFT_ITEMS: NavItemConfig[] = [
  { id: 'suggestions', label: 'Home', Icon: Home },
  { id: 'favourites', label: 'Saved', Icon: Heart },
];

const RIGHT_ITEMS: NavItemConfig[] = [
  { id: 'spacer', label: '', isSpacer: true },
  { id: 'history', label: 'Explore', Icon: Sparkles },
  { id: 'profile', label: 'Profile', Icon: User },
];

const GREEN = '#22C55E';
const GREEN_DARK = '#16A34A';
const INACTIVE = '#9CA3AF';

export default function BottomNav({ tab, setTab }: BottomNavProps) {
  const [pressedCapture, setPressedCapture] = useState(false);

  return (
    <>
      <style>{`
        @keyframes bn-pop {
          0%   { transform: scale(1);    }
          40%  { transform: scale(0.88); }
          70%  { transform: scale(1.07); }
          100% { transform: scale(1);    }
        }
        @keyframes bn-ping {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(2);   opacity: 0;   }
          100% { transform: scale(2);   opacity: 0;   }
        }
        .bn-item-active { animation: bn-pop 0.32s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .bn-ping        { animation: bn-ping 2s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>

      {/* Full-width bar */}
      <nav
        aria-label="Main navigation"
        style={{
          flexShrink: 0,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingLeft: '6px',
          paddingRight: '6px',
          paddingTop: '12px',
          paddingBottom: 'calc(env(safe-area-inset-bottom, 14px) + 10px)',

          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',

          borderTop: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 -6px 24px rgba(0,0,0,0.12), 0 -1px 0 rgba(0,0,0,0.05)',
        }}
      >
        {/* Left items */}
        {LEFT_ITEMS.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={tab === item.id && !item.isSpacer}
            onClick={() => item.isSpacer ? null : setTab(item.id as unknown as NavTab)}
          />
        ))}

        {/* ── CAMERA: absolutely centered on the top edge of the nav ── */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Ping ring — centered on button */}
          <div
            className="bn-ping"
            style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: `${GREEN}28`,
              pointerEvents: 'none',
            }}
          />

          <button
            aria-label="Open camera"
            onMouseDown={() => setPressedCapture(true)}
            onMouseUp={() => setPressedCapture(false)}
            onMouseLeave={() => setPressedCapture(false)}
            onTouchStart={() => setPressedCapture(true)}
            onTouchEnd={() => setPressedCapture(false)}
            style={{
              position: 'relative',
              zIndex: 2,
              width: '62px',
              height: '62px',
              borderRadius: '50%',
              border: '4px solid rgba(255,255,255,1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transform: pressedCapture ? 'scale(0.9)' : 'scale(1)',
              transition: 'transform 0.12s cubic-bezier(0.34,1.56,0.64,1)',
              background: `linear-gradient(145deg, ${GREEN} 0%, ${GREEN_DARK} 100%)`,
              boxShadow: pressedCapture
                ? `0 2px 8px ${GREEN}88`
                : [
                    `0 0 0 1px ${GREEN}33`,
                    `0 6px 20px ${GREEN}88`,
                    `0 12px 36px ${GREEN}44`,
                    `inset 0 1px 0 rgba(255,255,255,0.25)`,
                  ].join(','),
            }}
          >
            <div style={{
              position: 'absolute',
              inset: '5px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              pointerEvents: 'none',
            }} />
            <Camera size={24} color="#fff" strokeWidth={2.2} />
          </button>
        </div>

        {/* Right items */}
        {RIGHT_ITEMS.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={tab === item.id && !item.isSpacer}
            onClick={() => item.isSpacer ? null : setTab(item.id as unknown as NavTab)}
          />
        ))}
      </nav>
    </>
  );
}

// ─────────────────────────────────────────────
// NAV BUTTON
// ─────────────────────────────────────────────
function NavButton({
  item,
  isActive,
  onClick,
}: {
  item: NavItemConfig;
  isActive: boolean;
  onClick: () => void;
}) {
  const { label, Icon, isSpacer } = item;
  
  // Return empty spacer
  if (isSpacer) {
    return <div style={{ flex: 1 }} />;
  }
  
  const color = isActive ? GREEN : INACTIVE;
  
  if (!Icon) return null;

  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
        flex: 1,
        paddingBottom: '0px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Icon wrapper */}
      <div
        className={isActive ? 'bn-item-active' : ''}
        style={{
          position: 'relative',
          width: '40px',
          height: '36px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
          background: isActive ? `${GREEN}18` : 'transparent',
        }}
      >
        {/* Pentagon / filled shape for active home */}
        <Icon
          size={20}
          strokeWidth={isActive ? 2.2 : 1.7}
          color={color}
          fill={isActive ? color : 'none'}
        />
      </div>

      {/* Label */}
      <span style={{
        fontSize: '10px',
        fontWeight: isActive ? 700 : 500,
        color,
        letterSpacing: '0.01em',
        lineHeight: 1,
        transition: 'color 0.2s',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
      }}>
        {label}
      </span>
    </button>
  );
}
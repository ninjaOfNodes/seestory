'use client';

import { ChevronRight, User } from 'lucide-react';
import { COLORS } from '@/lib/constants';

interface UserStat {
  label: string;
  value: string;
}

export default function ProfileContent() {
  // User statistics
  const stats: UserStat[] = [
    { label: 'Visited', value: '12' },
    { label: 'Stories', value: '8' },
    { label: 'Favourites', value: '5' },
  ];

  // Profile menu items
  const menuItems = [
    'Edit Profile',
    'Notifications',
    'Language',
    'Help & Support',
    'About SeeStory',
  ];

  return (
    <div className="space-y-3">
      {/* User profile header section */}
      <div
        className="flex flex-col items-center gap-3 py-6 rounded-3xl"
        style={{
          background: '#F8F7FF',
          border: `1px solid ${COLORS.PURPLE}12`,
        }}
      >
        {/* User avatar */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: COLORS.PURPLE }}
        >
          <User size={36} color="#fff" strokeWidth={1.5} />
        </div>

        {/* User name and member since */}
        <div className="text-center">
          <p className="font-black text-lg text-gray-900">Heritage Explorer</p>
          <p className="text-xs text-gray-400 mt-0.5">Member since 2024</p>
        </div>

        {/* User statistics */}
        <div className="flex gap-6 mt-1">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span
                className="font-black text-xl"
                style={{ color: COLORS.PURPLE }}
              >
                {stat.value}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Profile menu items */}
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl"
          style={{
            background: '#F8F7FF',
            border: `1px solid ${COLORS.PURPLE}10`,
          }}
        >
          <span className="text-sm font-bold text-gray-700">{item}</span>
          <ChevronRight size={16} color="#C4B5FD" strokeWidth={2} />
        </button>
      ))}
    </div>
  );
}

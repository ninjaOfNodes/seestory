# SeeStory

A modern mobile-first web app for discovering and sharing heritage stories with TikTok-style vertical scrolling and interactive engagement features.

## 🎯 Features

- **Full-Screen Reel Experience** - Vertical snap scrolling like TikTok for browsing heritage stories
- **Interactive Action Bar** - Like, Comment, Save, and Share buttons on each reel
- **Comment Drawer** - Bottom drawer UI for viewing and posting comments
- **Multi-Tab Navigation** - Home, Explore, Saved, and Profile sections
- **Responsive Design** - Built for mobile-first experience with safe area support
- **Modern UI** - Clean design with brand purple (#7C3AED) and smooth animations
- **State Management** - Tracks likes and saves per reel with visual feedback

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **React**: 19.2.3 with Hooks (useState)
- **Styling**: Tailwind CSS 4 with CSS utilities
- **Icons**: Lucide React (24px, responsive sizing)
- **TypeScript**: Strict mode for type safety
- **Animations**: CSS keyframes (snap scroll, slide-up drawer, fade transitions)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main app with tab-based routing
│   ├── layout.tsx            # Root layout with PWA config
│   ├── globals.css           # CSS variables & theme
│   └── _components/
│       ├── Fonts.ts          # Google Font configuration
│       └── DesktopBlocker.tsx # Mobile-first UX
├── components/
│   ├── BottomNav.tsx         # Navigation bar with camera button
│   ├── LoadingScreen.tsx     # Loading animation
│   └── content/
│       ├── HistoryContent.tsx   # Explore page (reels + comments)
│       ├── SuggestionsContent.tsx # Home page
│       ├── FavouritesContent.tsx  # Saved page
│       └── ProfileContent.tsx     # Profile page
├── lib/
│   ├── constants.ts          # COLORS, REELS, STORIES data
│   └── types.ts              # TypeScript types & interfaces
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd seestory

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📱 Usage

### Navigation
- **Left**: Home (logo icon) - Discovery and featured content
- **Center**: Camera button - Floating action button
- **Right**: Explore (sparkles), Saved (heart), Profile (user)
- **Spacer**: Invisible middle item for balanced layout

### Explore Page (Reels)
- Scroll vertically to snap between reels
- **Like** ❤️ - Toggle like state (fills purple when active)
- **Comment** 💬 - Opens comment drawer
- **Save** 🔖 - Bookmark reel (fills purple when active)
- **Share** 📤 - Share reel

### Comment Drawer
- Opens from bottom when comment button is tapped
- Input field for typing comments
- Close with X button or tap overlay

## 🎨 Design System

### Colors
- **Brand Purple**: #7C3AED (primary accent)
- **Brand Green**: #22C55E (active navigation)
- **Brand Pink**: #FF3B7D (secondary accent)
- **Inactive Gray**: #9CA3AF

### Spacing
- Nav height: compact (~60px including safe area)
- Reel height: Full viewport minus nav
- Action bar gap: 6px between buttons
- Comment drawer: 90vh max height

### Typography
- Body: System fonts (-apple-system, BlinkMacSystemFont)
- Serif: Cinzel (headings)
- Sans: Nunito (body text)
- Mono: Space Grotesk (code)

## 🔧 Development

### Key Files to Modify

**Add new reels**: Edit `src/lib/constants.ts` - REELS array

**Update colors**: Edit `src/app/globals.css` - CSS variables section

**Change nav items**: Edit `src/components/BottomNav.tsx` - LEFT_ITEMS/RIGHT_ITEMS arrays

**Add pages**: Create new component in `src/components/content/` and add to tabs in `src/app/page.tsx`

## 🎬 Features Implemented

✅ Tab-based navigation with 4 pages
✅ Full-screen vertical reel scrolling
✅ Like/Save state management per reel
✅ Interactive action bar (Like, Comment, Save, Share)
✅ Bottom drawer for comments
✅ Responsive mobile design
✅ Smooth animations and transitions
✅ Safe area support for notched devices

## 🚧 Future Enhancements

- Backend integration for persisting likes/saves
- Real comment storage and retrieval
- Share functionality (native or custom modal)
- Gesture support (swipe for navigation)
- User authentication
- Profile customization
- Follow/unfollow features

## 📄 License

MIT

## 💬 Contact

Built with ❤️ for storytellers and heritage lovers.


import type { Metadata, Viewport } from "next";
import "./globals.css";
import styles from './layout.module.css';
import { cinzel, nunito, spaceGrotesk } from './_components/Fonts';
import DesktopBlocker from './_components/DesktopBlocker';

export const metadata: Metadata = {
  title:       "SeeStory — See it. Know its story.",
  description: "Point your camera at anything and watch its world come alive as a personalized story.",
  manifest:    "/manifest.json",
  appleWebApp: {
    capable:        true,
    statusBarStyle: "black-translucent",
    title:          "SeeStory",
  },
  openGraph: {
    title:       "SeeStory",
    description: "Point your camera at anything and watch its world come alive.",
    type:        "website",
  },
};

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit:  "cover",
  themeColor:   "#7C3AED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${nunito.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable"                content="yes" />
        <meta name="apple-mobile-web-app-capable"          content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title"            content="SeeStory" />
      </head>

      <body className="antialiased text-white overflow-x-hidden">
        {/* Desktop blocker - hides app on desktop, shows on mobile/tablet */}
        <DesktopBlocker />

        {/* App root - contains mobile app content */}
        <div className={styles.appRoot}>
          {children}
        </div>
      </body>
    </html>
  );
}
import styles from '../layout.module.css';

/**
 * Desktop Blocker
 * Displays a full-screen message on desktop browsers directing users to mobile
 * Hidden on mobile/tablet devices via CSS
 */
export default function DesktopBlocker() {
  return (
    <div className={styles.desktopBlocker}>
      {/* Logo and app name */}
      <div className={styles.dbLogo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/icon-192.png"
          alt="SeeStory"
          width={52}
          height={52}
          className={styles.dbLogoIcon}
        />
        <span className={styles.dbLogoName}>SeeStory</span>
      </div>

      {/* Center content with headline and description */}
      <div className={styles.dbCenter}>
        <h1 className={styles.dbHeadline}>
          Made for<br />
          <span className={styles.dbHeadlineAccent}>Mobile.</span>
        </h1>

        <div className={styles.dbLine} />

        <p className={styles.dbDesc}>
          Open SeeStory on your phone or tablet
          to point your camera at any heritage site
          and watch its story come alive.
        </p>

        {/* Status badge */}
        <div className={styles.dbBadge}>
          <span className={styles.dbBadgeDot} />
          Desktop version coming soon
        </div>
      </div>

      {/* Footer tagline */}
      <p className={styles.dbFooter}>
        SeeStory · Your gateway to the world's stories
      </p>
    </div>
  );
}

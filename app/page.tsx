import Image from "next/image";
import MusicPlayer from "./MusicPlayer";

function PhotoFrame() {
  return (
    <div className="photo-frame">
      <Image
        className="photo-image"
        src="/assets/Ameena%20Abdulla.jpeg"
        alt="Ameena and Abdulla sharing a moment together"
        fill
        priority
        sizes="(max-width: 640px) 72vw, (max-width: 900px) 36vw, 30vw"
      />
      <span className="photo-corner photo-corner--tl" aria-hidden="true" />
      <span className="photo-corner photo-corner--br" aria-hidden="true" />
    </div>
  );
}

function Flourish() {
  return <span className="flourish" aria-hidden="true">✳</span>;
}

export default function Home() {
  return (
    <>
      <main className="invitation">
        <div className="paper-grain" aria-hidden="true" />
      <header className="topline">
        <span className="topline-mark">A <i>&amp;</i> A</span>
        <span className="topline-text">A celebration of love</span>
        <span className="topline-date">27 · 12 · 2026</span>
      </header>

      <section className="hero" aria-labelledby="invite-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ <span /></p>
          <p className="intro">With the blessings of our families</p>
          <h1 id="invite-title">
            <span className="name name--first">Amy</span>
            <span className="ampersand">&amp;</span>
            <span className="name name--second">Allu</span>
          </h1>
          <p className="full-names">Dr. Ameena P A <span>·</span> Abdulla Srambikal</p>
          <div className="hero-divider"><span /><Flourish /><span /></div>
          <p className="invite-line">request the pleasure of your company<br />as they begin their life together</p>

          <div className="event-details">
            <div className="detail-block">
              <span className="detail-label">The day</span>
              <span className="detail-main">Sunday</span>
              <span className="detail-sub">27 December 2026</span>
            </div>
            <span className="detail-separator" aria-hidden="true" />
            <div className="detail-block">
              <span className="detail-label">The hour</span>
              <span className="detail-main">11:30 <small>am</small></span>
              <span className="detail-sub">Please join us</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <span className="orbit orbit--outer" aria-hidden="true" />
          <span className="orbit orbit--inner" aria-hidden="true" />
          <PhotoFrame />
          <div className="side-note">A day made<br />of love <span>♡</span></div>
          <span className="visual-spark visual-spark--one" aria-hidden="true">✳</span>
          <span className="visual-spark visual-spark--two" aria-hidden="true">✧</span>
        </div>
      </section>

      <section className="lower" aria-label="Venue and family details">
        <div className="venue-card">
          <div className="venue-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none"><path d="M5 26h22M8 26V14l8-7 8 7v12M12 26v-7h8v7M4 14h24M11 14v-3m10 3v-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <p className="detail-label">The place</p>
          <h2>Zamra International<br />Convention Centre</h2>
          <p className="venue-note">We look forward to celebrating with you</p>
          <a
            className="venue-map-link"
            href="https://maps.app.goo.gl/Ktq5jHAjegfyS1xN7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Zamra International Convention Centre in Google Maps"
          >
            View on Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="family-card family-card--groom">
          <p className="detail-label">The groom</p>
          <h2>Abdulla Srambikal</h2>
          <p className="parent-label">Son of</p>
          <p className="parents">Abdul Nizar <span>&amp;</span> Katheeja</p>
        </div>

        <div className="family-card family-card--bride">
          <p className="detail-label">The bride</p>
          <h2>Dr. Ameena P A</h2>
          <p className="parent-label">Daughter of</p>
          <p className="parents">Abdul Razak <span>&amp;</span> Noorjahan PB</p>
        </div>
      </section>

      <footer className="footer">
        <Flourish />
        <p>With love, and the blessings of our families</p>
        <span className="footer-date">AMEENA &amp; ABDULLA <i>·</i> 2026</span>
      </footer>
      </main>
      <MusicPlayer />
    </>
  );
}

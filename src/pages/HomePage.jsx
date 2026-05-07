import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function HomePage() {
  return (
    <>
      <main className="hero hero-home">
        <Reveal className="hero-copy glass-panel">
          <p className="eyebrow">A little surprise made with love</p>
          <h1>Happy 18th Birthday</h1>
          <p className="lead">
            Some feelings are easier to share one page at a time. This is a quiet little place made to hold kind
            words, cherished memories, and the soft moments that make your 18th birthday feel extra special.
          </p>
          <div className="cta-row">
            <Link className="button button-primary" to="/poem">
              Open the Surprise
            </Link>
            <Link className="button button-secondary" to="/message">
              Read the Notes
            </Link>
          </div>
        </Reveal>

        <Reveal className="hero-visual reveal-delay-1">
          <div className="portrait-stack">
            <article className="photo-card tall">
              <img src="/images/pic1.jpeg" alt="A graduation memory together" />
            </article>
            <article className="note-card glass-panel">
              <p className="note-label">Kept close</p>
              <p>Thoughtful words, a gentle heart, and memories that feel softer every time they are remembered.</p>
            </article>
          </div>
        </Reveal>
      </main>

      <section className="feature-grid">
        <Reveal className="glass-panel reveal-delay-1">
          <p className="feature-kicker">First stop</p>
          <h2>A poem for your day</h2>
          <p>Softly written lines, shared one stanza at a time.</p>
          <Link className="text-link" to="/poem">
            Open first page
          </Link>
        </Reveal>
        <Reveal className="glass-panel reveal-delay-2">
          <p className="feature-kicker">Heartfelt note</p>
          <h2>Words worth keeping</h2>
          <p>A longer letter filled with comfort, admiration, and sincere feelings.</p>
          <Link className="text-link" to="/message">
            Read notes
          </Link>
        </Reveal>
        <Reveal className="glass-panel reveal-delay-3">
          <p className="feature-kicker">Shared moments</p>
          <h2>Memories to revisit</h2>
          <p>Dates, places, and photos arranged like a small storybook gallery.</p>
          <Link className="text-link" to="/memories">
            See moments
          </Link>
        </Reveal>
      </section>
    </>
  );
}

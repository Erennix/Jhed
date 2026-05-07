import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { poemStanzas } from "../data/content";

export default function PoemPage() {
  return (
    <main className="page-main page-letter">
      <Reveal className="page-heading">
        <p className="eyebrow">A birthday poem</p>
        <h1>Happy 18th Birthday</h1>
        <p className="lead">A few quiet lines for someone who means more than words easily say.</p>
      </Reveal>

      <section className="stanza-grid">
        {poemStanzas.map((stanza, index) => (
          <Reveal key={stanza[0]} className={`glass-panel stanza reveal-delay-${Math.min(index, 3)}`.trim()}>
            {stanza.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Reveal>
        ))}
      </section>

      <div className="page-footer-nav">
        <Link className="button button-secondary" to="/">
          Back Home
        </Link>
        <Link className="button button-primary" to="/message">
          Continue to the Notes
        </Link>
      </div>
    </main>
  );
}

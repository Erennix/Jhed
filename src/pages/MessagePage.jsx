import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { messageSections } from "../data/content";

export default function MessagePage() {
  return (
    <main className="page-main">
      <Reveal className="page-heading">
        <p className="eyebrow">A few words worth keeping</p>
        <h1>For your 18th birthday</h1>
        <p className="lead">
          Everything is laid out here in full, so the whole message reads softly from beginning to end without
          breaking the feeling.
        </p>
      </Reveal>

      <section className="message-stack message-stack-open">
        {messageSections.map((section, index) => (
          <Reveal
            key={section.title}
            className={`message-card glass-panel reveal-delay-${Math.min(index, 3)}`.trim()}
          >
            <div className="message-meta message-meta-open">
              <span>{section.title}</span>
              <div className="message-copy">
                {section.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                {section.signature ? <p className="signature">{section.signature}</p> : null}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="page-footer-nav">
        <Link className="button button-secondary" to="/poem">
          Back to Poem
        </Link>
        <Link className="button button-primary" to="/memories">
          Go to Memories
        </Link>
      </div>
    </main>
  );
}

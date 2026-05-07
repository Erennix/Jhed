import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ToggleMessage from "../components/ToggleMessage";

export default function FamilyPage() {
  return (
    <main className="page-main special-main">
      <Reveal className="page-heading">
        <p className="eyebrow">A page saved for something extra meaningful</p>
        <h1>A very special moment</h1>
        <p className="lead">
          Some photos hold more than a memory. They hold comfort, pride, and the quiet reminder that love is all
          around you.
        </p>
      </Reveal>

      <section className="special-layout">
        <Reveal className="special-photo">
          <img src="/images/familyPIC.jpeg" alt="A special family photo" />
        </Reveal>

        <Reveal className="glass-panel special-note reveal-delay-1">
          <p className="feature-kicker">Keep this close</p>
          <h2>Open the special message</h2>
          <p>This page was made to feel a little warmer, a little softer, and a little more unforgettable.</p>
          <ToggleMessage label="Open Special Message" special>
            <p>This moment feels special because it carries so much love in one frame.</p>
            <p>
              It is a reminder that your life is full of people who are proud of you, grateful for you, and happy that
              you are here.
            </p>
            <p>
              May every step ahead feel guided by that same warmth, and may your 18th birthday leave your heart
              feeling safe, seen, and celebrated.
            </p>
          </ToggleMessage>
        </Reveal>
      </section>

      <div className="page-footer-nav">
        <Link className="button button-secondary" to="/memories">
          Back to Memories
        </Link>
        <Link className="button button-primary" to="/">
          Return Home
        </Link>
      </div>
    </main>
  );
}

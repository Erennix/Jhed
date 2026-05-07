import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { memoryPhotos } from "../data/content";

export default function MemoriesPage() {
  return (
    <main className="page-main memories-main">
      <Reveal className="page-heading">
        <p className="eyebrow">A few details worth remembering</p>
        <h1>Little pieces of your story</h1>
        <p className="lead">Some dates, some places, and a few photos that make everything feel a little closer.</p>
      </Reveal>

      <section className="memory-highlights">
        <Reveal className="glass-panel memory-pill">
          <span className="memory-label">together</span>
          <strong>December 20 Sampasko</strong>
        </Reveal>
        <Reveal className="glass-panel memory-pill reveal-delay-1">
          <span className="memory-label">Favorite Place</span>
          <strong>Masao</strong>
        </Reveal>
        <Reveal className="glass-panel memory-pill reveal-delay-2">
          <span className="memory-label">A Special Date</span>
          <strong>May 24</strong>
        </Reveal>
      </section>

      <section className="gallery-grid">
        {memoryPhotos.map((photo, index) => (
          <Reveal key={photo} className={`gallery-item reveal-delay-${index % 3}`.trim()}>
            <img src={photo} alt={`Graduation memory photo ${index + 1}`} />
          </Reveal>
        ))}
      </section>

      <div className="page-footer-nav">
        <Link className="button button-secondary" to="/message">
          Back to Notes
        </Link>
        <Link className="button button-primary" to="/family">
          Open Special Page
        </Link>
      </div>
    </main>
  );
}

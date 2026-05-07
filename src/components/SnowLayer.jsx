import { useState } from "react";

function createFlakes(dense) {
  const count = dense ? 60 : 36;

  return Array.from({ length: count }, (_, index) => ({
    id: `${dense ? "dense" : "normal"}-${index}`,
    size: Math.random() * 5 + 2,
    left: Math.random() * 100,
    opacity: (Math.random() * 0.45 + 0.3).toFixed(2),
    duration: `${Math.random() * 10 + 12}s`,
    delay: `${Math.random() * -20}s`,
    drift: `${Math.random() * 120 - 60}px`,
  }));
}

export default function SnowLayer({ dense = false }) {
  const [flakes] = useState(() => createFlakes(dense));

  return (
    <div className="snow-layer" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: `${flake.left}%`,
            opacity: flake.opacity,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
            "--drift": flake.drift,
          }}
        />
      ))}
    </div>
  );
}

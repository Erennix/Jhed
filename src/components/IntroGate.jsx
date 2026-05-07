import { useEffect, useRef, useState } from "react";

export default function IntroGate() {
  const audioRef = useRef(null);
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    if (phase !== "launching") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setPhase("done");
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [phase]);

  const handleStart = async () => {
    if (phase !== "idle") {
      return;
    }

    setPhase("launching");

    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  if (phase === "done") {
    return (
      <audio ref={audioRef} src="/SummerTime.mp3" preload="auto" />
    );
  }

  return (
    <>
      <audio ref={audioRef} src="/SummerTime.mp3" preload="auto" />
      <div className={`intro-gate${phase === "launching" ? " is-launching" : ""}`}>
        <div className="intro-orb intro-orb-one" aria-hidden="true"></div>
        <div className="intro-orb intro-orb-two" aria-hidden="true"></div>
        <div className="intro-stars" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>

        <div className="intro-card glass-panel">
          <p className="eyebrow">A little surprise is waiting</p>
          <h1>Press To Begin</h1>
          <p className="lead">
            Start with one tap, let the moment open up, and let the music carry the rest.
          </p>
          <button className="intro-button" type="button" onClick={handleStart}>
            <span className="intro-button-core">Open the Surprise</span>
          </button>
        </div>

        <div className="intro-burst" aria-hidden="true"></div>
      </div>
    </>
  );
}

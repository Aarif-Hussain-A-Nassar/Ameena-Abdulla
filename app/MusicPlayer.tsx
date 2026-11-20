"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.38;
    let stillMounted = true;

    const tryPlay = () => audio.play().then(() => {
      if (stillMounted) {
        setIsPlaying(true);
        setAutoplayBlocked(false);
      }
    }).catch(() => {
      // Browsers commonly block sound until the visitor taps the play button.
      if (stillMounted) {
        setIsPlaying(false);
        setAutoplayBlocked(true);
      }
    });

    const startOnFirstInteraction = () => {
      void tryPlay();
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
    };

    window.addEventListener("pointerdown", startOnFirstInteraction, { once: true });
    window.addEventListener("keydown", startOnFirstInteraction, { once: true });
    void tryPlay();

    return () => {
      stillMounted = false;
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
    };
  }, []);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
      setAutoplayBlocked(true);
    }
  }

  return (
    <aside className="music-player" aria-label="Background music">
      <audio
        ref={audioRef}
        src="/assets/Ehsaas%20Faheem%20Abdullah%20320%20Kbps.mp3"
        autoPlay
        loop
        preload="auto"
        onPlay={() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        }}
        onPause={() => setIsPlaying(false)}
      />
      <button
        className="music-button"
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isPlaying}
      >
        <span className="music-icon" aria-hidden="true">{isPlaying ? "Ⅱ" : "♫"}</span>
        <span>{isPlaying ? "Music playing" : autoplayBlocked ? "Tap for music" : "Play music"}</span>
        <span className="music-track">Ehsaas</span>
      </button>
    </aside>
  );
}

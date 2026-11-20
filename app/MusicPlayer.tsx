"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.38;
    let stillMounted = true;

    audio.play().catch(() => {
      // Browsers commonly block sound until the visitor taps the play button.
      if (stillMounted) setIsPlaying(false);
    });

    return () => {
      stillMounted = false;
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
    }
  }

  return (
    <aside className="music-player" aria-label="Background music">
      <audio
        ref={audioRef}
        src="/assets/Ehsaas%20Faheem%20Abdullah%20320%20Kbps.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
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
        <span>{isPlaying ? "Music playing" : "Play music"}</span>
        <span className="music-track">Ehsaas</span>
      </button>
    </aside>
  );
}

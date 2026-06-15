import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.05;
    audio.loop = true;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.pause();
      audio.currentTime = 0;

      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.log("No se pudo reproducir la música:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/musica-fondo.mp3"
        preload="auto"
      ></audio>

      <button
        type="button"
        className={`social-btn music-nav-btn ${isPlaying ? "playing" : "paused"}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pausar música" : "Activar música"}
        title={isPlaying ? "Pausar música" : "Activar música"}
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  );
}

export default BackgroundMusic;
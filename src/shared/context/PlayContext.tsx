import React, { createContext, useContext, useEffect, useState } from 'react';

interface PlayerContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  audio: HTMLAudioElement | null;
  setAudio: (audio: HTMLAudioElement | null) => void;
  currentAudioSrc: string | null;
  setCurrentAudioSrc: (audioSrc: string | null) => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentAudioSrc, setCurrentAudioSrc] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.5); // Initial volume level

  useEffect(() => {
    const storedState = localStorage.getItem('isPlaying');
    if (storedState) {
      setIsPlaying(JSON.parse(storedState));
    }
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    localStorage.setItem('isPlaying', JSON.stringify(!isPlaying));
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

  return (
    <PlayerContext.Provider
      value={{ isPlaying, togglePlay, audio, setAudio, currentAudioSrc, setCurrentAudioSrc, volume, setVolume }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

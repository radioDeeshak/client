import React, { createContext, useContext, useEffect, useState } from 'react';

interface PlayerContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  audio: HTMLAudioElement | null;
  setAudio: (audio: HTMLAudioElement | null) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

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

  return <PlayerContext.Provider value={{ isPlaying, togglePlay, audio, setAudio }}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

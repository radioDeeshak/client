'use client';

import React, { useEffect } from 'react';
import { IconPlayerPlayFilled, IconPlayerPauseFilled } from '@tabler/icons-react';
import { PlayProps } from '~/shared/types';
import { usePlayer } from '~/shared/context/PlayContext';

const Play = ({ audioSrc, localStorageKey }: PlayProps) => {
  const { isPlaying, togglePlay, audio, setAudio } = usePlayer();

  useEffect(() => {
    if (!audio) {
      const newAudio = new Audio(audioSrc);
      newAudio.addEventListener('ended', handleAudioEnded);
      setAudio(newAudio);
      return () => {
        newAudio.removeEventListener('ended', handleAudioEnded);
        newAudio.pause();
      };
    }
  }, [audioSrc, audio, setAudio]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
      localStorage.setItem(localStorageKey, isPlaying.toString());
    }
  }, [isPlaying, audio, localStorageKey]);

  const handlePlayPause = () => {
    togglePlay();
  };

  const handleAudioEnded = () => {
    togglePlay();
  };

  return (
    <div className="mx-auto max-w-3xl">
      {audio && (
        <button onClick={handlePlayPause} className="btn btn-primary flex items-center justify-center">
          {isPlaying ? (
            <IconPlayerPauseFilled size={18} color="white" />
          ) : (
            <IconPlayerPlayFilled size={18} color="white" />
          )}
        </button>
      )}
    </div>
  );
};

export default Play;

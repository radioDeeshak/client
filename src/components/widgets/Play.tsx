'use client';

import React, { useState, useEffect } from 'react';
import { IconPlayerPlayFilled, IconPlayerPauseFilled } from '@tabler/icons-react';
import { PlayProps } from '../../shared/types';

const Play = ({ audioSrc, audioType }: PlayProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioSrc) {
      setAudio(new Audio(audioSrc));
    }
  }, [audioSrc]);

  const handlePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', handleAudioEnded);
      return () => {
        audio.removeEventListener('ended', handleAudioEnded);
        audio.pause();
      };
    }
  }, [audio]);

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  // Conditionally render the button based on audioSrc existence
  return (
    <div className="mx-auto max-w-3xl">
      {audioSrc && (
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

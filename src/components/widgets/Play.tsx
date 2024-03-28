'use client';

import React, { useEffect, useState } from 'react';
import {
  IconPlayerPlayFilled,
  IconPlayerPauseFilled,
  IconPlayerSkipForward,
  IconPlayerSkipBack,
} from '@tabler/icons-react';
import { PlayProps } from '~/shared/types';
import { usePlayer } from '~/shared/context/PlayContext';

const Play = ({ audioSrc, localStorageKey, audioList }: PlayProps) => {
  const { isPlaying, togglePlay, audio, setAudio, setCurrentAudioSrc, currentAudioSrc, volume, setVolume } =
    usePlayer();
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  useEffect(() => {
    if (!audio || audioSrc !== currentAudioSrc) {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(audioSrc);
      newAudio.addEventListener('ended', handleAudioEnded);
      newAudio.volume = volume;
      setAudio(newAudio);
      setCurrentAudioSrc(audioSrc);
      return () => {
        newAudio.removeEventListener('ended', handleAudioEnded);
        newAudio.pause();
      };
    }
  }, [audioSrc, audio, setAudio, currentAudioSrc, setCurrentAudioSrc, volume]);

  useEffect(() => {
    const lastPlayedAudioSrc = sessionStorage.getItem('lastPlayedAudioSrc');
    const isAudioPlaying = sessionStorage.getItem('isAudioPlaying');

    if (lastPlayedAudioSrc && lastPlayedAudioSrc === audioSrc && isAudioPlaying === 'true') {
      if (audio) {
        audio.play();
      }
    } else {
      if (audio) {
        audio.pause();
      }
    }
  }, [audio, audioSrc]);

  const handlePlayPause = () => {
    togglePlay();
    if (!isPlaying) {
      sessionStorage.setItem('lastPlayedAudioSrc', audioSrc);
      sessionStorage.setItem('isAudioPlaying', 'true');
      if (audio) {
        audio.play();
      }
    } else {
      sessionStorage.removeItem('lastPlayedAudioSrc');
      sessionStorage.removeItem('isAudioPlaying');
      if (audio) {
        audio.pause();
      }
    }
  };

  const handleAudioEnded = () => {
    togglePlay();
    sessionStorage.removeItem('lastPlayedAudioSrc');
    sessionStorage.removeItem('isAudioPlaying');
    playNext();
  };

  const playNext = () => {
    if (currentAudioIndex < audioList.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
    }
  };

  const playPrevious = () => {
    if (currentAudioIndex > 0) {
      setCurrentAudioIndex(currentAudioIndex - 1);
    }
  };

  useEffect(() => {
    if (audioList && audioList[currentAudioIndex]) {
      setCurrentAudioSrc(audioList[currentAudioIndex]);
    }
  }, [audioList, currentAudioIndex, setCurrentAudioSrc]);

  return (
    <div className="mx-auto max-w-3xl">
      {audio && (
        <div className="flex items-center justify-center">
          <button onClick={playPrevious} className="btn btn-primary rounded-full p-3 mr-4">
            <IconPlayerSkipBack />
          </button>
          <button
            onClick={handlePlayPause}
            className="btn btn-primary rounded-full p-3 flex items-center justify-center"
          >
            {isPlaying ? <IconPlayerPauseFilled color="white" /> : <IconPlayerPlayFilled color="white" />}
          </button>
          <button onClick={playNext} className="btn btn-primary rounded-full p-3 ml-4">
            <IconPlayerSkipForward />
          </button>
        </div>
      )}
    </div>
  );
};

export default Play;

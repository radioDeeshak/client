'use client';

import React, { useEffect, useState } from 'react';
import { IconPlayerPlayFilled, IconPlayerPauseFilled, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { usePlayer } from '~/shared/context/PlayContext';

const FloatingPlayButton = () => {
  const { isPlaying, togglePlay, currentAudioSrc } = usePlayer();
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsVisible(isPlaying || isClicked);
  }, [isPlaying, isClicked]);

  const handlePlayPause = () => {
    togglePlay();
    setIsClicked(true);
    setIsVisible(true);
  };

  const handlePause = () => {
    if (isPlaying) {
      togglePlay();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        borderRadius: '50%',
        width: '70px',
        height: '70px',
        background: 'rgba(249, 115, 22, 0.7)',
        color: 'white',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <button
        onClick={currentAudioSrc ? handlePause : handlePlayPause}
        style={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
      >
        {isPlaying ? (
          <IconPlayerPauseFilled size={24} color="white" />
        ) : (
          <IconPlayerPlayFilled size={24} color="white" />
        )}
      </button>
    </div>
  );
};

export default FloatingPlayButton;

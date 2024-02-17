"use client";

import React, { useState, useEffect } from 'react';
import { IconPlayerPlayFilled, IconPlayerPauseFilled } from '@tabler/icons-react';

const Play = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const audioUrl = 'https://secure1.reliastream.com/deeshak/;stream.nsv';

    useEffect(() => {
        setAudio(new Audio(audioUrl));
    }, []);

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

    return (
        <div className="fixed bottom-12 right-4 z-50">
            <button onClick={handlePlayPause} className="btn btn-primary m-1 h-20 w-20 flex items-center justify-center rounded-full" style={{ marginBottom: '10px' }}>
                {isPlaying ? (
                    <IconPlayerPauseFilled size={32} color="white" />
                ) : (
                    <IconPlayerPlayFilled size={32} color="white" />
                )}
            </button>
        </div>
    );
};

export default Play;

"use client";

import React, { useState, useEffect } from 'react';
import { IconPlayerPlay, IconPlayerPause } from '@tabler/icons-react';

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
            <button onClick={handlePlayPause} className="btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6" style={{ marginBottom: '10px' }}>
                {isPlaying ? (
                    <IconPlayerPause size={24} color="white" />
                ) : (
                    <IconPlayerPlay size={24} color="white" />
                )}
            </button>
        </div>
    );
};

export default Play;

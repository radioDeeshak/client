'use client';

import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';
import { PlayerProvider } from '~/shared/context/PlayContext';

export interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    <PlayerProvider>{children}</PlayerProvider>
  </ThemeProvider>
);

export default Providers;

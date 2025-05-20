import React, { createContext, useContext, useEffect, useState } from 'react';
import { CurrentPlay } from '../type';

interface CurrentPlayContextType {
  currentPlay: CurrentPlay | null;
  currentTime: number;
  currentPlayStoryId: number;
  setCurrentTime: (time: number) => void;
  setCurrentPlayStoryId: (id: number) => void;
  setCurrentPlay: (currentPlay: CurrentPlay) => void;
}

const CurrentPlayContext = createContext<CurrentPlayContextType | undefined>(
  undefined
);

const getInitialCurrentPlay = (): CurrentPlay | null => {
  try {
    const stored = localStorage.getItem('currentPlay');
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    console.error('Failed to load currentPlay from localStorage:', e);
    return null;
  }
};

export const CurrentPlayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPlay, setCurrentPlay] = useState<CurrentPlay | null>(
    getInitialCurrentPlay
  );

  const [currentTime, setCurrentTime] = useState(0);
  const [currentPlayStoryId, setCurrentPlayStoryId] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem('currentPlay', JSON.stringify(currentPlay));
    } catch (e) {
      console.error('Failed to save currentPlay to localStorage:', e);
    }
  }, [currentPlay]);
  return (
    <CurrentPlayContext.Provider
      value={{
        currentPlay,
        currentTime,
        currentPlayStoryId,
        setCurrentTime,
        setCurrentPlayStoryId,
        setCurrentPlay,
      }}
    >
      {children}
    </CurrentPlayContext.Provider>
  );
};

export const useCurrentPlay = () => {
  const context = useContext(CurrentPlayContext);
  if (!context) {
    throw new Error('useTrack must be used within a TrackProvider');
  }
  return context;
};

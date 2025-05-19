import React, { createContext, useContext, useState } from 'react';
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

export const CurrentPlayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPlay, setCurrentPlay] = useState<CurrentPlay | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentPlayStoryId, setCurrentPlayStoryId] = useState(0);
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

import React, { createContext, useContext, useState } from 'react';
import { CurrentPlay } from '../type';

interface CurrentPlayContextType {
  currentPlay: CurrentPlay | null;
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

  return (
    <CurrentPlayContext.Provider value={{ currentPlay, setCurrentPlay }}>
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

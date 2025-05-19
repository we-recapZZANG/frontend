import React, { createContext, useContext, useState } from 'react';
import { Archive } from '../type';

interface TrackContextType {
  trackList: Archive[];
  setTrackList: React.Dispatch<React.SetStateAction<Archive[]>>;
}

const TrackContext = createContext<TrackContextType | undefined>(undefined);

export const TrackProvider = ({ children }: { children: React.ReactNode }) => {
  const [trackList, setTrackList] = useState<Archive[]>([]);

  return (
    <TrackContext.Provider value={{ trackList, setTrackList }}>
      {children}
    </TrackContext.Provider>
  );
};

export const useTrack = () => {
  const context = useContext(TrackContext);
  if (!context) {
    throw new Error('useTrack must be used within a TrackProvider');
  }
  return context;
};

import React, { createContext, useContext, useState } from 'react';

interface TrackModalContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrackModalContext = createContext<TrackModalContextType | undefined>(
  undefined
);

export const TrackModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <TrackModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </TrackModalContext.Provider>
  );
};

export const useTrackModal = () => {
  const context = useContext(TrackModalContext);
  if (!context) {
    throw new Error('useTrack must be used within a TrackProvider');
  }
  return context;
};

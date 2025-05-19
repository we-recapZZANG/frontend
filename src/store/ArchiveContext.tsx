import React, { createContext, useContext, useState } from 'react';

export interface Archive {
  storyId: number;
  title: string;
  category: 'FAIRY_TALE' | 'LETTER';
  storyLength: string;
  created_at: string;
}

interface ArchiveContextType {
  archiveList: Archive[];
  setArchiveList: React.Dispatch<React.SetStateAction<Archive[]>>;
}

const ArchiveContext = createContext<ArchiveContextType | undefined>(undefined);

export const ArchiveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [archiveList, setArchiveList] = useState<Archive[]>([]);

  return (
    <ArchiveContext.Provider value={{ archiveList, setArchiveList }}>
      {children}
    </ArchiveContext.Provider>
  );
};

export const useArchive = () => {
  const context = useContext(ArchiveContext);
  if (!context) {
    throw new Error('useArchive must be used within an ArchiveProvider');
  }
  return context;
};

import React, {createContext, useState, useContext} from 'react';

interface Audio {
  url: string;
  title: string;
  duration: number;
  artwork: string;
}

const FilesContext = createContext<{
  audios: Audio[];
  isLoading: boolean;
  setAudios?: (files: Audio[]) => void;
}>({audios: [], isLoading: false});

export const FilesContextProvider: React.FC = ({children}) => {
  const [audios, setAudios] = useState<Audio[]>([]);
  const isLoading = audios.length === 0;

  return (
    <FilesContext.Provider value={{audios, setAudios, isLoading}}>
      {children}
    </FilesContext.Provider>
  );
};

export const useFilesContext = () => {
  const context = useContext(FilesContext);

  return context;
};

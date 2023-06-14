'use client';
import {ReactElement, createContext, useState} from 'react';

export const DialogEndContext = createContext({
  dialogEnd: {
    home: false,
    portfolio: false,
    projects: {
      bowling: false,
      complaints: false,
      imdb: false,
      crabs: false,
      van: false,
    },
    contact: false,
  } as DialogEnd,
  handleDialogEnd: (page: string, boolean: boolean, projectName?: string) => {},
});

type Props = {
  children: ReactElement;
};

export const DialogEndProvider = ({children}: Props) => {
  const [dialogEnd, setDialogEnd] = useState<DialogEnd>({
    home: false,
    portfolio: false,
    projects: {
      bowling: false,
      complaints: false,
      imdb: false,
      crabs: false,
      van: false,
    },
    contact: false,
  });

  const handleDialogEnd = (
    page: string,
    boolean: boolean,
    projectName?: string
  ) => {
    setDialogEnd((old) => {
      if (page === 'project' && projectName) {
        return {...old, projects: {...old.projects, [projectName]: boolean}};
      }
      return {...old, [page]: boolean};
    });
  };
  console.log(dialogEnd);

  const value = {dialogEnd, handleDialogEnd};
  return (
    <DialogEndContext.Provider value={value}>
      {children}
    </DialogEndContext.Provider>
  );
};

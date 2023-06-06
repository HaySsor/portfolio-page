'use client';

import {Chilanka} from 'next/font/google';
import {ReactElement, createContext, useState} from 'react';

export const DialogEndContext = createContext({
  dialogEnd: false as boolean,
  handleDialogEnd: (boolean: boolean) => {},
});

type Props = {
  children: ReactElement;
};

export const DialogEndProvider = ({children}: Props) => {
  const [dialogEnd, setDialogEnd] = useState(false);

  const handleDialogEnd = (boolean: boolean) => {
    setDialogEnd(boolean);
  };
  console.log(dialogEnd);

  const value = {dialogEnd, handleDialogEnd};
  return (
    <DialogEndContext.Provider value={value}>
      {children}
    </DialogEndContext.Provider>
  );
};

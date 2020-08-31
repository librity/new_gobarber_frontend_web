import React, { createContext, useCallback, useState, useContext } from 'react';

import Toaster from '../components/Toaster';

interface ToasterContextData {
  popToast(): void;
  eatToast(): void;
}

const ToasterContext = createContext<ToasterContextData>(
  {} as ToasterContextData,
);

export const ToasterProvider: React.FC = ({ children }) => {
  const popToast = useCallback(() => {
    console.log('Hot Hot');
  }, []);

  const eatToast = useCallback(() => {
    console.log('Yum Yum');
  }, []);

  return (
    <ToasterContext.Provider value={{ popToast, eatToast }}>
      {children}

      <Toaster />
    </ToasterContext.Provider>
  );
};

export const useToaster = (): ToasterContextData => {
  const context = useContext(ToasterContext);

  if (!context)
    throw new Error('useToaster must be used within an ToasterProvider!');

  return context;
};

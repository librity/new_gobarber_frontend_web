import React, { createContext, useCallback, useState, useContext } from 'react';
import { uuid } from 'uuidv4';

import Toaster from '../components/Toaster';

export interface Toast {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToasterContextData {
  popToast(message: Omit<Toast, 'id'>): void;
  eatToast(id: string): void;
}

const ToasterContext = createContext<ToasterContextData>(
  {} as ToasterContextData,
);

export const ToasterProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const popToast = useCallback(
    ({ type, title, description }: Omit<Toast, 'id'>) => {
      const id = uuid();

      const toast = { id, type, title, description };

      setToasts(oldToasts => [...oldToasts, toast]);
    },
    [],
  );

  const eatToast = useCallback((id: string) => {
    setToasts(oldToasts => oldToasts.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToasterContext.Provider value={{ popToast, eatToast }}>
      {children}

      <Toaster toasts={toasts} />
    </ToasterContext.Provider>
  );
};

export const useToaster = (): ToasterContextData => {
  const context = useContext(ToasterContext);

  if (!context)
    throw new Error('useToaster must be used within an ToasterProvider!');

  return context;
};

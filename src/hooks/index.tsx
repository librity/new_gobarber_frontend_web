import React, { Children } from 'react';

import { AuthProvider } from './auth';
import { ToasterProvider } from './toaster';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToasterProvider>{children}</ToasterProvider>
  </AuthProvider>
);

export default AppProvider;

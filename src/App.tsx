import React from 'react';

import GlobalStyle from './styles/global';
import Toaster from './components/Toaster';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <Toaster />

    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AuthProvider>
  </>
);

export default App;

import React from 'react';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <AuthContext.Provider value={{ name: 'Luisito' }}>
      <SignIn />
      {/* <SignUp /> */}
    </AuthContext.Provider>
  </>
);

export default App;

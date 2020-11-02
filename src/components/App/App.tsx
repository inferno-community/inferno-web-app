import React, { FC } from 'react';
import Header from 'components/Header';
import ThemeProvider from 'components/ThemeProvider';

const App: FC = () => {
  return (
    <div>
      <ThemeProvider>
        <Header chipLabel="Community" />
      </ThemeProvider>
    </div>
  );
};

export default App;

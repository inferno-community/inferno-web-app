import React, { FC } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ThemeProvider from 'components/ThemeProvider';

const App: FC = () => {
  return (
    <div>
      <ThemeProvider>
        <Header chipLabel="Community" />
        <Footer githubLink="https://github.com/onc-healthit/inferno" versionNumber="0.0" />
      </ThemeProvider>
    </div>
  );
};

export default App;

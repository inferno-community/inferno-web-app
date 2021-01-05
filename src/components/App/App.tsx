import React, { FC } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LandingPage from 'components/LandingPage';
import ThemeProvider from 'components/ThemeProvider';

const App: FC = () => {
  return (
    <div>
      <ThemeProvider>
        <Header chipLabel="Community" />
        <LandingPage
          presets={['None', 'SMART Bulk Tests', 'US Core v3.1.0']}
          testSets={['Bulk data tests (via BDT)', 'US Core v3.1.1']}
        />
        <Footer githubLink="https://github.com/onc-healthit/inferno" versionNumber="0.0" />
      </ThemeProvider>
    </div>
  );
};

export default App;

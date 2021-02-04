import React, { FC } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ThemeProvider from 'components/ThemeProvider';
import TestSequenceList from 'components/SequenceList/TestSequenceList';
const App: FC = () => {
  return (
    <div>
      <ThemeProvider>
        <Header chipLabel="Community" />
        <TestSequenceList />
        <Footer githubLink="https://github.com/onc-healthit/inferno" versionNumber="0.0" />
      </ThemeProvider>
    </div>
  );
};

export default App;

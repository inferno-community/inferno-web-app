import React, { FC } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LandingPage from 'components/LandingPage';
import ThemeProvider from 'components/ThemeProvider';

const App: FC = () => {
  const presets = [
    {
      name: 'None',
      fhirServer: '',
      testSet: '',
    },
    {
      name: 'Demonstration Sequence',
      fhirServer: 'https://inferno.healthit.gov/reference-server/r4',
      testSet: 'Demonstration Sequence',
    },
  ];

  return (
    <div>
      <ThemeProvider>
        <Header chipLabel="Community" />
        <LandingPage presets={presets} />
        <Footer githubLink="https://github.com/onc-healthit/inferno" versionNumber="0.0" />
      </ThemeProvider>
    </div>
  );
};

export default App;

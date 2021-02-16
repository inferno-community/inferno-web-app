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
      name: 'SMART Bulk Tests',
      fhirServer:
        'https://bulk-data.smarthealthit.org/eyJlcnIiOiIiLCJwYWdlIjoxMDAwLCJkdXIiOjEwLCJ0bHQiOjE1LCJtIjoxLCJzdHUiOjR9/fhir',
      testSet: 'Bulk data tests (via BDT)',
    },
    {
      name: 'US Core v3.1.1 with Inferno Reference Server',
      fhirServer: 'https://inferno.healthit.gov/reference-server/r4',
      testSet: 'US Core v3.1.1',
    },
  ];
  return (
    <div>
      <ThemeProvider>
        <Header chipLabel="Community" />
        <LandingPage presets={presets} testSets={['Bulk data tests (via BDT)', 'US Core v3.1.1']} />
        <Footer githubLink="https://github.com/onc-healthit/inferno" versionNumber="0.0" />
      </ThemeProvider>
    </div>
  );
};

export default App;

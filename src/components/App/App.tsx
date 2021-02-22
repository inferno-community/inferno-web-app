import React, { FC, useState } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LandingPage from 'components/LandingPage';
import ThemeProvider from 'components/ThemeProvider';
import TestSequenceList from 'components/SequenceList/TestSequenceList';
import { Container } from '@material-ui/core';
import { TestSuite } from 'models/models';
import TestSuiteComponent from 'components/SequenceList/TestSuite';

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
  enum ActiveComponents {
    LandingPage,
    TestSuitePage,
  }

  const [activeComponent, setActiveComponent] = useState<ActiveComponents>(
    ActiveComponents.LandingPage
  );
  const [testSuite, setTestSuite] = useState<TestSuite>();

  function launchTestSuite(testSuite: TestSuite) {
    setTestSuite(testSuite);
    setActiveComponent(ActiveComponents.TestSuitePage);
  }

  let component;
  switch (activeComponent) {
    case ActiveComponents.LandingPage:
      component = <LandingPage presets={presets} launchTestSuite={launchTestSuite} />;
      break;
    case ActiveComponents.TestSuitePage:
      if (testSuite) {
        component = <TestSuiteComponent {...testSuite} />;
      } else {
        component = 'Error';
      }
      break;
  }
  return (
    <div>
      <ThemeProvider>
        <Header chipLabel="Community" />
        <Container maxWidth="md">{component}</Container>
        <Footer githubLink="https://github.com/onc-healthit/inferno" versionNumber="0.0" />
      </ThemeProvider>
    </div>
  );
};

export default App;

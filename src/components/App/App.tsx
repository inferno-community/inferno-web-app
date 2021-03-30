import React, { FC, useState } from 'react';
import Header from 'components/Header';
import LandingPage from 'components/LandingPage';
import ThemeProvider from 'components/ThemeProvider';
import { Container } from '@material-ui/core';
import { TestSuite } from 'models/testSuiteModels';
import TestSuiteComponent from 'components/TestSuite/TestSuite';

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
      testSet: 'DemoIG_STU1::DemoSuite',
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
      </ThemeProvider>
    </div>
  );
};

export default App;

import React, { FC, useState } from 'react';
import Header from 'components/Header';
import LandingPage from 'components/LandingPage';
import ThemeProvider from 'components/ThemeProvider';
import { Container } from '@material-ui/core';
import { TestSession, TestSuite } from 'models/testSuiteModels';
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
  const [testSession, setTestSession] = useState<TestSession>();

  function launchTestSession(testSession: TestSession) {
    setTestSession(testSession);
    setActiveComponent(ActiveComponents.TestSuitePage);
  }

  let component;
  switch (activeComponent) {
    case ActiveComponents.LandingPage:
      component = <LandingPage presets={presets} launchTestSession={launchTestSession} />;
      break;
    case ActiveComponents.TestSuitePage:
      if (testSession?.test_suite) {
        component = (
          <TestSuiteComponent testSessionId={testSession.id} {...testSession.test_suite} />
        );
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

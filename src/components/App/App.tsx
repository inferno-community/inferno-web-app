import React, { FC } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ThemeProvider from 'components/ThemeProvider';
import Sequence, { SequenceResult } from 'components/Sequence';
import { List } from '@material-ui/core';
import { Test, TestResult } from 'components/Sequence/TestList/TestList';

const App: FC = () => {
  const test1: Test = {
    description: 'FHIR server makes SMART configuration available from well-known endpoint',
    result: TestResult.Success,
  };
  const test2: Test = {
    description: 'Well-known configuration contains required fields',
    result: TestResult.Failure,
  };
  const testList1 = [test1, test2];
  return (
    <div>
      <ThemeProvider>
        <Header chipLabel="Community" />
        <List>
          <Sequence
            testList={testList1}
            title="SMART on FHIR Discovery"
            description="Retrieve server's SMART on FHIR configuration"
            result={SequenceResult.Failure}
          />
        </List>
        <Footer githubLink="https://github.com/onc-healthit/inferno" versionNumber="0.0" />
      </ThemeProvider>
    </div>
  );
};

export default App;

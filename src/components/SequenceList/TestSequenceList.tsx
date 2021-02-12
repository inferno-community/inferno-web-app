import React, { FC } from 'react';
import SequenceList from './SequenceList';
import { SequenceProps, SequenceResult } from './Sequence';
import { Test, TestResult } from 'components/SequenceList/TestList';

const test1: Test = {
  description: 'FHIR server makes SMART configuration available from well-known endpoint',
  result: TestResult.Success,
};
const test2: Test = {
  description: 'Well-known configuration contains required fields',
  result: TestResult.Failure,
};
const test3: Test = {
  description: 'Client registration endpoint secured by transport layer security',
  result: TestResult.Success,
};
const test4: Test = {
  description: 'Client registration endpoint accepts POST messages',
  result: TestResult.Success,
};
const test5: Test = {
  description: 'Registration endpoint does not respond with an error',
  result: TestResult.Success,
};

const testList1 = [test1, test2];
const testList2 = [test3, test4, test5];

const sequence1: SequenceProps = {
  testList: testList1,
  title: 'SMART on FHIR Discovery',
  description: "Retrieve server's SMART on FHIR configuration",
  result: SequenceResult.Failure,
};

const sequence2: SequenceProps = {
  testList: testList2,
  title: 'Dynamic Registration',
  description: 'Verify that the server supports the OAuth 2.0 Dynamic Client Registration Protocol',
  result: SequenceResult.Success,
};

const TestSequenceList: FC<unknown> = () => {
  return <SequenceList sequenceInfo={[sequence1, sequence2]} header="SMART App Launch" />;
};

export default TestSequenceList;

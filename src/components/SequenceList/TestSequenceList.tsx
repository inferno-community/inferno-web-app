import React, { FC } from 'react';
import SequenceList from './SequenceList';
import { Test, TestSequence, Result } from 'models/models';

const test1: Test = {
  title: 'FHIR server makes SMART configuration available from well-known endpoint',
  result: Result.Success,
};
const test2: Test = {
  title: 'Well-known configuration contains required fields',
  result: Result.Failure,
};
const test3: Test = {
  title: 'Client registration endpoint secured by transport layer security',
  result: Result.Success,
};
const test4: Test = {
  title: 'Client registration endpoint accepts POST messages',
  result: Result.Success,
};
const test5: Test = {
  title: 'Registration endpoint does not respond with an error',
  result: Result.Success,
};

const testList1 = [test1, test2];
const testList2 = [test3, test4, test5];

const sequence1: TestSequence = {
  id: '0',
  tests: testList1,
  title: 'SMART on FHIR Discovery',
  description: "Retrieve server's SMART on FHIR configuration",
  result: Result.Failure,
};

const sequence2: TestSequence = {
  id: '1',
  tests: testList2,
  title: 'Dynamic Registration',
  description: 'Verify that the server supports the OAuth 2.0 Dynamic Client Registration Protocol',
  result: Result.Success,
};

const TestSequenceList: FC<unknown> = () => {
  return <SequenceList test_sequences={[sequence1, sequence2]} id="Smart App Launch" />;
};

export default TestSequenceList;

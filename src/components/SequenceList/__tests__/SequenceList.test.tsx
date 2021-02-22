import React from 'react';
import { render, screen } from '@testing-library/react';
import SequenceList from '../SequenceList';
import { Test, Result, TestSequence } from 'models/models';

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

const testList1 = [test1, test2];
const testList2 = [test3, test4];

const sequence1: TestSequence = {
  tests: testList1,
  title: 'SMART on FHIR Discovery',
  description: "Retrieve server's SMART on FHIR configuration",
  result: Result.Failure,
  id: '0',
};

const sequence2: TestSequence = {
  tests: testList2,
  title: 'Dynamic Registration',
  description: 'Verify that the server supports the OAuth 2.0 Dynamic Client Registration Protocol',
  result: Result.Success,
  id: '1',
};

test('renders sequence list', () => {
  render(<SequenceList test_sequences={[sequence1, sequence2]} id="SMART App Launch" />);
  const discoverySequence = screen.getByText(sequence1.title);
  expect(discoverySequence).toBeVisible();
  const registrationSequence = screen.getByText(sequence2.title);
  expect(registrationSequence).toBeVisible();
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Sequence, { SequenceProps, SequenceResult } from '../Sequence';
import { Test, TestResult } from 'components/SequenceList/TestList';

const test1: Test = {
  description: 'FHIR server makes SMART configuration available from well-known endpoint',
  result: TestResult.Success,
};
const test2: Test = {
  description: 'Well-known configuration contains required fields',
  result: TestResult.Failure,
};
const testList1 = [test1, test2];

const sequenceProps: SequenceProps = {
  testList: testList1,
  title: 'SMART on FHIR Discovery',
  description: "Retrieve server's SMART on FHIR configuration",
  result: SequenceResult.Failure,
};

test('Sequence starts out collapsed', () => {
  render(<Sequence {...sequenceProps} />);
  const testResultsTab = screen.queryByText('Test Results');
  expect(testResultsTab).toBeNull();
  const firstTest = screen.queryByText(test1.description);
  expect(firstTest).toBeNull();
});

test('Sequence expands when clicked', () => {
  render(<Sequence {...sequenceProps} />);
  const discoverySequence = screen.getByText('SMART on FHIR Discovery');
  fireEvent.click(discoverySequence);
  const testResultsTab = screen.queryByText('Test Results');
  expect(testResultsTab).not.toBeNull();
  const firstTest = screen.getByText(test1.description);
  expect(firstTest).toBeVisible();
});

test('Sequence changes tabs when clicked', () => {
  render(<Sequence {...sequenceProps} />);
  const discoverySequence = screen.getByText('SMART on FHIR Discovery');
  fireEvent.click(discoverySequence);
  const httpRequestTab = screen.getByText('HTTP Requests');
  fireEvent.click(httpRequestTab);
  const firstTest = screen.queryByText(test1.description);
  expect(firstTest).toBeNull();
});

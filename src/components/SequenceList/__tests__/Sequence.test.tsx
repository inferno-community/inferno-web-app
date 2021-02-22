import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Sequence from '../Sequence';
import { Test, Result, TestSequence } from 'models/models';

const test1: Test = {
  title: 'FHIR server makes SMART configuration available from well-known endpoint',
  result: Result.Success,
};
const test2: Test = {
  title: 'Well-known configuration contains required fields',
  result: Result.Failure,
};
const testList1 = [test1, test2];

const sequenceProps: TestSequence = {
  tests: testList1,
  title: 'SMART on FHIR Discovery',
  description: "Retrieve server's SMART on FHIR configuration",
  result: Result.Failure,
  id: '0',
};

test('Sequence starts out collapsed', () => {
  render(<Sequence {...sequenceProps} />);
  const testResultsTab = screen.queryByText('Test Results');
  expect(testResultsTab).toBeNull();
  const firstTest = screen.queryByText(test1.title);
  expect(firstTest).toBeNull();
});

test('Sequence expands when clicked', () => {
  render(<Sequence {...sequenceProps} />);
  const discoverySequence = screen.getByText('SMART on FHIR Discovery');
  fireEvent.click(discoverySequence);
  const testResultsTab = screen.queryByText('Test Results');
  expect(testResultsTab).not.toBeNull();
  const firstTest = screen.getByText(test1.title);
  expect(firstTest).toBeVisible();
});

test('Sequence changes tabs when clicked', () => {
  render(<Sequence {...sequenceProps} />);
  const discoverySequence = screen.getByText('SMART on FHIR Discovery');
  fireEvent.click(discoverySequence);
  const httpRequestTab = screen.getByText('HTTP Requests');
  fireEvent.click(httpRequestTab);
  const firstTest = screen.queryByText(test1.title);
  expect(firstTest).toBeNull();
});

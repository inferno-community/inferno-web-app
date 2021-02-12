import React from 'react';
import { prettyDOM, render, screen } from '@testing-library/react';
import TestList from '../TestList';
import { Test, TestResult } from 'components/SequenceList/TestList';
import { debug } from 'console';

const test1: Test = {
  description: 'FHIR server makes SMART configuration available from well-known endpoint',
  result: TestResult.Success,
};
const test2: Test = {
  description: 'Well-known configuration contains required fields',
  result: TestResult.Failure,
};
const testList = [test1, test2];

test('Test list tests are rendered', () => {
  render(<TestList tests={testList} />);
  const firstTest = screen.queryByText(test1.description);
  expect(firstTest).toBeVisible();
  const secondtest = screen.queryByText(test2.description);
  expect(secondtest).toBeVisible();
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Result, TestSuite, TestGroup } from 'models/testSuiteModels';
import TestSuiteComponent from '../TestSuite';

const test1: TestGroup = {
  id: '1',
  title: 'FHIR server makes SMART configuration available from well-known endpoint',
  result: Result.Success,
  test_groups: [],
};
const test2: TestGroup = {
  id: '2',
  title: 'Well-known configuration contains required fields',
  result: Result.Failure,
  test_groups: [],
};
const test3: TestGroup = {
  id: '3',
  title: 'Client registration endpoint secured by transport layer security',
  result: Result.Success,
  test_groups: [],
};
const test4: TestGroup = {
  id: '4',
  title: 'Client registration endpoint accepts POST messages',
  result: Result.Success,
  test_groups: [],
};

const testList1 = [test1, test2];
const testList2 = [test3, test4];

const sequence1: TestGroup = {
  test_groups: testList1,
  title: 'SMART on FHIR Discovery',
  result: Result.Failure,
  id: '0',
};

const sequence2: TestGroup = {
  test_groups: testList2,
  title: 'Dynamic Registration',
  result: Result.Success,
  id: '1',
};

const testSuiteProps: TestSuite = {
  title: 'Demonstration Suite',
  id: 'example suite',
  test_groups: [sequence1, sequence2],
};

test('Renders Test Suite', () => {
  render(<TestSuiteComponent {...testSuiteProps} />);
  const testSuiteTitle = screen.getByText(testSuiteProps.title);
  expect(testSuiteTitle).toBeVisible();
  const discoverySequence = screen.getByText(sequence1.title);
  expect(discoverySequence).toBeVisible();
  const registrationSequence = screen.getByText(sequence2.title);
  expect(registrationSequence).toBeVisible();
});

test('Test group expands when clicked', () => {
  render(<TestSuiteComponent {...testSuiteProps} />);
  const discoverySequence = screen.getByText(sequence1.title);
  fireEvent.click(discoverySequence);
  const testResultsTab = screen.queryByText('Test Results');
  expect(testResultsTab).not.toBeNull();
  const firstTest = screen.getByText(test1.title);
  expect(firstTest).toBeVisible();
});

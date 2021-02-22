import React from 'react';
import { render, screen } from '@testing-library/react';
import TestList from '../TestList';
import { Test, Result } from 'models/models';

const test1: Test = {
  title: 'FHIR server makes SMART configuration available from well-known endpoint',
  result: Result.Success,
};
const test2: Test = {
  title: 'Well-known configuration contains required fields',
  result: Result.Failure,
};
const testList = [test1, test2];

test('Test list tests are rendered', () => {
  render(<TestList tests={testList} />);
  const firstTest = screen.queryByText(test1.title);
  expect(firstTest).toBeVisible();
  const secondtest = screen.queryByText(test2.title);
  expect(secondtest).toBeVisible();
});

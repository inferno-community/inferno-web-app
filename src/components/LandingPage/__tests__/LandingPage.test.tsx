import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../LandingPage';
import { TestSuite } from 'models/testSuiteModels';

const presets = [
  {
    name: 'None',
    fhirServer: '',
    testSet: '',
  },
  {
    name: 'SMART Bulk Tests',
    fhirServer:
      'https://bulk-data.smarthealthit.org/eyJlcnIiOiIiLCJwYWdlIjoxMDAwLCJkdXIiOjEwLCJ0bHQiOjE1LCJtIjoxLCJzdHUiOjR9/fhir',
    testSet: 'Bulk data tests (via BDT)',
  },
  {
    name: 'US Core v3.1.1 with Inferno Reference Server',
    fhirServer: 'https://inferno.healthit.gov/reference-server/r4',
    testSet: 'US Core v3.1.1',
  },
];

function launchTestSuite(_testSuite: TestSuite) {
  return;
}

test('renders landing page', () => {
  render(<LandingPage presets={presets} launchTestSuite={launchTestSuite} />);
  const titleText = screen.getByText('FHIR Testing with Inferno');
  expect(titleText).toBeVisible();
});

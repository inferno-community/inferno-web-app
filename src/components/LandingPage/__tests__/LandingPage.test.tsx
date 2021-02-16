import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../LandingPage';

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

const testSets = ['Bulk data tests (via BDT)', 'US Core v3.1.1'];

test('renders landing page', () => {
  render(<LandingPage presets={presets} testSets={testSets} />);
  const titleText = screen.getByText('FHIR Testing with Inferno');
  expect(titleText).toBeVisible();
});

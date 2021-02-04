import React from 'react';
import { render, screen } from '@testing-library/react';
import RequirementsModal, {
  SequenceRequirement,
  RadioSequenceRequirement,
} from '../RequirementsModal';
import { assert } from 'console';

const hideModal = () => {
  return;
};

const clientTypeRequirement: RadioSequenceRequirement = {
  label: 'Client Type',
  values: ['Confidential', 'Public'],
};

const dynamicRegistrationEndpointRequirement: SequenceRequirement = {
  label: 'OAuth 2.0 Dynamic Registration Endpoint',
};

test('renders requirement modal', () => {
  render(<RequirementsModal requirements={[]} modalVisible={true} hideModal={hideModal} />);
  const titleElement = screen.getByText(/Sequence Inputs/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders inputs', () => {
  const requirements = [clientTypeRequirement, dynamicRegistrationEndpointRequirement];
  render(
    <RequirementsModal requirements={requirements} modalVisible={true} hideModal={hideModal} />
  );
  const textInput = screen.getByLabelText(dynamicRegistrationEndpointRequirement.label);
  expect(textInput).toBeInTheDocument();
  assert(textInput instanceof HTMLInputElement);

  const radioGroupLabel = screen.getByText(clientTypeRequirement.label);
  expect(radioGroupLabel).toBeInTheDocument();
  clientTypeRequirement.values.forEach((value: string) => {
    const optionInput = screen.getByLabelText(value);
    expect(optionInput).toBeInTheDocument();
    assert(textInput instanceof HTMLInputElement);
    assert((textInput as HTMLInputElement).type === 'radio');
    assert((textInput as HTMLInputElement).value === value);
  });
});

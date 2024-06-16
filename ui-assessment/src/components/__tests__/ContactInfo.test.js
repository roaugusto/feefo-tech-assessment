import { render } from '@testing-library/react';
import React from 'react';
import { ContactInfo } from '../ContactInfo';

const supportContact = {
  name: 'Support',
  email: 'support@feefo.com',
  phone: '020 3362 4208'
};

describe('ContactInfo component', () => {
  test('Renders ContactInfo component', () => {
    const { getByTestId } = render(<ContactInfo data={supportContact} />);

    expect(getByTestId('contact-info-first-letter')).toHaveTextContent('S');
    expect(getByTestId('contact-info-name')).toHaveTextContent('Support');
    expect(getByTestId('contact-info-mail')).toHaveTextContent('support@feefo.com');
    expect(getByTestId('contact-info-phone')).toHaveTextContent('020 3362 4208');

  });

  test('Tests for aria-label', () => {
    const { getByLabelText } = render(<ContactInfo data={supportContact} />);
    expect(getByLabelText('Your Feefo support contact')).toBeInTheDocument();
    expect(getByLabelText('Your support contact is Support')).toBeInTheDocument();
    expect(getByLabelText('Your support contact email is support@feefo.com')).toBeInTheDocument();
    expect(getByLabelText('Your support contact phone is 020 3362 4208')).toBeInTheDocument();
  });
});

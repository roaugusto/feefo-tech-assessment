import React from 'react';
import { render } from '@testing-library/react';
import { AccountOverview } from '../AccountOverview';

const data = {
  supportContact: {
    name: 'Support',
    email: 'support@feefo.com',
    phone: '020 3362 4208'
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  }
};

describe('AccountOverview component', () => {
  test('Renders AccountOverview component', () => {
    const { getByTestId } = render(<AccountOverview data={data} />);
    expect(getByTestId('account-overview-title')).toHaveTextContent('Account Overview');
    expect(getByTestId('upload-success-rate')).toHaveTextContent('37.50');
    expect(getByTestId('lines-saved-rate')).toHaveTextContent('20.00');
  });

  test('Tests for aria-label', () => {
    const { getByLabelText } = render(<AccountOverview data={data} />);
    expect(getByLabelText('Account Overview Title')).toBeInTheDocument();
  });
});
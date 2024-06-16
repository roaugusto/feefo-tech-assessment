import { render } from '@testing-library/react';
import React from 'react';
import { SalesSummary } from '../SalesSummary';

const salesOverview = {
  uploads: 8,
  successfulUploads: 3,
  linesAttempted: 20,
  linesSaved: 4,
  lastUploadDate: 1605001226079,
};

describe('SalesSummary component', () => {
  test('Renders SalesSummary component', () => {
    const { getByTestId } = render(<SalesSummary data={salesOverview} />);

    expect(getByTestId('upload-message')).toHaveTextContent('You had 8 uploads and 4 lines added.');
    expect(getByTestId('lines-saved-rate')).toHaveTextContent('20.00');
    expect(getByTestId('lines-saved-rate')).toHaveTextContent('20.00');

  });

  test('Tests for aria-label', () => {
    const { getByLabelText } = render(<SalesSummary data={salesOverview} />);
    expect(getByLabelText('You had 8 uploads and 4 lines added.')).toBeInTheDocument();
    expect(getByLabelText('Upload success rate is 37.50%')).toBeInTheDocument();
    expect(getByLabelText('Lines saved rate is 20.00%')).toBeInTheDocument();
  });
});
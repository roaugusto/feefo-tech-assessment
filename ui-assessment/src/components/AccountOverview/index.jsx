import PropTypes from 'prop-types';
import { StyledAccountOverviewContainer, StyledTitle, StyledWrapperTitle } from './styles';
import { ContactInfo } from '../ContactInfo';
import { SalesSummary } from '../SalesSummary';

export function AccountOverview({ data }) {
  return (
    <StyledAccountOverviewContainer>
      <StyledWrapperTitle>
        <StyledTitle
          data-testid="account-overview-title"
          aria-label="Account Overview Title">
          Account Overview
        </StyledTitle>
        <ContactInfo data={data.supportContact} />
      </StyledWrapperTitle>
      <SalesSummary data={data.salesOverview} />
    </StyledAccountOverviewContainer>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      lastUploadDate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

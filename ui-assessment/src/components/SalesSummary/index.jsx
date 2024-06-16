import PropTypes from 'prop-types';
import { FaUpload } from 'react-icons/fa';

import {
  StyledLinesRate,
  StyledSalesLinesBox,
  StyledSalesLinesContent,
  StyledSalesSummaryBox,
  StyledSalesSummaryContainer,
  StyledSalesUploadBox,
  StyledSalesUploadContent,
  StyledTitle,
  StyledUploadInformation,
  StyledUploadRate,
  StyledUploadStrongInformation,
  StyledWrapperSalesContent,
  StyledWrapperSalesHeader,
  StyledWrapperSalesStatus,
  StyledWrapperTitle
} from './styles';
import moment from 'moment';
import { Tooltip } from '../Tooltip';


export function SalesSummary({ data }) {
  const uploadSuccessRate =
    ((data.successfulUploads / data.uploads) * 100).toFixed(2);
  const linesSavedRate =
    ((data.linesSaved / data.linesAttempted) * 100).toFixed(2);
  const msgLastUploadDate =
    `Last upload date ${moment(data.lastUploadDate).format('MM/DD/YYYY HH:MM')}`;

  return (
    <StyledSalesSummaryContainer>
      <StyledSalesSummaryBox>
        <StyledWrapperSalesHeader>
          <StyledWrapperTitle>
            <FaUpload color='#3eb1eb' />
            <StyledTitle>Sales</StyledTitle>
          </StyledWrapperTitle>
          <Tooltip data={{ message: msgLastUploadDate }} />
        </StyledWrapperSalesHeader>
        <StyledWrapperSalesContent
          aria-label={`You had ${data.uploads} uploads and ${data.linesSaved} lines added.`}>
          <StyledUploadInformation
            data-testid="upload-message">
            You had{' '}
            <StyledUploadStrongInformation>
              {data.uploads}{' '}uploads{' '}
            </StyledUploadStrongInformation>
            and{' '}
            <StyledUploadStrongInformation>{data.linesSaved}{' '}
            </StyledUploadStrongInformation>lines added.</StyledUploadInformation>
        </StyledWrapperSalesContent>
      </StyledSalesSummaryBox>
      <StyledWrapperSalesStatus>
        <StyledSalesUploadBox>
          <StyledSalesUploadContent
            aria-label={`Upload success rate is ${uploadSuccessRate}%`}>
            <StyledUploadRate data-testid="upload-success-rate">
              {uploadSuccessRate}%
            </StyledUploadRate>
            <div>UPLOAD SUCCESS</div>
          </StyledSalesUploadContent>
        </StyledSalesUploadBox>
        <StyledSalesLinesBox>
          <StyledSalesLinesContent aria-label={`Lines saved rate is ${linesSavedRate}%`}>
            <StyledLinesRate data-testid="lines-saved-rate">{linesSavedRate}%</StyledLinesRate>
            <div>LINES SAVED</div>
          </StyledSalesLinesContent>
        </StyledSalesLinesBox>
      </StyledWrapperSalesStatus>
    </StyledSalesSummaryContainer>
  );
};

SalesSummary.propTypes = {
  data: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    lastUploadDate: PropTypes.number.isRequired,
  }).isRequired,
};

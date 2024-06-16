const { default: styled } = require('styled-components');

export const StyledSalesSummaryContainer = styled.div`  
`;


export const StyledSalesSummaryBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px 8px 0 0;
  margin-top: 20px;
`;


export const StyledWrapperSalesHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledWrapperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const StyledWrapperSalesContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export const StyledUploadInformation = styled.span`
  color: #b5b2b2;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledUploadStrongInformation = styled.strong`
  color: #797979;
`;

export const StyledWrapperSalesStatus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

`;

export const StyledSalesUploadBox = styled.div`
  display: flex;  
  flex: 1;
  background: #ffffff;
  border-radius: 0;
  margin: 2px 0px 0px 0px;

  @media (min-width: 768px) {
    border-radius: 0 0 0 8px;
    margin: 2px 1px 2px 0px;
  }
`;

export const StyledSalesUploadContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #b5b2b2;
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const StyledUploadRate = styled.div`
  color: #22ab55;
  font-size: 36px;
`;

export const StyledSalesLinesBox = styled.div`
  display: flex;
  flex: 1;
  background: #ffffff;
  border-radius: 0 0 8px 8px;
  margin: 2px 0px 0px 0px;

  @media (min-width: 768px) {
    margin: 2px 0px 2px 1px;
    border-radius: 0 0 8px 0;
  }

`;

export const StyledSalesLinesContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #b5b2b2;
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const StyledLinesRate = styled.div`
  color: #22ab55;
  font-size: 36px;
`;

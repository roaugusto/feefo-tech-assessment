const { default: styled } = require('styled-components');

export const StyledAccountOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const StyledWrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;      
  }
`;


export const StyledTitle = styled.div`
  color: #484446;
  font-weight: 500;
  font-size: 26px;

  @media (min-width: 768px) {
    font-size: 32px;    
  }
`;
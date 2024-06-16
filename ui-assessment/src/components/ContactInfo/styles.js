import styled from 'styled-components';

export const StyledContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export const StyledContactInfoContainerTitle = styled.h4`
  color: #aeacac;  
`;

export const StyledContactContent = styled.div`
  display: flex;
  align-items: center;  
  gap: 20px;  
`;

export const StyledWrapperUserRef = styled.div`
  display: flex;
  padding: 20px;
  background-color: #f9cf03;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;  

  strong {
    color: #000;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const StyledContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledName = styled.div`
  color: #484446;
  font-weight: 700;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledWrapperIcon = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
`;

export const StyledWrapperMailPhone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    font-size: 20px;
  }

`;


export const StyledWrapperMail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledWrapperPhone = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 10px;

  @media (min-width: 768px) {
    svg { 
      display: none;
    }
  }
`;

export const StyledMail = styled.a`
  color: #484446;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledPhone = styled.span`
  color: #484446;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-left: 20px;
  }

`;

import styled from 'styled-components';

export const StyledTooltipContainer = styled.div`
  position: absolute;
  top: 50%;
  right: calc(100% + 0.75rem);
  transform: translateY(-50%);
  width: 11rem;
  border-radius: 0.5rem;
  background-color: #c9c6c6;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const StyledTooltipArrow = styled.div`
  position: absolute;
  left: calc(100% - 0.50rem);
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 0.75rem;
  height: 0.75rem;
  background-color: #c9c6c6;
`;

export const StyledIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

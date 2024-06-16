import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledIconWrapper, StyledTooltipArrow, StyledTooltipContainer } from './styles';
import { HiMiniInformationCircle } from 'react-icons/hi2';

export function Tooltip({ data }) {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <StyledIconWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      data-testid="icon-wrapper">
      <HiMiniInformationCircle size={18} color='#c9c6c6' />
      <StyledTooltipContainer visible={visible} data-testid="tooltip-container">
        {data.message}
        <StyledTooltipArrow />
      </StyledTooltipContainer>
    </StyledIconWrapper>
  );
}

Tooltip.propTypes = {
  data: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

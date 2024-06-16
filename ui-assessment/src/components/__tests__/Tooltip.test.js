import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Tooltip } from '../Tooltip';

afterEach(cleanup);

describe('Tooltip component', () => {
  const message = 'This is a tooltip message';

  test('should render the tooltip icon', () => {
    render(<Tooltip data={{ message }} />);
    expect(screen.getByTestId('icon-wrapper')).toBeInTheDocument();
  });

  test('should display tooltip message on mouse enter and hide on mouse leave', () => {
    render(<Tooltip data={{ message }} />);
    const iconWrapper = screen.getByTestId('icon-wrapper');
    const tooltip = screen.getByTestId('tooltip-container');

    expect(tooltip).not.toBeVisible();

    fireEvent.mouseEnter(iconWrapper);
    expect(tooltip).toBeVisible();

    fireEvent.mouseLeave(iconWrapper);
    expect(tooltip).not.toBeVisible();
  });
});

import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CookiesDialog } from './cookies-dialog';

describe('CookiesDialog component specs', () => {
  it('Should render a button with the text "Learn more about our cookies"', () => {
    // Arrange
    const props = {
      onAgreeClick: () => {},
    };
    // Act
    render(<CookiesDialog {...props} />);

    const buttonElement = screen.getByRole('button');

    // Assert
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toMatch(/learn more about our cookies/i);
  });

  it('Should render modal when clicking the button', () => {
    // Arrange
    const props = {
      onAgreeClick: () => {},
    };
    // Act
    render(<CookiesDialog {...props} />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const dialogElement = screen.getByRole('dialog');

    // Assert
    expect(dialogElement).toBeInTheDocument();
  });

  it('Should call onAgreeClick when clicking the button', () => {
    // Arrange
    const props = {
      onAgreeClick: jest.fn(),
    };

    // Act
    render(<CookiesDialog {...props} />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const dialogElement = screen.getByRole('dialog');
    const agreeButtonElement = within(dialogElement).getByRole('button');
    userEvent.click(agreeButtonElement);

    // Assert
    expect(props.onAgreeClick).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { SayHello } from './say-hello';

describe('SayHello component specs', () => {
  it('should display the person name', () => {
    // Arrange
    const person = 'John';

    // Act
    render(<SayHello person={person} />);

    // Assert
    const element = screen.getByRole('heading', {
      name: /hello john/i,
    });
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H1');
  });

  it('should display the person name', () => {
    // Arrange
    const person = 'John';

    // Act
    const { asFragment } = render(<SayHello person={person} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the person name using jest-dom', () => {
    // Arrange
    const person = 'John';

    // Act
    render(<SayHello person={person} />);

    // Assert
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});

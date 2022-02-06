import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../pages/index';

describe('Home', () => {
  it('Rendering Home', () => {
    render(<Home />);
    const result = screen.getByText(/Welcome to Cloud Native App!/);
    expect(result).toBeInTheDocument();
  });
});

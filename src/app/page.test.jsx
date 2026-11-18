import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page Test', () => {

  test('should render the home page successfully', () => {
    // Arrange & Act
    render(<Home />);

    // Assert
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

});
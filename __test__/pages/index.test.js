import { render, screen } from '@testing-library/react';
import Home from 'pages/index.tsx';

describe('Home', () => {
  test('render home components', () => {
    render(<Home />);
    screen.debug();
  });
});

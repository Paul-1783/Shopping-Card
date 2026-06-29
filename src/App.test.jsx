import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});


// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<App />);
//     // using regex with the i flag allows simpler case-insensitive comparison
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });
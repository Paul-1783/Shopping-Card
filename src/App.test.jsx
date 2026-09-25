import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router';
import { BackpackProvider }from './context/BackpackProvider.jsx'
import { BackpackContext }from './context/BackpackContext.jsx'

import { useContext } from 'react';



describe('App', () => {

  it('renders headline', () => {
    render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
    );

    screen.debug();

    // check if App components renders headline
  });


  it('loads product data', () => {

    const BackpackTest = () => {
      const { name } = useContext(BackpackContext);

      return (
        <div data-testid="backpack-context">
         {name}
        </div>
      );
    };


    render(
    <MemoryRouter>
      <BackpackProvider>
        <BackpackTest/>
      </BackpackProvider>
    </MemoryRouter>
    );

    const name = screen.getByTestId("backpack-context");
    expect(name).toHaveTextContent("testback")
  })

});


 
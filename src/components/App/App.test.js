import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

it('renders the homepage', () => {
  const component = (
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders the homepage with different parameters', () => {
  const component = (
    <MemoryRouter initialEntries={['/?ba=270&sa=315&x=parrots&y=birds&z=animals']}>
      <App />
    </MemoryRouter>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders the about page', () => {
  const component = (
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders the instructions', () => {
  const component = (
    <MemoryRouter initialEntries={['/instructions']}>
      <App />
    </MemoryRouter>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

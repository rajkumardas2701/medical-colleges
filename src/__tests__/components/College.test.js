import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import College from '../../components/College';

afterEach(cleanup);

const college = {
  state: 'A & N Islands',
  name: 'Andaman and Nicobar Islands Insitute of Medical Sciences, Port Blair',
  city: 'Port Blair',
  ownership: 'Govt.',
  admissionCapacity: 100,
  hospitalBeds: 460,
};

it('renders item component correctly', () => {
  const drink = renderer.create(<College college={college} />).toJSON();
  expect(drink).toMatchSnapshot();
});

it('renders a link to see college details', () => {
  const { getByTestId } = render(<College college={college} />);
  const link = getByTestId('college-link');
  expect(link.innerHTML).toMatch(college.name);
});

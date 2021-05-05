import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../layouts/Navbar';

afterEach(cleanup);

it('renders Navbar component correctly', () => {
  const nav = renderer.create(<Navbar />).toJSON();
  expect(nav).toMatchSnapshot();
});

it('should display the heading', () => {
  const { getByTestId } = render(<Navbar />);
  expect(getByTestId('navbar-heading')).toHaveTextContent('IndianMedicalColleges');
});

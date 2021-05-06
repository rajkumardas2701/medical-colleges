import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../../layouts/NavBar';

afterEach(cleanup);

it('renders Navbar component correctly', () => {
  const nav = renderer.create(<NavBar />).toJSON();
  expect(nav).toMatchSnapshot();
});

it('should display the heading', () => {
  const { getByTestId } = render(<NavBar />);
  expect(getByTestId('navbar-heading')).toHaveTextContent('IndianMedicalColleges');
});

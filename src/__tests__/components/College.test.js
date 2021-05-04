import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import College from '../../components/College';

afterEach(cleanup);

const college = {
  state: 'A & N Islands',
  name: 'Andaman & Nicobar Islands Insitute of Medical Sciences, Port Blair',
  city: 'Port Blair',
  ownership: 'Govt.',
  admissionCapacity: 100,
  hospitalBeds: 460,
};

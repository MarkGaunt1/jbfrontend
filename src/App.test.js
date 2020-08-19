import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;



function myAdd(a,b) {
  return a + b;
}

test('does myAdd work?', () => {
  const result = myAdd(5,5);
  expect(result).toBe(10);
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/DEV JOBS R US/i);
  expect(linkElement).toBeInTheDocument();
});

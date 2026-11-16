import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { Routes, Route } from 'react-router-dom';

function renderCalculator() {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </MemoryRouter>
  );
}

test('validates required fields', () => {
  renderCalculator();
  fireEvent.click(
    screen.getByRole('button', { name: /calculate repayments/i })
  );
  expect(screen.getAllByText('This field is required')).toHaveLength(4);
});

test.each([
  ['Repayment', '£1,542.39', '£462,718.08'],
  ['Interest Only', '£937.50', '£281,250.00'],
])('calculates %s and clears the form', (type, monthly, total) => {
  renderCalculator();
  fireEvent.change(screen.getByLabelText('Mortgage Amount'), {
    target: { value: '300000' },
  });
  fireEvent.change(screen.getByLabelText('Mortgage Term'), {
    target: { value: '25' },
  });
  fireEvent.change(screen.getByLabelText('Interest Rate'), {
    target: { value: '3.75' },
  });
  fireEvent.click(screen.getByLabelText(type));
  fireEvent.click(
    screen.getByRole('button', { name: /calculate repayments/i })
  );
  expect(screen.getByText(monthly)).toBeInTheDocument();
  expect(screen.getByText(total)).toBeInTheDocument();
  fireEvent.click(screen.getByText('Clear All'));
  expect(screen.getByText('Results shown here')).toBeInTheDocument();
  expect(screen.getByLabelText('Mortgage Amount')).toHaveValue(null);
});

test('navigates to the privacy policy', () => {
  renderCalculator();
  fireEvent.click(screen.getByRole('link', { name: 'Privacy Policy' }));
  expect(
    screen.getByRole('heading', { name: 'Privacy Policy' })
  ).toBeInTheDocument();
});

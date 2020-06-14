import '../setupTests';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegisterForm from '../pages/registerForm/index';

const TitleInPage = 'Register Card Form';
const TextInPage = 'Welcome';
const testData = {
  creditCard: 889902334,
  cvc: 123,
  expireDate: '2020-06-30',
};
const cvc = describe('<RegisterForm />', () => {
  test('RegisterForm page basic element', () => {
    const { getByText, getByTestId } = render(<RegisterForm />);
    expect(getByText(TitleInPage)).toBeTruthy();
    expect(getByText(TextInPage)).toBeTruthy();
    expect(getByTestId('register-form')).toBeTruthy();
    expect(getByTestId('credit-card-no')).toBeTruthy();
    expect(getByTestId('expire-date')).toBeTruthy();
    expect(getByTestId('cvc')).toBeTruthy();
    expect(getByTestId('submit-button')).toHaveAttribute('disabled');
  });

  test('Should be able to enter info,', async () => {
    const { findByTestId, getByTestId, container } = render(<RegisterForm />);
    // Credit card info
    const creditCardNo = await findByTestId('credit-card-no');
    fireEvent.change(creditCardNo, { target: { value: testData.creditCard } });
    expect(creditCardNo).not.toBeNull();
    // Cvc info
    const cvc = await findByTestId('cvc');
    fireEvent.change(cvc, { target: { value: testData.cvc } });
    expect(cvc).not.toBeNull();

    // ExpireDate info
    const expireDate = await getByTestId('expire-date');
    fireEvent.mouseDown(container.querySelector('.ant-picker-suffix')!);
    fireEvent.change(expireDate, { target: { value: testData.expireDate } });
    expect(expireDate).not.toBeNull();
  });
});

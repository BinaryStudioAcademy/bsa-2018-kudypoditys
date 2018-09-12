import { GET_CURRENCIES, CHANGE_CURRENCY } from './actionTypes';

export const currenciesGet = () => ({
  type: GET_CURRENCIES
});

export const currencyChange = () => ({
  type: CHANGE_CURRENCY
});

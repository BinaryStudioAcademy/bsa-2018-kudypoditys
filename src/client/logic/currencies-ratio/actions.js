import { CONVERT_CURRENCY } from './actionTypes';

export const getCurrenciesRatio = (currencies) => {
  return {
      type: CONVERT_CURRENCY,
      payload: currencies
  }
};
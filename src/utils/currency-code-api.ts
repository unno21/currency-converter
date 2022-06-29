import { api } from './api';

const BASE_URL = 'https://openexchangerates.org/api'

type Currency = {
  [name: string]: string
}

export const getCurrencies = async (): Promise<Currency | undefined> => {
  try {
    const response = await api({ baseUrl: BASE_URL, endpoint: '/currencies.json'});
    const responseText = await response.text();
    const currencies = JSON.parse(responseText);
    return currencies;
  } catch (errorResponse) {
    throw errorResponse;
  }
};
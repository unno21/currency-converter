import { api } from './api';

const BASE_URL = 'https://api.apilayer.com/exchangerates_data';
const API_KEY = 'GxCypwSaO8FQMiPr2qI87Y5013lbekiZ';

export type Params = {
  from: string,
  to: string,
  amount: number,
}

export type ExchangeRateResponse = {
  query: {
    from: string,
    to: string,
    amount: number,
  },
  info: {
    timestamp: number,
    rate: number,
  },
  result: number,
}

export const convertRate = async (params: Params): Promise<ExchangeRateResponse | undefined> => {
  try {
    const headers = { apikey: API_KEY };
    const response = await api({ baseUrl: BASE_URL, endpoint: '/convert', params, headers });
    const responseText = await response.text();
    const { success, error, info, result, query } = JSON.parse(responseText);
    
    if (success === true) {
      return { query, info, result }
    }

    if (error) {
      throw new Error(error);
    }
  } catch (errorResponse) {
    throw errorResponse;
  }
};


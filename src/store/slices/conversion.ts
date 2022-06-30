import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { convertRate, Params, ExchangeRateResponse } from '../../utils/exchange-currency-api';

type ConversionType = {
  value: {
    amount: number,
    convertedAmount: number,
    rate: number,
    from: string,
    to: string,
  }
}

const initialState: ConversionType = {
  value: {
    amount: 0,
    convertedAmount: 0,
    rate: 0,
    from: '',
    to: '',
  }
}

export const convertCurrency = createAsyncThunk(
  'currency/convert',
  async (params: Params): Promise<ExchangeRateResponse | undefined> => {
    return await convertRate(params);
  }
)

const conversionSlice = createSlice({
  name: 'currency',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.value = initialState.value;
    },
    swap: (state) => {
      const { amount, from, to, rate } = state.value;
      if (rate > 0) {
        const newRate = 1 / rate;
        const newConvertedAmount = amount * newRate;
        state.value = { amount, from: to, to: from, convertedAmount: newConvertedAmount, rate: newRate };
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(convertCurrency.fulfilled, (state, action) => {
      if (action.payload !== undefined) {
        const { query: { amount, from, to }, result, info: { rate } } = action.payload;
        state.value = { amount, from, to, convertedAmount: result, rate };
        return;
      }
      state.value = initialState.value;
    });
    builder.addCase(convertCurrency.rejected, state => {
      state.value = initialState.value;
    });
  },
});

export const { reset, swap } = conversionSlice.actions;
export default conversionSlice.reducer;
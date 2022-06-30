import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import { Currency, getCurrencies } from '../../utils/currencyCodeApi';

type CurrencyType = { 
  value: Currency;
}
const initialState: CurrencyType = { value: {} };

export const fetchCurrencies = createAsyncThunk(
  'currency/fetch',
  async (): Promise<Currency | undefined> => {
    return await getCurrencies();
  }
)

const currencySlice = createSlice({
  name: 'currency',
  initialState: initialState,
  reducers: { },
  extraReducers(builder) {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      if (action.payload !== undefined) {
        state.value = action.payload;
      }
    });
    builder.addCase(fetchCurrencies.rejected, state => {
      state.value = initialState.value;
    });
  },
});

export default currencySlice.reducer;
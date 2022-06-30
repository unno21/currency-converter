import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import conversionSlice from './slices/conversion';
import historySlice from './slices/history';
import currencySlice from './slices/currency';

export const store = configureStore({
  reducer: {
    conversion: conversionSlice,
    history: historySlice,
    currency: currencySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
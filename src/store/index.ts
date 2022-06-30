import { configureStore } from '@reduxjs/toolkit';
import conversionSlice from './slices/conversion';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    conversion: conversionSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
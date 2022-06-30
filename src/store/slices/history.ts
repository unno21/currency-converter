import { createSlice } from '@reduxjs/toolkit';

import { ConversionType } from './conversion';

export type HistoryItemType = ConversionType & { id: string };
type HistoryType = { 
  value: HistoryItemType[]
}

const initialState: HistoryType = { value: [] };

const historySlice = createSlice({
  name: 'history',
  initialState: initialState,
  reducers: {
    addHistory: (state, action) => {
      const history = action.payload;
      history.id = Math.random().toString();
      state.value.unshift(history);
    },
    removeFromHistory: (state, { payload }) => {
      state.value = state.value.filter(historyType => historyType.id !== payload);
    },
    removeAllHistory: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { addHistory, removeFromHistory, removeAllHistory } = historySlice.actions;
export default historySlice.reducer;

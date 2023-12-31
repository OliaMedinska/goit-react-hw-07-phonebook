import {createSlice} from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (action) => {
      return action.payload;
    },
  },
});

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;
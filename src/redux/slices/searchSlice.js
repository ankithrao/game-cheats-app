import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  selectedPlatforms: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    togglePlatform: (state, action) => {
      const platform = action.payload;
      if (state.selectedPlatforms.includes(platform)) {
        state.selectedPlatforms = state.selectedPlatforms.filter(p => p !== platform);
      } else {
        state.selectedPlatforms.push(platform);
      }
    },
    clearSelection: (state) => {
      state.selectedPlatforms = [];
    },
  },
});

export const { setSearchQuery, togglePlatform, clearSelection } = searchSlice.actions;
export default searchSlice.reducer;

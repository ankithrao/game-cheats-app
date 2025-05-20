import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// A simple async thunk (fake API call)
export const fetchMessage = createAsyncThunk(
  'test/fetchMessage',
  async () => {
    await new Promise(res => setTimeout(res, 1000));
    return 'Hello from Thunk!';
  }
);

const testSlice = createSlice({
  name: 'test',
  initialState: {
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(fetchMessage.rejected, (state) => {
        state.loading = false;
        state.message = 'Failed to fetch';
      });
  },
});

export default testSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { signup, signin, logout } from './authOperations';

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
  sid: '',
  isLogin: '',
  isLoading: false,
  isError: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

// accessToken;
// refreshToken;
// sid;
// userData

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(
        signup.fulfilled,
        (state, { payload: { userData, accessToken, refreshToken, sid } }) => {
          // console.log('payload', userData, accessToken, refreshToken, sid);
          state.user = userData;
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.sid = sid;
          state.isLoading = false;
          state.isLogin = true;
        }
      )
      .addCase(signup.rejected, handleError)
      //
      .addCase(signin.pending, handlePending)
      .addCase(
        signin.fulfilled,
        (state, { payload: { userData, accessToken, refreshToken, sid } }) => {
          state.user = userData;
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.sid = sid;
          state.isLoading = false;
          state.isLogin = true;
        }
      )
      .addCase(signin.rejected, handleError)
      //
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.accessToken = '';
        state.refreshToken = '';
        state.sid = '';
        state.isLoading = false;
        state.isLogin = false;
      })
      .addCase(logout.rejected, handleError);
  },
});

export default authSlice.reducer;

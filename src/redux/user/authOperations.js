import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/userApi';

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await api.signup(credentials);
      console.log('data', data);
      if (data) {
        try {
          const result = await api.signin(credentials);
          console.log('loginData', result);
          return result;
        } catch (error) {
          return rejectWithValue(error);
        }
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = api.signin(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      api.logout();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

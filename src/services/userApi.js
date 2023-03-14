import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global',
});

export const tokenAuth = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const signup = async credentials => {
  const { data } = await instance.post('/auth/register', credentials);
  // console.log('data', data);
  return data;
};
export const signin = async credentials => {
  const { data } = await instance.post('/auth/login', credentials);
  console.log('data promis', data);
  tokenAuth.set(data.accessToken);
  return data;
};
export const logout = async () => {
  await instance.post('/auth/logout');
  tokenAuth.unset();
};
export const current = async () => {};
export const googleAuth = async () => {};

// accessToken;
// refreshToken;
// sid;
// userData

import qs from 'query-string';

import { createInstance } from '~/helpers/axios';

const axios = createInstance();

export const login = (username: string, password: string) =>
  axios.post(
    '/login/access-token',
    qs.stringify({
      username,
      password,
    }),
    { headers: { 'Content-Type': `application/x-www-form-urlencoded` } }
  );

export const Auth = { login };

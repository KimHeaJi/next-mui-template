export const API_BASE_URI =
  process.env.NODE_ENV === 'development' ? 'http://backend-dev' : '';

export const isServer = typeof window === 'undefined';

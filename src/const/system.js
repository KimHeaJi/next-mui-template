export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const PHASE = process.env.NEXT_PUBLIC_PHASE;
export const NODE_ENV = process.env.NODE_ENV;

export const isServer = typeof window === 'undefined';

export const DEV = process.env.NODE_ENV === 'development';

export const API_URL = DEV ? 'http://127.0.0.1:5000/api/' : '/api/';
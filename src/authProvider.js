// src/authProvider.js
import { fetchUtils } from 'react-admin';

const authProvider = {
  // Called when the user attempts to log in
  login: async ({ username, password }) => {
    const request = new Request('http://localhost:5000/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    const response = await fetchUtils.fetchJson(request);
    const { token } = response.json;
    localStorage.setItem('authToken', token);
  },

  // Called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('authToken');
    return Promise.resolve();
  },

  // Called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('authToken');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // Called to check if the user is authenticated
  checkAuth: () => {
    return localStorage.getItem('authToken') ? Promise.resolve() : Promise.reject();
  },

  // Called to get the user's permissions
  getPermissions: () => Promise.resolve(),
};

export default authProvider;

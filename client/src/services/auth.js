import axios from 'axios';

const signup = (data) => {
  return axios
    .post('/api/auth/signup', data)
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data;
    });
}

const login = (username, password) => {
  return axios
    .post('/api/auth/login', { username, password })
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data;
    });
}

const logout = () => {
  return axios
    .delete('/api/auth/logout')
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data;
    });
}

const addLicense = (data) => {
  return axios
    .post('/api/auth/addlicense', data)
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data;
    });
}

export { signup, login, logout,addLicense }; 
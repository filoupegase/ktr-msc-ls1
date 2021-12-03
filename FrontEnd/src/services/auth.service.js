import axios from 'axios';


class AuthService {
  login(name, password) {
    return axios
        .post('http://localhost:3000/api/auth/login', {
          name,
          password
        })
        .then(response => {
          if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }
          return response.data;
        });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(username, companyName, email, password, phoneNumber) {
    return axios.post('http://localhost:3000/api/auth/signup', {
      username,
      companyName,
      email,
      password,
      phoneNumber
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
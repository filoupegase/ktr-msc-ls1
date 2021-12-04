import axios from 'axios';
import AuthService from './auth.service';

class CardHandler {

  getAllCard(username) {
    console.log(username);
    return axios.post('http://localhost:3000/api/stuff/card/get', {
      username
    });
  }

  postCard(name,
           companyName,
           email,
           phoneNumber,
           message
  ) {
    const user = AuthService.getCurrentUser();
    return axios.post('http://localhost:3000/api/stuff/card/post', {
      name,
      companyName,
      email,
      phoneNumber,
      message,
      username: user.user.username
    });
  }
}

export default new CardHandler();
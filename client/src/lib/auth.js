import axios, { removeToken } from '../axios';
import { ROLE } from '../common/const';
import { history } from '../redux/index';

export default class Auth {
  static async getUserInfo() {
    try {
      const user = await axios.post('/api/me');
      return user.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  static getUserRole() {
    return parseInt(localStorage.getItem('role')) || ROLE.GUEST;
  }
  static logout() {
    localStorage.clear();
    removeToken();
    window.location.reload()
  }
}

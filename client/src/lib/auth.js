import axios from '../axios';
import { ROLE } from '../common/const';

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
}

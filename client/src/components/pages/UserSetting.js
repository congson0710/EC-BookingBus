import React, {Component} from 'react';

import Menu from '../Menu';
import EditProfileComponent from '../EditProfileComponent';
import UserSetting from '../UserSetting';
import Footer from '../Footer';

class EditProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <UserSetting />
        <Footer />
      </React.Fragment>
    );
  }
}

export default EditProfile;

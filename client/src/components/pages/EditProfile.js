import React, { Component } from 'react';

import Menu from '../Menu';
import EditProfileComponent from '../EditProfileComponent';
import Footer from '../Footer';

class EditProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <EditProfileComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default EditProfile;

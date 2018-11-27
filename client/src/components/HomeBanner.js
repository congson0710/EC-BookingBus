import React, { Component } from 'react';

import FindForm from './FindForm';

import HomeImage from '../images/home.jpg';

class HomeBanner extends Component {
  render() {
    return (
      <div className="home d-flex align-items-center justify-content-center">
        <div
          className="home_background"
          style={{ backgroundImage: `url(${HomeImage})` }}
        />
        <div className="home_content">
          <FindForm />
        </div>
      </div>
    );
  }
}

export default HomeBanner;

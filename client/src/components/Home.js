import React, { Component } from 'react';

import Menu from './Menu';
import HomeBanner from './HomeBanner';
import TopDestination from './TopDestination';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <HomeBanner />
        <TopDestination />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;

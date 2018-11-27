import React, { Component } from 'react';

import Logo from '../images/logo.png';
import Last_1 from '../images/latest_1.jpg';
import Last_2 from '../images/latest_2.jpg';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 footer_col">
              <div className="footer_about">
                <div className="logo_container">
                  <div className="logo">
                    <div>destino</div>
                    <div>travel agency</div>
                    <div className="logo_image">
                      <img src={Logo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="footer_about_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla,
                  tempor vel eleifend quis, tempus rut rum metus. Pellentesque
                  ultricies enim eu quam fermentum hendrerit.
                </div>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{' '}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{' '}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>
              </div>
            </div>

            <div className="col-lg-4 footer_col">
              <div className="footer_latest">
                <div className="footer_title">Latest News</div>
                <div className="footer_latest_content">
                  <div className="footer_latest_item">
                    <div className="footer_latest_image">
                      <img src={Last_1} alt="" />
                    </div>
                    <div className="footer_latest_item_content">
                      <div className="footer_latest_item_title">
                        <a href="news.html">Brazil Summer</a>
                      </div>
                      <div className="footer_latest_item_date">
                        Jan 09, 2018
                      </div>
                    </div>
                  </div>

                  <div className="footer_latest_item">
                    <div className="footer_latest_image">
                      <img src={Last_2} alt="" />
                    </div>
                    <div className="footer_latest_item_content">
                      <div className="footer_latest_item_title">
                        <a href="news.html">A perfect vacation</a>
                      </div>
                      <div className="footer_latest_item_date">
                        Jan 09, 2018
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 footer_col">
              <div className="tags footer_tags">
                <div className="footer_title">Tags</div>
                <ul className="tags_content d-flex flex-row flex-wrap align-items-start justify-content-start">
                  <li className="tag">
                    <a href="/">travel</a>
                  </li>
                  <li className="tag">
                    <a href="/">summer</a>
                  </li>
                  <li className="tag">
                    <a href="/">cruise</a>
                  </li>
                  <li className="tag">
                    <a href="/">beach</a>
                  </li>
                  <li className="tag">
                    <a href="/">offer</a>
                  </li>
                  <li className="tag">
                    <a href="/">vacation</a>
                  </li>
                  <li className="tag">
                    <a href="/">trip</a>
                  </li>
                  <li className="tag">
                    <a href="/">city break</a>
                  </li>
                  <li className="tag">
                    <a href="/">adventure</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

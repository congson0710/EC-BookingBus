import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo.png';

class Menu extends Component {
  render() {
    return (
    <header className="header">
        <div className="container">
          <div className="header_container d-flex flex-row align-items-center justify-content-start">
            <div className="logo_container">
              <div className="logo">
                <div>destino</div>
                <div>travel agency</div>
                <div className="logo_image">
                  <img src={Logo} alt="" />
                </div>
              </div>
            </div>

            <nav className="main_nav ml-auto">
              <ul className="main_nav_list">
                <li className="main_nav_item active">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="main_nav_item">
                  <a href="/">Kiểm tra vé</a>
                </li>
                <li className="main_nav_item">
                  <a href="/">Dành cho nhà xe</a>
                </li>
                <li className="main_nav_item">
                  <a href="/">Liên hệ</a>
                </li>
                <li className="main_nav_item">
                  <Link to="/login">Đăng nhập</Link>
                </li>
                <li className="main_nav_item">
                  <Link to="/register">Đăng kí</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;

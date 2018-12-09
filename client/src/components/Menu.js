import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuAuthorization from './AuthHOC/MenuAuthorization';
import Logo from '../images/logo.png';
import { ROLE } from '../common/const';

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
                <li className="main_nav_item">
                  <MenuAuthorization>
                    <NavLink activeClassName="active" exact to="/">
                      Trang chủ
                    </NavLink>
                  </MenuAuthorization>
                </li>
                <li className="main_nav_item">
                  <MenuAuthorization roleAllowed={[ROLE.CLIENT]}>
                    <NavLink activeClassName="active" to="/kiem-tra-ve">
                      Kiểm tra vé
                    </NavLink>
                  </MenuAuthorization>
                </li>
                <li className="main_nav_item">
                  <MenuAuthorization roleAllowed={[ROLE.COMPANY]}>
                    <NavLink activeClassName="active" to="/quan-li-chuyen-xe">
                      Quản lí chuyến xe
                    </NavLink>
                  </MenuAuthorization>
                </li>
                <li className="main_nav_item">
                  <MenuAuthorization roleAllowed={[ROLE.CLIENT]}>
                    <NavLink activeClassName="active" to="/chinh-sua-thong-tin">
                      Thông tin cá nhân
                    </NavLink>
                  </MenuAuthorization>
                </li>

                <li className="main_nav_item">
                  <MenuAuthorization roleAllowed={[ROLE.GUEST]}>
                    <NavLink activeClassName="active" exact to="/dang-nhap">
                      Đăng nhập
                    </NavLink>
                  </MenuAuthorization>
                </li>
                <li className="main_nav_item">
                  <MenuAuthorization roleAllowed={[ROLE.GUEST]}>
                    <NavLink activeClassName="active" exact to="/dang-ki">
                      Đăng kí
                    </NavLink>
                  </MenuAuthorization>
                </li>
                <li className="main_nav_item">
                  <MenuAuthorization roleAllowed={[ROLE.COMPANY, ROLE.CLIENT, ROLE.ADMIN]}>
                    <a href="">Đăng xuất</a>
                  </MenuAuthorization>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import MenuAuthorization from './AuthHOC/MenuAuthorization';
import Logo from '../images/logo.png';
import { ROLE } from '../common/const';
import { logoutThunkCreator } from '../redux/actions/userAction';

function mapDispatchToProps(dispatch) {
  return {
    onLogoutRequest: () => dispatch(logoutThunkCreator())
  };
}
class Menu extends Component {
  state = {
    isMenuOpen: false
  };
  _logout = () => {
    this.props.onLogoutRequest();
  };
  _toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };
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
            <Icon className="menu-icon" onClick={this._toggleMenu} type="menu-fold" />
            <nav className={`main_nav ml-auto ${this.state.isMenuOpen ? 'show' : ''}`}>
              <ul className="main_nav_list">
                <li className="close-icon">
                  <Icon
                    style={{ fontSize: '28px', color: '#fff' }}
                    type="close"
                    onClick={this._toggleMenu}
                  />
                </li>
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
                  <MenuAuthorization
                    roleAllowed={[ROLE.COMPANY, ROLE.CLIENT, ROLE.ADMIN]}
                  >
                    <button onClick={this._logout}>Đăng xuất</button>
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

export default connect(
  null,
  mapDispatchToProps
)(Menu);

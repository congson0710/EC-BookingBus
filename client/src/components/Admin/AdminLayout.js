import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminHeader from './AdminHeader';

function AdminLayout({ children }) {
  return (
    <div className="row no-gutters">
      <div className="col-2">
        <div className="left-panel">
          <ul className="admin-menu">
            <li className="admin-menu__item">
              <NavLink
                activeClassName="active"
                className="admin-menu__link"
                to="/admin/tra-cuu-thong-tin"
              >
                Tra cứu thông tin
              </NavLink>
              <NavLink
                activeClassName="active"
                className="admin-menu__link"
                to="/admin/quy-dinh-nha-xe"
              >
                Quy định nhà xe
              </NavLink>
              <NavLink
                activeClassName="active"
                className="admin-menu__link"
                to="/admin/quan-ly-lich-xe"
              >
                Quản lý lịch xe
              </NavLink>
              <NavLink
                activeClassName="active"
                className="admin-menu__link"
                to="/admin/quan-ly-dat-huy"
              >
                Quản lý đặt/hủy vé
              </NavLink>
              <NavLink
                activeClassName="active"
                className="admin-menu__link"
                to="/admin/bao-cao-thong-ke"
              >
                Báo cáo thống kê
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-10">
        <AdminHeader />
        <div className="admin-container">
          <div className="admin-board">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;

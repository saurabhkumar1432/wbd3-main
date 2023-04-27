import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";
function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Website",
      path: "/oldhome",
      icon: "ri-reply-fill",
    },
  ];

  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: "ri-calendar-check-fill",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "ri-user-line",
    },
    {
      name: "Website",
      path: "/oldhome",
      icon: "ri-reply-fill",
    },
  ];

  const adminMenu = [
    {
      name: "Home",
      path: "/adhome",
      icon: "ri-home-line",
    },
    // {
    //   name:"Home",
    //   path:"/adhome/employee/create",
    //   icon:"ri-home-line",
    // },
    // {
    //   name:"Home",
    //   path:"/adhome/employee/detail/:empid",
    //   icon:"ri-home-line",
    // },
    // {
    //   name:"Home",
    //   path:"/adhome/employee/edit/:empid",
    //   icon:"ri-home-line",
    // },

    // {
    //   name:'Doctor Teams',
    //   path:'/admin/Appointmentslist',
    //   icon:"ri-file-list-line",
    // },
    {
      name:'Appointments',
      path:'/admin/Appointmentslist',
      icon:"ri-file-list-line",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    },
    {
      name: "Website",
      path: "/oldhome",
      icon: "ri-reply-fill",
    },
  ];

  const menuToBeRendered = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "User";
  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1 className="logo">HAPILYF</h1>
            <h1 className="role">{role}</h1>
          </div>
          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-line"></i>
              {!collapsed && <Link to="/login">Logout</Link>}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}
            {/* <h1 className>DA</h1> */}

            <div className="d-flex align-items-center px-4">
              <Badge
                count={user?.unseenNotifications.length}
                onClick={() => navigate("/notifications")}
              >
                <i class="ri-notification-line header-action-icon mr-2 px-3"></i>
              </Badge>

              <h2 className="anchor mx-2">
                {user?.name}
              </h2>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

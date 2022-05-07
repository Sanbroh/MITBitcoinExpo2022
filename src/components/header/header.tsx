
//import useState hook to create menu collapse state
import React, { useState, FC, InputHTMLAttributes } from "react";
import { Link } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./header.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dashboard: boolean;
  ledger: boolean;
  settings: boolean;
}

const Header: React.FC<InputProps> = ({ dashboard, ledger, settings }) => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <Link to="/">
            <div className="logotext">
                <img src="https://cdn.discordapp.com/attachments/970832667132198922/972507463679111178/Hackathon_Logo_Circular.jpg" />
                <p>SupplyDock</p>
            </div>
          </Link>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={dashboard} icon={<FiHome />}>
                <Link to="/dashboard" className="HeaderLink" style={{ color: "white" }}>Dashboard</Link>
              </MenuItem>
              <MenuItem active={ledger} icon={<FaList />}>
                <Link to="/ledger" className="HeaderLink" style={{ color: "white" }}>Ledger</Link>
              </MenuItem>
              <MenuItem active={settings} icon={<BiCog />}>
                <Link to="/settings" className="HeaderLink" style={{ color: "white" }}>Settings</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;

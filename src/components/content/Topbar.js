import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faSignOutAlt,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  toggle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="navbar  mb-1  rounded">
      <Button
        color="secondary"
        onClick={toggleSidebar}
        className="float-left menu-btn"
      >
        <FontAwesomeIcon icon={faAlignLeft} /> menu
      </Button>

      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          style={{
            backgroundColor: "transparent",
            borderRadius: 30,
            borderColor: "#BDC3C7",
            borderWidth: 3,
            padding: 0,
          }}
        >
          <img
            src="https://ik.imagekit.io/demo/img/smart_crop_blog/test_image_9_By_lQN-WE.jpeg?tr=w-200,h-200,fo-face:r-max"
            style={{ width: 50, height: 50 }}
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          {/* <DropdownItem header>Student Name</DropdownItem> */}
          {/* <DropdownItem divider /> */}
          <DropdownItem className="dropdown-item">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-2 font-icon" />
            Student - I
          </DropdownItem>
          <DropdownItem className="dropdown-item">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-2 font-icon" />
            Student - II
          </DropdownItem>
          <DropdownItem className="dropdown-item">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-2 font-icon" />
            Student - III
          </DropdownItem>
          <DropdownItem className="dropdown-item">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 font-icon" />
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Topbar;

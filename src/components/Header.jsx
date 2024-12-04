import React, {useState} from 'react'
import logo from '../../public/images/logo.png'
import '../styles/header.css'

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen((prev) => !prev);
    };
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="WPHF Logo" className="logo" />
        <nav>
          <ul>
            <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              ABOUT
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li>Annual Report </li>
                  <li>Our vision</li>
                  <li>Organizational Profile</li>
                  <li>Financial Information</li>
                  <li>Policies</li>
                </ul>
              )}
            </li>
            <li>NEWS</li>
            <li>COUNTRIES</li>
            <li>FUNDIG</li>
            <li>PARTENERS</li>
            <li>JOIN US</li>
            <li>CONTACT</li>
            <button className="donate-button">DONATE</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header
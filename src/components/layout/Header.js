import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/mainpage">
          <div className="header__logo">
            {' '}
            <img src={Logo} alt="Rick and Morty logo" />
          </div>
        </Link>
      </header>
    );
  }
}

export default Header;

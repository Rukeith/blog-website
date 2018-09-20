import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NavItem from '../../containers/NavItem';
import SearchInput from '../SearchInput';
import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    const { resize } = this.props;
    if (window) window.addEventListener('resize', () => resize());
    const token = localStorage.getItem('blog-admin-token');
    this.setState({ token });
  }

  componentWillUnmount() {
    if (window) window.removeEventListener('resize', () => {});
  }

  render() {
    const { token } = this.state;
    const { menuOpen, menuClick } = this.props;
    let headerClassName = (menuOpen) ? 'menu-open ' : '';
    headerClassName += (token) ? 'login-auth ' : '';

    return (
      <header className={headerClassName}>
        <div id="header-menu" role="presentation" onClick={menuClick}>
          <span className="hamburger-top" />
          <span className="hamburger-mid" />
          <span className="hamburger-bottom" />
        </div>
        <div id="logo">
          <Link prefetch href="/">
            <a href="/">{'Rukeith\'s blog'}</a>
          </Link>
        </div>
        <SearchInput />
        <NavItem key="intro" path="/intro" title="Intro" />
        <NavItem key="blog" path="/" title="Blog" />
        { token && <NavItem key="admin" path="/admin" title="Admin Page" /> }
        { token ? (<NavItem key="logout" path="/logout" title="Logout" />) : (<NavItem key="login" path="/login" title="Login" />) }
      </header>
    );
  }
}

Header.defaultProps = {
  menuOpen: false,
};

Header.propTypes = {
  menuOpen: PropTypes.bool,
  resize: PropTypes.func.isRequired,
  menuClick: PropTypes.func.isRequired,
};

export default Header;

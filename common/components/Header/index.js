import React from 'react';
import PropTypes from 'prop-types';
// import NavItem from '../NavItem';
// import SearchInput from '../SearchInput';
// import './style.scss';

export default class Header extends React.Component {
  componentDidMount() {
    const { resize } = this.props;
    if (window) window.addEventListener('resize', () => resize());
  }

  componentWillUnmount() {
    if (window) window.removeEventListener('resize', () => {});
  }

  render() {
    const { token, menuOpen, menuClick } = this.props;
    let headerClassName = (menuOpen) ? 'menu-open ' : '';
    headerClassName += (token) ? 'login-auth ' : '';

    return (
      <header className={headerClassName}>
        <div id="header-menu" role="presentation" onClick={() => {}} onKeyPress={menuClick}>
          <span className="hamburger-top" />
          <span className="hamburger-mid" />
          <span className="hamburger-bottom" />
        </div>
        <div id="logo">{'Rukeith\'s blog'}</div>
      </header>
    );
  }
}

Header.defaultProps = {
  token: '',
  menuOpen: false,
};

Header.propTypes = {
  token: PropTypes.string,
  menuOpen: PropTypes.bool,
  resize: PropTypes.func.isRequired,
  menuClick: PropTypes.func.isRequired,
};

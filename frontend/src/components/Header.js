import React from 'react';
import PropTypes from 'prop-types';
import NewPostButton from './NewPostButton';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
  <div>
    <nav className="barra-topo">
      <Link className="navbar-brand text-light" to="/">
        <h1>{title}</h1>
      </Link>
    </nav>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

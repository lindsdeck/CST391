import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light p-3">
      <Link className="navbar-brand" to="/">Little Care Finder</Link>

      <div>
        <Link className="btn btn-primary me-2" to="/">Home</Link>
        <Link className="btn btn-success" to="/new">Add Center</Link>
      </div>
    </nav>
  );
};

export default NavBar;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-info navbar-expand-lg">
        <Link to="/" className="navbar-brand">WORKFIT!</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create Team</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create new challenge</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">All Challenges</Link>
          </li>


        </ul>
        </div>
      </nav>
    );
  }
}
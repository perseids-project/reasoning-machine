import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarToggler, Collapse } from 'reactstrap';
import { PerseidsHeader } from 'perseids-react-components';

const renderCollapse = collapsed => (
  <Collapse isOpen={!collapsed} navbar>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">
          Reasoning machine
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/instructions">
          Instructions
        </NavLink>
      </li>
    </ul>
  </Collapse>
);

class Navbar extends Component {
  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    const { collapsed } = this.state;

    return (
      <>
        <PerseidsHeader>
          <NavbarToggler onClick={this.toggleNavbar} aria-label="navigation menu" />

          {renderCollapse(collapsed)}
        </PerseidsHeader>
      </>
    );
  }
}

export default Navbar;

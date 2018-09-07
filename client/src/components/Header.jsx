import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              Trip Planner
            </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}


export default Header;
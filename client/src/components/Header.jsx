import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  // const buttonsInstance = (
  //  // <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
  // );

  // function renderDropdownButton(title, i) {
  //   return (
  //     <DropdownButton
  //       bsStyle={title.toLowerCase()}
  //       title={title}
  //       key={i}
  //       id={`dropdown-basic-${i}`}
  //     >
  //       <MenuItem eventKey="1">Action</MenuItem>
  //       <MenuItem eventKey="2">Another action</MenuItem>
  //       <MenuItem eventKey="3" active>
  //         Active Item
  //       </MenuItem>
  //       <MenuItem divider />
  //       <MenuItem eventKey="4">Separated link</MenuItem>
  //     </DropdownButton>
  //   );

  // }

  render() {
      return (
      <Navbar fixedTop>
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
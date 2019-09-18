import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="nav-container">
        <Navbar expand="md">
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Apple logo</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/components/">Mac</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">iPad</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">iPhone</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Watch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">TV</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Music</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Support</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Search logo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Bag logo</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  } 
}
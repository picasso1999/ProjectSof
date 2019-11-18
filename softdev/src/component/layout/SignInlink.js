import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { userInfo } from 'os';

const SignInlink = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {profile} = props
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/FoodStore/">FoodStore</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Welcome
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  Welcome "{profile.initials}"
                </DropdownItem >
                <DropdownItem divider />
                <DropdownItem href="/Cart/">
                  Cart
                  </DropdownItem>
                <DropdownItem href="/History/">
                  History
                  </DropdownItem>
                <DropdownItem href="/Coupon/">
                  Coupon
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={props.signOut}>
                  Logout
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInlink)

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">K-Food</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="http://localhost:3000/">หน้าหลัก</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/FoodStore/">ร้านอาหาร</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  เข้าสู่ระบบ
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/Login/">
                    เข้าสู่ระบบ หรือ สมัครสมาชิก
                  </DropdownItem >
                  <DropdownItem divider />
                  <DropdownItem href="/History/">
                    ประวัติคำสั่งซื้อ
                  </DropdownItem>
                  <DropdownItem href="/Address/">
                    ที่อยู่การจัดส่ง
                  </DropdownItem>
                  <DropdownItem href="/Coupon/">
                    คูปองลดราคา
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

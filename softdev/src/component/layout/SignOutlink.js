import React, { useState }  from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';


const SignOutlink = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
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
              <NavItem>
                <NavLink href="/Login/">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default SignOutlink
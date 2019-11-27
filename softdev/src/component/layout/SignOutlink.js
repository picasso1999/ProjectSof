import React, { useState } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Button from '@material-ui/core/Button';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Menu from '@material-ui/core/Menu';

import MoreIcon from '@material-ui/icons/MoreVert';

import StoreIcon from '@material-ui/icons/Store';
import { deepOrange } from '@material-ui/core/colors';


const SignOutlink = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <PrimarySearchAppBar/>
          </Collapse>
        </Navbar>
      </div>
    )
}





const SignInlink = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { profile } = props
  
  return (
    
    <div>
      <Navbar color="light" light expand="md"> 
        <Collapse isOpen={isOpen} navbar>
            <PrimarySearchAppBar/>
        </Collapse>
      </Navbar>
      
    </div>
  );
}
const useStyles = makeStyles(theme => ({
  color: {
    color: '#fff',
  },
  orange: {
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  
}));

const PrimarySearchAppBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { profile } = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}

    >
      
      
      
     
    </Menu>
  );

 

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          <NavbarBrand className={classes.color} href="/">K-FOOD</NavbarBrand>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            <IconButton href="/" aria-label="show 4 new mails" color="inherit">
              
                <StoreIcon />            
            </IconButton>
            <Button href = "/Login" aria-label="show 4 new mails" color="inherit" edge="end">         
            SignIn</Button>
          </div>
          <div className={classes.sectionMobile}>
          
          </div>
        </Toolbar>
      </AppBar>
      
      {renderMenu}
    </div>
  );
}

export default SignOutlink
import React, { useState } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import { deepOrange } from '@material-ui/core/colors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const SignInlink = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { profile } = props
  
  return (
    
    <div>
      <Navbar color="light" light expand="md"> 
        <Collapse isOpen={isOpen} navbar>
            <PrimarySearchAppBar/>
            <ExitToAppIcon onClick={props.signOut}>Sign Out</ExitToAppIcon>
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
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
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

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink onClick={handleMenuClose} href="/Create/">Create Menu</NavLink>
      <br></br>
      <NavLink onClick={handleMenuClose} href="/History/">History</NavLink>
      <NavLink onClick={handleMenuClose} href="/Coupon/">Coupon</NavLink>
      <br></br>
    
     
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton 
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          
        >
          <AccountCircle />
        </IconButton >
        
      </MenuItem>
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
            <IconButton href="/Cart/" aria-label="show 4 new mails" color="inherit">
              <Badge  color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton href="/Foodstore/" aria-label="show 4 new mails" color="inherit">
              
                <StoreIcon />
                
             
            </IconButton>
            
            <IconButton
              
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Button onClick={props.signOut} aria-label="show 4 new mails" color="inherit" edge="end">
              
            SignOut</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}





const mapDispatchToProps = (dispatch) => {
  
  return {
    signOut: () => dispatch(signOut())
  }
  
}

export default connect(null, mapDispatchToProps)(PrimarySearchAppBar)
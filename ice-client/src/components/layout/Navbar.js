import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Logo from './Logo';
import Notifications from './Notifications';
//MUI Stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
//Icons
import HomeIcon from '@material-ui/icons/Home';
//Redux
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar className="nav">
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <Logo />
              <div style={{ width: 440, height: 3 }}></div>
              <PostScream />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
              <div style={{ width: 440, height: 3 }}></div>
              <Button
                style={{ whiteSpace: 'nowrap' }}
                color="inherit"
                component={Link}
                to="/about"
              >
                About Ice
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Logo />
              <div style={{ width: 440, height: 3 }}></div>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Button
                style={{ whiteSpace: 'nowrap' }}
                color="inherit"
                component={Link}
                to="/signup"
              >
                Sign Up
              </Button>
              <div style={{ width: 440, height: 3 }}></div>
              <Button
                style={{ whiteSpace: 'nowrap' }}
                color="inherit"
                component={Link}
                to="/about"
              >
                About Ice
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);

import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostScream from "../scream/PostScream";
import Logo from "./Logo";
import Notifications from "./Notifications";
//MUI Stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
//Icons
import HomeIcon from "@material-ui/icons/Home";
//Redux
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar className="nav">
        <Toolbar className="nav-container">
          <div className="wrapper">
            <Logo className="child1" />

            {authenticated ? (
              <div className="child2">
                <PostScream />
                <Link to="/">
                  <MyButton tip="Home">
                    <HomeIcon style={{ marginTop: "7px" }} />
                  </MyButton>
                </Link>
                <Notifications />
              </div>
            ) : (
              <div className="child2">
                <Button color="inherit" component={Link} to="/login">
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  Login
                </Button>

                <Link to="/">
                  <MyButton tip="Home">
                    <HomeIcon style={{ marginTop: "7px" }} />
                  </MyButton>
                </Link>

                <Button
                  style={{ whiteSpace: "nowrap" }}
                  color="inherit"
                  component={Link}
                  to="/signup"
                >
                  Sign Up
                </Button>
              </div>
            )}

            <Button
              className="child3"
              style={{ whiteSpace: "nowrap", marginRight: "24px" }}
              color="inherit"
              component={Link}
              to="/about"
            >
              About Ice
            </Button>
          </div>
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

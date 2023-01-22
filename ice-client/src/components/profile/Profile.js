import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styling from '../../util/styling';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import EditDetails from './EditDetails';
import MyButton from '../../util/MyButton';
import ProfileSkeleton from '../..//util/ProfileSkeleton';
//Mui Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
//Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
//Redux Stuff
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../../redux/actions/userActions';

const styles = {
  ...styling,
};

class Profile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated,
      },
    } = this.props;

    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper} style={{ position: 'sticky', top: (document.querySelector('.nav').clientHeight + 16) }}>
          <div className={classes.profile}>
            <Typography
              variant="h5"
              color="primary"
              className={classes.loggedIn}
            >
              Logged in as
            </Typography>
            <div className="image-wrapper">
              <img src={imageUrl} alt="profile-img" className="profile-image" />
              <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
              <MyButton
                tip="Edit Profile Picture"
                onClick={this.handleEditPicture}
                btnClassName="button"
              >
                <EditIcon color="primary" />
              </MyButton>
            </div>
            <hr />
            <div className="profile-details">
              <MuiLink
                component={Link}
                to={`/users/${handle}`}
                color="primary"
                variant="h5"
              >
                @{handle}
              </MuiLink>
              <hr />
              {bio && <Typography variant="body1">{bio}</Typography>}
              <hr />
              <hr />
              {location && (
                <Fragment>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <LocationOn color="primary" />
                    {'\u00A0'}
                    {'\u00A0'}
                    <span>{location}</span>
                  </div>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <LinkIcon color="primary" />
                    {'\u00A0'}
                    {'\u00A0'}
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      {website.length > 30
                        ? website.substring(0, 30) + '...'
                        : website}
                    </a>
                  </div>
                  <hr />
                </Fragment>
              )}
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <CalendarToday color="primary" />
                {'\u00A0'}
                {'\u00A0'}
                <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
              </div>
              <hr />
            </div>
            <MyButton tip="Logout" onClick={this.handleLogout}>
              <KeyboardReturn color="primary" />
            </MyButton>
            <EditDetails />
          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper} style={{ position: 'sticky', top: '11.5vh' }}>
          <Typography variant="body2" align="center">
            No profile found, please Login again
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </div>
        </Paper>
      )
    ) : (
      <ProfileSkeleton />
    );
    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser, uploadImage };

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Profile));

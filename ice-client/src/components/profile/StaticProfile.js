import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import styling from '../../util/styling';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
//Mui Stuff
import Paper from '@material-ui/core/Paper';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
//Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = {
  ...styling,
};

const StaticProfile = (props) => {
  const {
    classes,
    profile: { handle, createdAt, imageUrl, bio, website, location },
  } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={imageUrl} alt="profile-img" className="profile-image" />
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
      </div>
    </Paper>
  );
};

StaticProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaticProfile);

import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styling from '../util/styling';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.svg';
//Mui Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  ...styling,
  bigImage: {
    margin: '20 auto',
    maxWidth: '20%',
    maxHeight: '20%',
  },
};

class about extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="ice-icon" className={classes.bigImage} />
          <Typography variant="h2" className={classes.pageTitle}>
            About
          </Typography>
          <hr style={{ width: '55%' }} className={classes.visibleSeparator} />
          <Typography
            variant="body1"
            style={{ textAlign: 'center', color: '#444' }}
          >
            Ice is a social media that relies on a simplistic design and a
            modest interface, to aim for a user-friendly social experience on
            the web.
            <br />
            <br />
            Have a great time with your loved ones, staying connected at all
            times, on literally the coolest (😂) social media website on the
            planet ;)
            <br />
            <br />
            PS: Members are called Icers, while posts are called Screams.
            Rest, is presented and yours to interpret.
          </Typography>
          <hr style={{ width: '55%' }} className={classes.visibleSeparator} />
          <br />
          <Typography variant="body2" style={{ textAlign: 'center' }}>
            Made with 🤍 in Kannur, Kerala
          </Typography>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

about.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(about);

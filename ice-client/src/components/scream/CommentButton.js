import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import styling from '../../util/styling';
import MyButton from '../../util/MyButton';
//Mui Stuff
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
//Icons
import CloseIcon from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat';
//Redux Stuff
import { connect } from 'react-redux';
import { submitComment, clearErrors } from '../../redux/actions/dataActions';

const styles = {
  ...styling,
  closeButton: {
    position: 'absolute',
    left: '88%',
    top: '2%',
  },
  progressSpinner: {
    position: 'absolute',
  },
  dialogContent: {
    padding: 20,
  },
};

class CommentButton extends Component {
  state = {
    open: false,
    body: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: '' });
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.clearErrors();
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitComment(this.props.screamId, { body: this.state.body });
    this.handleClose();
  };

  render() {
    const { errors } = this.state;

    const {
      classes,
      user: { authenticated },
      UI: { loading },
    } = this.props;

    const commentButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Comment">
          <ChatIcon color="primary" />
        </MyButton>
      </Link>
    ) : (
      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Comment">
          <ChatIcon color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogTitle>Comment on this scream</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="body"
                type="text"
                label="Comment on scream"
                error={errors.comment ? true : false}
                helperText={errors.comment}
                value={this.state.body}
                onChange={this.handleChange}
                fullWidth
                className={classes.textField}
              />
              <div style={{ textAlign: 'left' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={loading}
                >
                  ✔ Submit
                  {loading && (
                    <CircularProgress
                      size={30}
                      className={classes.progressSpinner}
                    />
                  )}
                </Button>
              </div>
            </form>
            <br />
          </DialogContent>
        </Dialog>
      </Fragment>
    );

    return commentButton;
  }
}

CommentButton.propTypes = {
  submitComment: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
  UI: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  scream: state.data.scream,
  UI: state.UI,
});

const mapActionsToProps = {
  clearErrors,
  submitComment,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(CommentButton));

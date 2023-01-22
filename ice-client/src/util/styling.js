import theme from './theme';

export default {
  form: {
    textAlign: 'center',
  },
  image: {
    margin: '20 auto',
    maxWidth: '20%',
    maxHeight: '20%',
  },
  pageTitle: {
    margin: '10 auto',
  },
  textField: {
    margin: '10 auto 70',
  },
  button: {
    marginTop: 20,
    position: 'relative',
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10,
  },
  progress: {
    position: 'absolute',
  },
  invisibleSeparator: {
    border: 'none',
    margin: 4,
  },
  visibleSeparator: {
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    marginBottom: 20,
  },
  paper: {
    padding: '20px 20px 5px',
  },
  paperLoading: {
    padding: 20,
  },
  loggedIn: {
    textAlign: 'center',
    paddingBottom: 15,
  },
  profile: {
    '& .image-wrapper': {
      textAlign: 'center',
      position: 'relative',
      '& button': {
        position: 'absolute',
        top: '80%',
        left: '70%',
      },
    },
    '& .profile-image': {
      width: 220,
      heigth: 220,
      objectFit: 'cover',
      maxWidth: '100%',
      borderRadius: '50%',
      aspectRatio: '1/1'
    },
    '& profile-details': {
      textAlign: 'center',
      '& span, svg': {
        verticalAlign: 'middle',
      },
      '& a': {
        color: theme.palette.primary.main,
      },
    },
    '& hr': {
      border: 'none',
      margin: '0 0 10px',
    },
    '& svg.button': {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  buttons: {
    textAlign: 'center',
    '& a': {
      margin: '20px 10px',
    },
  },
};

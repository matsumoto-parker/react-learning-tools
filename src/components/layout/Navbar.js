import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#00aa7a' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="brand-logo">
              ReactLearningTools
            </Link>
          </Typography>
          <SignedInLinks />
          <SignedOutLinks />
        </Toolbar>
      </AppBar>
    </div>
  );
}

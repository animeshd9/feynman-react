import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    position:"absolute",
    height: "100px",
    width: "100px",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-50px",
  

  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CircularProgress /> */}
      <CircularProgress color="secondary" />
    </div>
  );
}
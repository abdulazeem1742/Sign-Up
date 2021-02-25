import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Button} from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 50,
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        // height: theme.spacing(16),
      },
    },
    Paper: {
      width: 500,
      height: 600,
      padding: 15,
      margin:'0 auto',
      textAlign: 'center',
    },
    Input: {
      width: '95%',
      marginBottom: 10,
    }
  }),
);

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.Paper}>
      <h1>Sign Up</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField label="First Name" variant="outlined" color="secondary" className={classes.Input} />
        <TextField label="Last Name" variant="outlined" color="secondary" className={classes.Input} />
        <TextField label="Email" variant="outlined" color="secondary" className={classes.Input} />
        <TextField label="Password" variant="outlined" color="secondary" type="password" className={classes.Input} />
        <TextField label="Mobile Number" variant="outlined" color="secondary" type="number" className={classes.Input} />
        <Button variant="contained" color="primary" className={classes.Input}>
        Sign Up
        </Button>
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </form>
      </Paper>
    </div>
  );
}

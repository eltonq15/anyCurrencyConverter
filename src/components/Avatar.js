import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Elton Alves Ribeiro - Any Free Currency Converter" src="https://lh3.googleusercontent.com/ogw/ADGmqu_tMvNH8wR5Z6D53ZfxQ9hR2rI4QVGkmicCAVJ6=s48-c-mo" />
    </div>
  );
}

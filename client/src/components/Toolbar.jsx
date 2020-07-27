import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import SearchBar from './SearchBar.jsx'

import PetsIcon from '@material-ui/icons/Pets';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const { onClick } = props;

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant="h6" noWrap onClick={() => onClick('home')}>
            Pawties
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {/* <SearchIcon /> */}

                &nbsp;
                &nbsp;

                </div>

              <SearchBar
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />


{/*
            <InputBase
              placeholder="Search by zip-code..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            /> */}

          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <PetsIcon onClick={() => {onClick('adoption'); console.log('click')}} />
              </Badge>
            </IconButton>

            <IconButton aria-label="" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <AddCircleIcon onClick={() => onClick('create event')} />
              </Badge>
            </IconButton>

            <IconButton
              aria-label=""
              color="inherit"
            >
              <EventIcon onClick={() => onClick('events')} />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

    </div>
  );
}
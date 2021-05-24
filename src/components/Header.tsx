import React, { useState } from 'react';
import { AppBar, Typography, makeStyles, Toolbar, IconButton, Avatar, Box, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useCurrentUser from '../contexts/CurrentUser';
import { useLocation, Link } from 'react-router-dom';
import authService from '../services/AuthService';

const useStyles = makeStyles(() => ({
  header: {
    top: '0px',
    backgroundColor: '#ac3973',
    textAlign: 'center',
    padding: '5px'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: '#ffcc66'
  },
  userBox:
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function Header() {
  const classes = useStyles();
  const user = useCurrentUser();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [menuEl, setMenuEl] = useState<Element | null>(null);

  function logout() {
    setAnchorEl(null);
    authService.logout();
  }

  function showUserProfile() {
    setAnchorEl(null);
  }

  function showProjects() {
    setMenuEl(null);
  }

  function showTeams() {
    setMenuEl(null);
  }
  return (
    <AppBar position="sticky" className={classes.header}>
      <Toolbar className={classes.toolBar}>
        {user &&
          <>
            <IconButton edge="start" color="inherit" aria-label="menu"
              onClick={(event) => setMenuEl(event.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={!!menuEl}
              onClose={() => setMenuEl(null)}
            >
              <MenuItem onClick={showProjects} component={Link} to="/projects">Projects</MenuItem>
              <MenuItem onClick={showTeams} component={Link} to="/teams">Teams</MenuItem>
            </Menu>
          </>
        }
        <Typography variant="h4">ManageIT</Typography>
        {user &&
          <>
            <Box className={classes.userBox}>
              <Typography variant="h6">Hello, {user?.username}</Typography>
              <IconButton
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <Avatar className={classes.avatar}>{user.username[0].toUpperCase()}</Avatar>
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={!!anchorEl}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={showUserProfile} component={Link} to="/profile">User Profile</MenuItem>
              <MenuItem onClick={logout} component={Link} to="/login">Logout</MenuItem>
            </Menu>
          </>
        }
      </Toolbar>
    </AppBar>
  );
}
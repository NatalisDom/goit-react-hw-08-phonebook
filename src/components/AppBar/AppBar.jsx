import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { useAuth } from 'hooks';

export const AppBars = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{}}>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

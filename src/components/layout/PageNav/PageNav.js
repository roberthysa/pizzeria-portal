import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNav.scss';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';

const PageNav = () => (
  <div className={styles.navigation}>
    <AppBar position='static'>
      <Toolbar>
        <Typography style={{ flexGrow : 1 }}>
          PIZZERIA PORTAL
        </Typography>
        <Box m={1}>
          <Button className={styles.link} component={Link} exact to={`${process.env.PUBLIC_URL}/`}
            variant="contained" color="secondary">Dashboard</Button>
        </Box>
        <Box m={1}>
          <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/Kitchen`}
            variant="contained" color="secondary">Kitchen</Button>
        </Box>
        <Box m={1}>
          <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/Tables`}
            variant="contained" color="secondary">Tables</Button>
        </Box>
        <Box m={1}>
          <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/Ordering`}
            variant="contained" color="secondary">Ordering</Button>
        </Box>
        <Box m={1}>
          <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/login`}
            variant="contained" color="secondary">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  </div>
);

export default PageNav;

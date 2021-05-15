import React from 'react';
import styles from './Login.scss';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

const Login = () => (
  <div className={styles.component}>
    <h2>Login view</h2>
    <LoginForm />
    <div>
      <Box mt={4}>
        <Button className={styles.link} component={Link} exact to={`${process.env.PUBLIC_URL}/`}
          variant="contained" color="secondary">Return to Dashboard</Button>
      </Box>
    </div>
  </div>
);

export default Login;

import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Box m={1}>
        <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`}
          variant="contained" color="secondary">Book table</Button>
      </Box>
      <Box m={1}>
        <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/:id`}
          variant="contained" color="secondary">Event table</Button>
      </Box>
    </div>
  </div>
);

export default Tables;

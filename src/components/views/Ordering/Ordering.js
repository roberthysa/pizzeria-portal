import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import { Button, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

const Content = [
  {id: '1', active: 87, status: 'cancelled', date: '14/05/2021', sum: 34.50},
  {id: '2', active: 92, status: 'new', date: '15/05/2021', sum: 72.00},
  {id: '3', active: 120, status: 'ready', date: '15/05/2021', sum: 30.00},
  {id: '4', active: 133, status: 'ready', date: '15/05/2021', sum: 64.50},
];

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table No.</TableCell>
            <TableCell>New order</TableCell>
            <TableCell>Active order</TableCell>
            <TableCell>Order status</TableCell>
            <TableCell>Order date</TableCell>
            <TableCell>Order sum</TableCell>
            <TableCell>Change status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Content.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                <Box m={1}>
                  <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}
                    variant="contained" color="secondary" style={{maxWidth: '150px', minWidth: '150px'}}>New order</Button>
                </Box>
              </TableCell>
              <TableCell>
                {row.active && (
                  <Button className={styles.link} component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/${row.active}`}>
                    {row.active}
                  </Button>
                )}
              </TableCell>
              <TableCell className={styles.cell_ready}>
                {row.status}
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.sum}
              </TableCell>
              <TableCell>
                <Box m={1}>
                  <Button className={styles.link}
                    variant="contained" color="secondary" style={{maxWidth: '150px', minWidth: '150px'}}>Change status</Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Ordering;

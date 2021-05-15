import React from 'react';
import styles from './Dashboard.scss';

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard view</h2>
    <div>
      <p>liczba zrealizowanych oraz wszystkich dzisiejszych zamówień zdalnych</p>
      <p>liczba zrealizowanych oraz wszystkich dzisiejszych zamówień lokalnych</p>
      <p>liczba wszystkich dzisiejszych rezerwacji</p>
      <p>liczba wszystkich dzisiejszych eventów</p>
    </div>
  </div>
);

export default Dashboard;

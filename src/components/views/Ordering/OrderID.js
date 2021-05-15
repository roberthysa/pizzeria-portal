import React from 'react';
import styles from './Ordering.scss';

const OrderID = (value) => {
  const id = value.match.params.id;

  return(
    <div className={styles.component}>
      <h2>Order view ID {id}</h2>
    </div>
  );
}

export default OrderID;

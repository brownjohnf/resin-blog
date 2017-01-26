import React from 'react';
import styles from './style.css';

const renderBars = (colors = [ 'FCC100', '6D676E', '1B1B1E' ]) => {
  return colors.map((color, i) => {
    return (
      <div
        key={i}
        style={{
          backgroundColor: `#${color}`
        }}
        className={styles.bar}>
      </div>
    );
  });
};

const Loading = (props) => {
  return (
    <div className={styles.loadBar}>
      {renderBars(props.colors)}
    </div>
  );
};

export default Loading;

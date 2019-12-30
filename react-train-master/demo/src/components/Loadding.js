import React from "react";
import styles from '../style/loading.css'

class Loading extends React.Component {
  render() {
    return (
      <div className={styles.load}>
        <div>
          <i className={styles.loading} />
          <i className={styles.loading} />
          <i className={styles.loading} />
          <i className={styles.loading} />
          <i className={styles.loading} />
        </div>
      </div
        >
    );
  }
}
export default Loading;

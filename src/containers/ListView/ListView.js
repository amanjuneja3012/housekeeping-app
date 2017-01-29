import React, { Component } from 'react';

export default class ListView extends Component {
  render() {
    const styles = require('./ListView.scss');
    return (
      <div className={styles.listView}>
        <div className={styles.leftSideInfo}>1024</div>
        <div className={styles.rightSideInfo}>
          <div className={styles.topInfo}>
            Sparking in bathroom
          </div>
          <div className={styles.bottomInfo}>
            timeSparking in
          </div>
        </div>
      </div>
    );
  }
}

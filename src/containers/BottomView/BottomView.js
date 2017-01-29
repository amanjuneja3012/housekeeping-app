import React, { Component } from 'react';

export default class BottomView extends Component {
  render() {
    const styles = require('./BottomView.scss');
    return (
      <div className={styles.bottomView}>
        <div className={styles.leftCard}>
          <div className={styles.leftCardTop}>
            <div className={styles.leftCardTopCount}>10</div>
            <div>Cleaning Due</div>
          </div>
          <div className={styles.leftCardBottom}>
            <div className={styles.leftCardBottomCount}>10</div>
            <div>Cleaning Due</div>
          </div>
        </div>
        <div className={styles.rightCard}>
          <div className={styles.rightCardTop}>
            <div className={styles.rightCardTopCount}>10</div>
            <div>Requests</div>
          </div>
          <div className={styles.rightCardBottom}>
            <div className={styles.rightCardBottomCount}>10</div>
            <div>Incidents</div>
          </div>
        </div>
      </div>
    );
  }
}

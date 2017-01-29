import React, { Component } from 'react';

import Tickets from '../Tickets/Tickets';

export default class Services extends Component {
  render() {
    const styles = require('./services.scss');
    return (
      <div className={styles.services}>
        <div className={styles.header}>
          <span className={styles.clean}>Cleaning</span>
          <span className={styles.request}>Requests</span>
          <span className={styles.incident}>Incidents</span>
        </div>
        <div className={styles.cleanRow}>
          <Tickets data={"data"}/>
        </div>
        <div className={styles.requestRow}>
          <Tickets data={"data"}/>
        </div>
        <div className={styles.incidentRow}>
          <Tickets data={"data"}/>
        </div>
      </div>
    );
  }
}

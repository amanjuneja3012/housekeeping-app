import React, { Component } from 'react';


export default class Tickets extends Component {
  render() {
    const styles = require('./tickets.scss');
    return (
      <div className={styles.tickets}>{"hello"}</div>
    );
  }
}

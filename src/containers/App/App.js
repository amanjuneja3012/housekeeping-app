import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Home from '../Home/Home';
// import Services from '../Services/Services';

export default class App extends Component {
  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <Home />
      </div>
    );
  }
}

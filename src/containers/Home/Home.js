import React, { Component } from 'react';

import ListView from '../ListView/ListView';
import BottomView from '../BottomView/BottomView';

export default class Home extends Component {

  // componentDidMount(){
  // }

  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <ListView />
        <ListView />
        <BottomView />
      </div>
    );
  }
}

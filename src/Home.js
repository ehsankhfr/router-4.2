import React, { Component } from 'react';
import MatchReport from './MatchReport';

class Home extends Component {
  render() {
    return (
      <div>
        This is Home!
        <MatchReport {...this.props}/>
      </div>
    );
  }
}

export default Home;

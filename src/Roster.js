import React, { Component } from 'react';
import MatchReport from './MatchReport';

const Roster = (props) =>(
  <div>
    This is Roster! My age is {props.Age} :)
	<MatchReport {...props}/>
  </div>
);

export default Roster;

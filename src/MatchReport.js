import React, { Component } from 'react';

import './MatchReport.css';

class MatchReport extends Component {
	render() {
		return (
			<div className="match-report">
				<h3 className="match-report__title">Match report</h3>
				<table>
					<thead>
						<tr>
						   {
						   	  Object.keys(this.props.match).map((key,index)=>(<th key={index}>{key}</th>))
						   }
						</tr>
					</thead>
					<tbody>
						<tr>
						   {
						   	  Object.keys(this.props.match).map((key,index)=>(<td key={index}>{JSON.stringify(this.props.match[key])}</td>))
						   }
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MatchReport;

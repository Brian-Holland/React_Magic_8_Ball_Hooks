import React from 'react';

import '../App.css';

const Prediction = ({ prediction, fade }) => {
	console.log(prediction, fade);
	return (
		<div>
			<div className={`${prediction ? 'inner-ball answered' : 'inner-ball unanswered'}`}>
				{prediction ? (
					<div className={`${fade ? 'triangle' : ''}`}>
						<span hidden={!fade}>{prediction}</span>
					</div>
				) : (
					<span className="eight">8</span>
				)}
			</div>
		</div>
	);
};

export default Prediction;

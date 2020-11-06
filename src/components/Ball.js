import React, { useState } from 'react';
import Prediction from './Prediction';
import '../App.css';
import { Container } from 'react-bootstrap';

const Ball = () => {
	const [ prediction, setPrediction ] = useState('');
	const [ fade, setFade ] = useState(false);
	const [ shaking, setShaking ] = useState(false);

	const predictions = [
		'As I see it, yes.',
		'Ask again later.',
		'Better not\n tell you now.',
		'Cannot predict now.',
		'Concentrate \nand ask again.',
		'Don’t count on it.',
		'It is certain.',
		'It is decidedly so.',
		'Most likely.',
		'My reply is no.',
		'My sources say no.',
		'Outlook not so good.',
		'Outlook good.',
		'Reply hazy, try again.',
		'Signs point to yes.',
		'Very doubtful.',
		'Without a doubt.',
		'Yes.',
		'Yes – definitely.',
		'You may rely on it.'
	];

	function shake() {
		setFade(false);

		const result = predictions[Math.floor(Math.random() * predictions.length)];

		setShaking(true);

		setTimeout(() => {
			setPrediction(result);
			setFade(true);
		}, 1000);

		setTimeout(() => {
			setShaking(false);
		}, 1000);
	}

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			shake();
		}
	}

	return (
		<Container>
			<h1 className="app-title my-2">Magic 8 Ball</h1>
			<div className="BallShake">
				<div className={`Ball-container ${shaking && 'shaking'}`}>
					<Prediction prediction={prediction} fade={fade} />
				</div>

				<div className="question">
					<input type="text" placeholder="Ask a question" onKeyDown={handleKeyDown} disabled={shaking} />
					<button onClick={shake} disabled={shaking}>
						{shaking ? 'Shaking...' : 'Shake'}
					</button>
				</div>
			</div>
		</Container>
	);
};

export default Ball;

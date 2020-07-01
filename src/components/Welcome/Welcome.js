import React from 'react';
import './Welcome.css';
import { Component } from 'react';

class Welcome extends Component {
	render() {
		return (
			<>
				<header>
					<section className='hero-header-text'>
						<h1>ARE YOU READY TO...</h1>
						<h1>WERK!</h1>
						<button>Yaaasss!</button>
					</section>
				</header>
			</>
		);
	}
}

export default Welcome;

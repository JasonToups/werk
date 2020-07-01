import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Register from '../NavBar/Modal/ModalRegister';

class Welcome extends Component {
	render() {
		return (
			<>
				<link
					href='https://fonts.googleapis.com/css2?family=Knewave&family=Roboto:wght@300;400&display=swap'
					rel='stylesheet'
				/>
				<header>
					<section className='hero-header-text'>
						<h1 id='ready'>ARE YOU READY TO...</h1>
						<h1 id='werk'>Werk?</h1>
						<Register />
					</section>
				</header>
				<section className='overview'>
					<div className='column join-the-queens'>
						<h1>Join the Queens</h1>
						<p>
							On Werk, you can tip, follow or book your favorite drag queens.
							<br></br>
							<br></br>
							Can’t get out to a drag show? Tip them from the comfort of your
							own home.<br></br>
							<br></br> Need a Queen for your event? Send them a booking
							request.<br></br>
							<br></br> Queens work hard for the money and they deserve anything
							you can give.
						</p>
					</div>
					<div className='column data'>
						<div className='data-col'>
							<h1>145</h1>
							<p>Queens in the community</p>
						</div>
						<div className='data-col'>
							<h1>$135k</h1>
							<p>Tips collected</p>
						</div>
						<div className='data-col'>
							<h1>79</h1>
							<p>Gigs booked</p>
						</div>
					</div>
				</section>
				<section className='queen-or-fan'></section>
			</>
		);
	}
}

export default Welcome;

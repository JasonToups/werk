import React from 'react';
import { Component } from 'react';
import './Welcome.css';
import Register from '../NavBar/Modal/ModalRegister';
import Uploader from '../Uploader/Uploader';
import DisplayImage from '../Uploader/DisplayImage';

class Welcome extends Component {
  render() {
    return (
      <>
        <link
          href='https://fonts.googleapis.com/css2?family=Knewave&family=Roboto&family=Quicksand&display=swap'
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
              home.<br></br>
              <br></br> Need a Queen for your event? Send them a booking
              request.<br></br>
              <br></br> Queens work hard for the money and they deserve anything
              you can give.
            </p>
          </div>
          <div className='data'>
            <div className='data-col'>
              <h1>145</h1>
              <p>Queens online</p>
            </div>
            <div className='data-col'>
              <h1>$35k</h1>
              <p>Tips collected</p>
            </div>
            <div className='data-col'>
              <h1>79</h1>
              <p>Gigs booked</p>
            </div>
          </div>
        </section>
        <section className='queen-or-fan'>
          <h1>Are you a Queen or a Fan?</h1>
          <div className='queen-or-fan-detail'>
            <div>
              <h1>Queens</h1>
              <p>
                Queens can post images from their performances. They can save
                their gig requirements. They can accept gig requests, and accept
                tips.
              </p>
            </div>
            <div>
              <h1>Fans</h1>
              <p>
                Fans can tip or follow Queens. Fans can send gig requests to
                queens, and tip them.
              </p>
            </div>
          </div>
        </section>
        {/* <Uploader />
        <DisplayImage /> */}
      </>
    );
  }
}

export default Welcome;

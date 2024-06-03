import React from 'react';
import './contact.css';
import { useState } from 'react';
import Typed from 'react-typed';
import axios from "axios";
import Location from './img/location.png';
import Shape from './img/shape.png';
import GreenCard from './img/greencard.jpg';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async(e) => {
    e.preventDefault();

    const dataToSend = {
      name,
      email,
      message
    };
    try {
      const response = await axios.post('http://localhost:5000', dataToSend);
      alert(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='info-section'>
        <div className="info-text">
          {/* <h2> Green Cards</h2> */}
          <div >  
        <Typed strings={['GREEN CARDS']} typeSpeed={250}/>
      </div>
          <p>
            Green cards, officially known as Permanent Resident Cards, allow non-U.S. citizens to live and work permanently in the United States. Holding a green card is a prerequisite for applying for U.S. citizenship through the naturalization process, typically after five years of residency.
          </p>
          <p>
            Having a green card grants you the legal right to work and live in the United States indefinitely, as long as you do not commit any actions that would make you removable under the immigration law. Green card holders also have the privilege of sponsoring certain relatives for green cards.
          </p>
          <p>
            It is essential to maintain your permanent resident status, including adhering to the tax laws and maintaining continuous residence in the U.S. Applying for a green card typically involves a complex process that includes petitioning by a family member or employer, and it may involve waiting for a visa number to become available.
          </p>
        </div>
        <div className="info-image">
          <img src={GreenCard} alt="Green Card Information" />
        </div>
      </div>
      <div className='separator'></div>
      <div className='All-header'>  
        <Typed strings={['CONTACT']} typeSpeed={250}/>
      </div>
      <div className="container-c">
        <span className="big-circle"></span>
        <img src={Shape} className="square" alt="" />
        <div className="form" data-aos="flip-left" data-aos-duration="3000" style={{transformOrigin: '0px 0px'}}>
          <div className="contact-info">
            <h3 className="title">Let's get connected</h3>
            <p className="text">
              Green cards, officially known as Permanent Resident Cards, allow non-U.S. citizens to live and work permanently in the United States. Holding a green card is a prerequisite for applying for U.S. citizenship .
            </p>
            <div className="info">
              <div className="information">
                <img src={Location} className="icon" alt="" />
                <p style={{fontSize:'1rem'}}>United States of America</p>
              </div>
            </div>
            <p className='FAQ' style={{fontSize:'.7rem', paddingTop:'.8rem', marginBottom:'-.5rem'}}>Have any question or suggestion! Please let us know.</p>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <form onSubmit={sendEmail}>
              <h3 className="title">Contact Us</h3>
              <div className="input-container-c">
                <input type="text" name="name" className="input" placeholder='Name' pattern="[a-zA-Z]{3,50}" required
                  onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className="input-container-c">
                <input type="email" name="email" className="input" placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required
                  onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="input-container-c textarea">
                <textarea name="message" className="input" placeholder='Message' pattern="[a-zA-Z]{500}" required onChange={(e)=>setMessage(e.target.value)}></textarea>
              </div>
              <input type="submit" value="Send" className="button s-button" />
            </form>
          </div>
        </div>
      </div>
      <div className="blur-c"></div>
    </div>
  );
}

export default Contact;

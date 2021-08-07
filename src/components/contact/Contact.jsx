import React, { Component, useState } from 'react';
import './Contact.scss';
import { Button } from '../Button';

class ContactMob extends Component {
  state = ({ fullName: "", email: "", subject: "", message: "" });

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  }
render() {
  const { fullName, email, subject, message } = this.state;
  return(
    <div className="contact-cont" id='contact'>
      <form className='contact_form' action="https://formspree.io/f/mwkarwwl" method="POST">
        <div className="contact-heading">
          <h2 className='contact-me title'>How To Reach Me</h2>
          <p className="contact-me-subhead">I Can't Wait To Hear From You!</p>
        </div>
        <div className='contact_items'>
          <div className='contact_item'>
            <input
              type="text"
              placeholder="Name"
              required
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
            />
          </div>
          <div className='contact_item'>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className='contact_item'>
            <input 
              name='subject'
              type="text"
              placeholder="Subject"
              required
              value={subject}
              onChange={this.handleChange}
            />
          </div>
          <div className='contact_item'>
            <textarea
              type="text"
              rows="1"
              cols="10"
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
              wrap='hard'
            />
          </div>
          <div className="contact-btn-div">
            <Button type='submit'
            buttonStyle='btn-primary-solid'
            buttonSize="btn-med">Send Message</Button>
          </div>
        </div>
      </form>
    </div>
  )
  }
}

export default ContactMob;
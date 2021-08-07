import React, {Component} from 'react';
import { Fade } from "react-reveal";


import './ContactMob.scss';
import { Button } from '../../Button';
// import FormInput from '../../form-input/FormInput';

class ContactMob extends Component {
  state = { fullName: "", email: "", subject: "", message: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

render() {
  const { fullName , email, subject, message } = this.state;
  return(
  
    <div className="contact-cont-mob">
      <form className='contact_form-mob' action="https://formspree.io/f/mwkarwwl"
        method="POST">
        <div className="contact-heading-mob">
          <h2 className='contact-me-mob title'>Contact Me</h2>
          <p className="contact-me-subhead-mob">Can't Wait to Hear From You!</p>
        </div>
        <div className='contact_items-mob'>
        <div className='contact_item-mob'>
        {/* <label>Name</label> */}
        <input
              type="text"
              placeholder="Name"
              required
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
            />
        </div>
        <div className='contact_item-mob'>
        <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />        
        </div>
        <div className='contact_item-mob'>
        <input name='subject' 
         type="text"
         placeholder="Subject"
         required
         value={subject}
         onChange={this.handleChange}/>
        </div>
        <div className='contact_item-mob'>
        <textarea
              type="text"
              rows="1"
              cols="10"
              name="message"
              placeholder='Message'
              value={message}
              onChange={this.handleChange}
              wrap='hard'
            />        </div>
        <div className='contact-btn-div-mob'>
          <Button type='submit' buttonStyle='btn-primary-solid' buttonSize="btn-med" >Send Message</Button>

        </div>
        </div>
        </form>
    </div>
      )
}
}

export default ContactMob;
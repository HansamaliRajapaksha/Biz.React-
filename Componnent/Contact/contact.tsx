import React, { useState } from "react";
import './contact.css'; // Adjust this path if necessary
import msg_icon from"../../../public/message.jpg";
import mail_icon from "../../../public/mail.jpg";
import phone_icon from "../../../public/phone.png";
import location_icon from "../../../public/location.jpg";



interface FormData {
  name: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  });
  const [result, setResult] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, for example, send data to server
    console.log(formData);
    // Clear form fields
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
    // Update result message
    setResult('Form submitted successfully!');
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p> ...................................</p>
        <ul>
          <li><img src={mail_icon} alt="" /> biz4tchbusineesolution@gmail.com</li>
          <li><img src={phone_icon} alt="" /> 071-4262626</li>
          <li><img src={location_icon} alt="" /> BIZ4TECH Business Solutions, Hingurana, Amapara</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' value={formData.name} onChange={handleChange} required />
          <label>Phone Number</label>
          <input type="tel" size={10} name='phone' placeholder='Enter Your Phone Number' value={formData.phone} onChange={handleChange} required />
          <label>Write your Messages Here</label>
          <textarea name="message"  placeholder='Enter Your Message' value={formData.message} onChange={handleChange} required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactForm;

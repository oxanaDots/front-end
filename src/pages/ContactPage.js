import PageNav from "../components/PageNav";
import React from "react";
import axios from 'axios';
import { useState } from "react";
import Footer from '../components/Footer'
import styles from './ContactPage.module.css'
function ContactPage (){

    const [formData, setFormData] = useState({
        recipientEmail: '',
        fullName:'',
        subject:'',
        message:'',

    })



    const [status, setStatus] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/send-email', formData);
      setStatus('Email sent successfully');
    } catch (error) {
      setStatus('Error sending email');
    }
  };
return(
    <section>
        <PageNav/>
        <form onSubmit={handleSubmit}> 
            <legend>Get in Touch</legend>
            
            <fieldset>
                <div className={styles.labelCont}>
                <label>
                Full Name
                </label>
                <input  
                type='text'
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
            
                />
                </div>

                <div className={styles.labelCont}>
                <label>
              Email Address
                </label>
                <input 
                 type='email'
                 name='recipientEmail'
                 value={formData.recipientEmail}
                 onChange={handleChange}
                 required
                />
                </div>

                <div className={styles.labelCont}>
                <label>
               Subject of Message
                </label>
                <input  type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}/>
                </div>

    

                <div className={styles.labelCont}>
                <label>
               Tell me about yourself and your past projects
                </label>
                <textarea 
                type='message'
                name='message'
                value={formData.message}
                onChange={handleChange}/>
                </div>


                <button >Submit</button>
            </fieldset>
        </form>
        <Footer/>
    </section>
)
}

export default ContactPage
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetter from '../AnimatedLetters'
import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() =>{
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a5vmx7d', 'template_u7q8ppc', form.current, 'GgByNwtw-vMtSaKvX')
      .then(() => {
          alert('Message successfully sent!')
          window.location.reload(false)
      }, () => {
          alert('Failed to send the message, please try again')
        });
    };
    return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetter letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                idx={15}
                />
            </h1>
            <p>
                Fill out this form to send me a message! Or contact me directly at angelhycheng@gmail.com. 
            </p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'> <input type='text' name='name' placeholder='name' required/></li>
                        <li className='half'> <input type='text' name='email' placeholder='email' required/></li>
                        <li className='full'>
                            <input
                                placeholder='Subject'
                                type='text'
                                name='subject'
                                required
                            />
                        </li>
                        <li>
                          <textarea placeholder='message' name='message' required/>
                        </li>
                        <li>
                            <input type='submit' class='flat-button' value='SEND'/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
    <Loader type='line-scale-pulse-out-rapid'/>
    </>
    )
}

export default Contact
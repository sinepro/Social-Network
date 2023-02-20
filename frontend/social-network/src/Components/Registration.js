import React, { useEffect, useState } from 'react';
import './Registration.scss';
import axios from 'axios';

function Registration() {

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    /* Call function once when component renders */
    useEffect(() => {
        RegistrationHeader();
    }, []);

    /* It takes a string and appends each letter of string as a div */
    const RegistrationHeader = () => {
        const header = 'REGISTRATION';
        const result = document.createElement('div');
        const headerDiv = document.getElementById('registration__left');

        for (let i = 0; i < header.length; i++) {
            let letter = document.createTextNode(header[i]);
            let letterDiv = document.createElement('div')
            letterDiv.appendChild(letter);
            headerDiv.appendChild(letterDiv)
        }
    }

    /** Handle form submit - send request to server */
    const handleSubmit = (e) => {
        e.preventDefault();

        const url = 'http://127.0.0.1:8000/register';
        const form = e.target;
        const formData = new FormData(form);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        };

        axios.post(url, formData)
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    /** Handle input change */
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    /** Return */
    return (
        <div className='registration'>
            <div className="registration__left" id='registration__left'>
            </div>

            <div className="registration__right">
                <form onSubmit={handleSubmit}>
                    <input type={'text'} name='username' value={formData.username} placeholder={'Username'} onChange={handleInputChange} /> <br />
                    <input type={'text'} name='email' value={formData.email} placeholder={'E-mail'} onChange={handleInputChange} /> <br />
                    <input type={'password'} name='password' value={formData.password} placeholder={'Password'} onChange={handleInputChange} /> <br />
                    <button type='submit'>Register</button>
                </form>

            </div>
        </div>
    )
}

export default Registration;

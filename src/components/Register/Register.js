import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <h3>Please Register Now</h3>
            <div className='register-info'>
                <input type="text" name="" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="" id="" placeholder='Enter your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Enter your Password' />
                <br />
                <input type="submit" value="Register" />
            </div>
        </div>
    );
};

export default Register;
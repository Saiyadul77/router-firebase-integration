import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React from 'react';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';


const auth = getAuth(app);


const Login = () => {
    // const { signInGoogle } = useFirebase();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>

            <h3>Please Login</h3>
            <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            <div className='register-info'>
                <input type="email" name="" id="" placeholder='Enter your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Enter your Password' />
                <br />
                <input type="submit" value="Login" />
            </div>
        </div>
    );
};

export default Login;
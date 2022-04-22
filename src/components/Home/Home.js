import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)
    // const { user } = useFirebase();
    return (
        <div>
            <h1>This is Home</h1>
            <p>The user name is: {user ? user.displayName : 'no body'}</p>
        </div>
    );
};

export default Home;
import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory;
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''

    });
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email: email }
                // const user = result.user;

                setLoggedInUser(signInUser);
                // history.replace(from)
                history.push('/destination')

                // console.log(signInUser);
                //  setUser(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email);
            });

    }

    return (

        <div class="main">
            <h2 className="sign" align="center">Create an account</h2>
            <form className="form1">
                <input className="un " type="text" align="center" placeholder="Name" />
                <input className="un " type="text" align="center" placeholder="Username or Email" />
                <input className="pass" type="password" align="center" placeholder="Password" />
                <input className="pass" type="password" align="center" placeholder="Confirm Password" />
                <a className="submit" align="center"> Create an account</a>
                <br />
                <br />
                <button className="submit-google" align="center" onClick={handleGoogleSignIn}> <FontAwesomeIcon icon={faGoogle} />     Continue with Google</button>
                <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
               
            </form>
        </div>



    );
};

export default Login;
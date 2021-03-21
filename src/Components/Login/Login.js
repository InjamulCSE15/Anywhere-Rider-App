import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';



const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    const handleGoogleSignIn = () => {
        
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
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
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </form>
        </div>



    );
};

export default Login;
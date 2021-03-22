import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {

    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({

        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false

    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                const { displayName, email } = result.user;
                // console.log(result.user)
                const signedInUser = { name: displayName, email: email };
                // console.log(signedInUser)
                setLoggedInUser(signedInUser);
                history.push('/destination');
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

    const handleBlur = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            const isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {

            const isValidPass = e.target.value.length > 6;
            const hasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = (isValidPass && hasNumber);
        }
        if (isFieldValid) {

            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        }
    }
    const updateUser = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
            
        }).then(function () {

        }).catch(function (error) {

        });
    }
    const handleSubmit = (e) => {

        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUser(user.name);

                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res)

                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);

                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);

                });
        }

        e.preventDefault();
    }

    return (
        <div>
            <div className="main">
                <h2 className="sign" align="center">Create an account</h2>
                <form className="form1" onSubmit={handleSubmit}>
                    {newUser && <input className="un " name="name" type="text" align="center" onBlur={handleBlur} placeholder="Name" />}
                    <input className="un " type="text" name="email" align="center" onBlur={handleBlur} placeholder="Email" />
                    <input className="pass" type="password" name="password" align="center" onBlur={handleBlur} placeholder="Password" />
                    {newUser && <input className="pass" type="password" name="password" align="center" onBlur={handleBlur} placeholder="Confirm Password" />}
                    <input className="un " align="center" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} ></input>
                    <br />
                    <br />
                    <button className="submit-google" align="center" onClick={handleGoogleSignIn}> <FontAwesomeIcon icon={faGoogle} />     Continue with Google</button>
                    <br/>
                    <br/>
                    <>
                    {newUser && <label className="unNewUser" onClick={() => setNewUser(!newUser)}  htmlFor='!newUser'>Already Have an account?</label>}
                    <br/>
                    {!newUser && <label className="unNewUser" onClick={() => setNewUser(!newUser)} htmlFor='newUser'>Don't have any account?</label>}
                    <br/>
                    </>
                    <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>

                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Signed Up' : 'Sign In'} Successfully</p>}
                </form>
            </div>
            {/* <div className="formStyle">
                    
                    <form onSubmit={handleSubmit}>
    
                    {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Name"></input>}
                    <br/>
                        <input type="text" name="email" onBlur={handleBlur} placeholder="Email"></input>
                        <br/>
                        <input type="password" name="password" onBlur={handleBlur} placeholder="Password"></input>
                        <br />
                        {newUser && <input type="password" name="password" onBlur={handleBlur} placeholder="Confirm Password"></input>}
                        <br/>
                        <input type="submit" value={newUser?'Sign Up':'Sign In'} ></input>
                        <br/>
    
                        {newUser && <label style={{fontSize:'20px'}}  htmlFor='!newUser'>Already Have an account?</label>}
                        {!newUser && <label style={{fontSize:'20px'}} htmlFor='newUser'>Don't have any account?</label>}
                        
                       {!newUser && <input type="checkbox" onChange={()=>setNewUser(!newUser)}>
                           </input>}
                           {newUser && <input type="checkbox" onChange={()=>setNewUser(!newUser)}>
                           </input>}
                    </form>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User {newUser?'Signed Up':'Sign In'} Successfully</p>}
                    <br/>
                    <button onClick={handleGoogleSignIn}>Google Sign In</button>
                    <br/>
                    <button onClick={handleFbSignIn}>Facebook Sign In</button>
                </div> */}
            <br />

        </div>
    );
};

export default Login;



// import React, { useContext, useState } from 'react';
// import './Login.css';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { useHistory, useLocation } from 'react-router';
// import { UserContext } from '../../App';


// const Login = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const history = useHistory;
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };
//     const [user, setUser] = useState({
//         isSignedIn: false,
//         name: '',
//         email: '',
//         password: '',
//         photo: ''
//     });
//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//     }

//     const handleGoogleSignIn = () => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth()
//             .signInWithPopup(provider)
//             .then((result) => {

//                 var credential = result.credential;
//                 var token = credential.accessToken;
//                 const { displayName, email } = result.user;
//                 const signInUser = { name: displayName, email: email }
//                 // const user = result.user;

//                 setLoggedInUser(signInUser);
//                 history.replace(from)
//                 // history.push('/destination')

//                 // console.log(signInUser);
//                 //  setUser(user);
//             })
//             .catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 var email = error.email;
//                 var credential = error.credential;
//                 console.log(errorCode, errorMessage, email);
//             });

//     }

//     return (

//         <div class="main">
//             <h2 className="sign" align="center">Create an account</h2>
//             <form className="form1">
//                 <input className="un " type="text" align="center" placeholder="Name" />
//                 <input className="un " type="text" align="center" placeholder="Username or Email" />
//                 <input className="pass" type="password" align="center" placeholder="Password" />
//                 <input className="pass" type="password" align="center" placeholder="Confirm Password" />
//                 <a className="submit" align="center"> Create an account</a>
//                 <br />
//                 <br />
//                 <button className="submit-google" align="center" onClick={handleGoogleSignIn}> <FontAwesomeIcon icon={faGoogle} />     Continue with Google</button>
//                 <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>

//             </form>
//         </div>



//     );
// };

// export default Login;
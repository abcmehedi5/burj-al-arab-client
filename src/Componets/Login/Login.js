import React, { useContext, useState } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../firebaseConfig/firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, currentUser } from "firebase/auth";
import { userContext } from '../../App';
import { Navigate, useHistory, useLocation, useNavigate } from 'react-router-dom';
import googleimg from '../../images/googleLogin.png';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import burjVideo from '../../images/burjvideo.mp4'
const app = initializeApp(firebaseConfig)
const Login = () => {

    const [loggedin, setLoggedin] = useContext(userContext);

    const history = useNavigate()
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new GoogleAuthProvider();
    const handleGoogleSingIN = () => {
        const auth = getAuth(app)
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { displayName, email, photoURL, uid } = result.user;
                const loggedInUser = { name: displayName, email, photo: photoURL }

                setLoggedin(loggedInUser)
                storeAuthToken()
                // ...
                console.log(uid);
                from && history(from.pathname)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // const email = error.customData.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    // very id token 

    const storeAuthToken = () => {
        getAuth(app).currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                // Send token to your backend via HTTPS
                console.log(idToken);
                // ...
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div className="userLoginContainer">


            {/* <div className="bgvideo">
                <video src={burjVideo} autoPlay={true} muted={true} loop={true}></video>
            </div> */}

            <div className='LoginArea'>
                <h3>Login To Your Account</h3>

                <div className="fromLogin">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

                <div className='googleLoginBtn'>
                    <button onClick={() => handleGoogleSingIN()}> <img src={googleimg} alt="" />  Sing in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
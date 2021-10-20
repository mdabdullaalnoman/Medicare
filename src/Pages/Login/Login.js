import React, { useState } from 'react';
import dumyImg from '../../meidia/dummy-user.png';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import './Login.css';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../Context/useAuth';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';


const Login = () => {
    const { handleGoogleSignIn, message, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggleLogin, setToggleLogin] = useState(false);

    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();

    console.log(location.state?.from);
    // handle google signIn ----------------------------------------------
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(location.state?.from || '/')
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message)
            });
    }
    // handleEmail-----------------------------------
    const handleEmail = (e) => {
        setEmail(e.target.value.toLowerCase())
    }
    //handlePassword----------------------------------
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    // sign up user using email and password-----------------------------------------
    const handleSignUpUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    // handle toggle Login------------------------------
    const handleToggleLogin = (e) => {
        setToggleLogin(e.target.checked);
    }

    // handle sign in user -----------------------------
    const handleSignInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div>
            <Navbar />
            <div className="form-warp">
                <div className="form-container">
                    <div className="log-in-head">
                        <img src={dumyImg} alt="" />
                        <h1>{toggleLogin ? 'SignUp' : 'Login'}</h1>
                    </div>

                    <form onSubmit={handleSignUpUser}>
                        <div className="email">
                            <label htmlFor="email">Email</label><br />
                            <input onBlur={handleEmail} type="email" name="email" id="email" placeholder="email" required />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label><br />
                            <input onBlur={handlePassword} type="password" name="password" id="password" placeholder="password" autoComplete="off" required />
                        </div>


                        <div className="register-reset">
                            <div className="checkbox">
                                <input onClick={handleToggleLogin} type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Dont have any account !</label>
                            </div>
                            <Link to="/login">forgot password</Link>
                        </div>


                        <div className="submit-button">
                            {
                                toggleLogin
                                    ? <button type="submit">SignUp</button>
                                    : <button type="submit">Login</button>

                            }
                        </div>
                    </form>
                    <p className="message"> {message}</p>
                    <div className="icons">
                        <FaGoogle onClick={handleGoogleLogin} className="google-icon" />
                        <FaFacebook className="facebook-icon" />
                        <FaGithub className="github-icon" />
                        <FaTwitter className="twitter-icon" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
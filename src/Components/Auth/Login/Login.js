import React, { useContext } from 'react';
import './Login.css';
import firebase from 'firebase/app';
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../../App';
import icon from '../../../Images/google.png';


const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  // const { from } = location.state || { from: { pathname: "/login" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = {...user, name: displayName, email:email,photoURL:photoURL, isSigned: true };
      // setUserToken()
      setUser(signedInUser);
      // history.replace(from)
      //get token and set it to session storage
      firebase.auth().currentUser.getIdToken(true)
      .then(token=>{
         sessionStorage.setItem('token',JSON.stringify(token))
          history.replace(history.location.location?.pathname || '/dashboard/show-all-product')
      })
    })
    .catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }



  return (
    <div className="login-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 text-center">
                    <div className="login-form">
                        <h2>Login with</h2>
                        <button onClick={handleGoogleSignIn} className="d-flex align-items-center justify-content-around btn-style">
                            <div className="google-icon"><img src={icon} alt="GIcon" srcset=""/></div>
                            <div><h6>Continue with Google</h6></div>
                        </button>
                        <p className="mt-3">Don't have an account? <span onClick={handleGoogleSignIn} style={{cursor: 'pointer'}} className="text-success">create an account</span></p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  );
};

export default Login;
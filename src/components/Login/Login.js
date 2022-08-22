import React from 'react';
import "./Login.css"
// import GoogleIcon from './icons8-google (1).svg';
import FacebookIcon from './icons8-facebook (1).svg';
import { Link } from 'react-router-dom';
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./../../firebase-config";




const Login = () => {
  // auth.onAuthStateChanged(userr=>{
  //   console.log(userr)
  // })
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userr, setUserr] = useState({});
      const [user, setUser] = useState({
        userEmail: "",
        userPassword: "",
      });
      const [error, setError] = useState({
        userEmailError: null,
        userPasswordError: null,
      });
      const AddingEmail = (evt) => {
        if (evt.target.name === "userEmail") {
          setUser({
            ...user,
            userEmail: evt.target.value,
          });
          setError({
            ...error,
            userEmailError:
              evt.target.value.length === 0
                ? "this field is required"
                : null,
          });
        } else if (evt.target.name === "userPassword") {
          setUser({
            ...user,
            userPassword: evt.target.value,
          });
          setError({
            ...error,
            userPasswordError:
              evt.target.value.length === 0
                ? "this field is required"
                : evt.target.value.length < 8
                ? "pass is less than 8"
                : null,
          });
        }
        
      }

  onAuthStateChanged(auth, (currentUser) => {
    setUserr(currentUser);

  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      const userData = JSON.stringify(userr);
      localStorage.setItem('user', userData);
    } catch (error) {
      console.log(error.message);
    }
  
  };
  
  const logout = async () => {
    await signOut(auth);
    window.localStorage.removeItem("user")
  };

    return (
      <>
              <div className='row m-y-lg one p-3'>
            <h1 className='text-center mt-8 mb-8 f-28 f-500'> Login</h1>
        </div>
        <div id='main' className="d-flex justify-content-center">
{/* <img id='img1' className='icon' src={GoogleIcon} alt="" /> */}
{/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}
<i id='googleIcon' class="fa-brands fa-google"></i>
<button id='btn1' className='btngoogle' >
    Continue wih google

</button>
</div>
<br></br>
<div className="d-flex justify-content-around ffff">
<img id='img2' className='icon2' src={FacebookIcon} alt="" />

<button id='btn2' className='btnfacebook' >Continue wih Facebook</button>
</div>
      
   
      
        <div className='container d-flex justify-content-center '>

          <div className='row p-3'>
        <label className='col-12 col-sm-4'> Email</label>
        <input name="userEmail" value={user.userEmail} onChange={(event) => {
          setLoginEmail(event.target.value);AddingEmail(event)
          }} type="emal" className='col-12  col-sm-8 ' size={85} placeholder="Email" />
          </div>
          </div>
          <div className='container d-flex justify-content-center '>
          <small className="text-danger">{error.userEmailError}</small>
          </div>
        <div className='container d-flex justify-content-center '>

          <div className='row p-3'>
        <label className='col-12 col-sm-4'> Password</label>
        <input  value={user.userPassword} name="userPassword"
   onChange={(event) => {
            setLoginPassword(event.target.value);AddingEmail(event)
          }} type="password" className='col-12  col-sm-8 ' size={81} placeholder="Password" />
          </div>

          </div>
          <div className='container d-flex justify-content-center '>
          <small className="text-danger">{error.userPasswordError}</small>
          </div>


<div id='check2' className='container d-flex justify-content-start '>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
  Keep Me logged in
  </label>
</div>
</div>

<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<button  onClick={login} id='createB' className='btn-xl'>Login</button>
</div>
</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<button  onClick={logout} id='createB' className='btn-xl'>LogOut</button>
</div>
</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<p> Don't have an account? <Link to={"/Rigester"}><span id='sp2'>Create an account</span></Link></p>

</div>
</div>
       
<h4> User Logged In: </h4>
      {userr?.email}
          </>
          

        
    );
}

export default Login;

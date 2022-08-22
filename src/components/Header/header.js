import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'
import FacebookIcon from './../Login/icons8-facebook (1).svg'
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./../../firebase-config";



const Header = () => {
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
      } catch (error) {
        console.log(error.message);
      }
    };
    
    const logout = async () => {
      await signOut(auth);
    };
  
    return (

        <nav className="navbar navbar-expand-lg text-light " style={{ backgroundColor: "#ff5a00", color: "white" }}>
            <div className="container row justify-content-between">

                <Link to="/" className="col-2 navbar-brand text-white display-2" ><h1>talabat</h1></Link>

                <button className="col-1 navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color:"white" ,backgroundColor:"white"}}></span>
                </button>
                <div className="col-8 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        <li className="nav-item">
                            <Link to="" className="nav-link  text-white " aria-current="page" >Offers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/AllRestrants'>All Restaurents</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" >العربية</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        {/* <Link to="/Login"> */}
                            {/* <button className="btn btn-outline-light hovering" type="submit"  data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button> */}
                        {/* </Link> */}
                        <button type="button" className="btn btn-outline-light hovering" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Login
</button>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <div className='row m-y-lg one p-3'>
            <h1 id='h1' className='text-center mt-8 mb-8 f-28 f-500'> Login</h1>
        </div>
        <div id='main' className="d-flex justify-content-center">
{/* <img id='img1' className='icon' src={GoogleIcon} alt="" /> */}
{/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}
<i id='googleIcons' class="fa-brands fa-google"></i>
<button id='btnn1' className='btngoogle' >
    Continue wih google

</button>
</div>
<div className="d-flex justify-content-around ffff">
<img id='imgg2' className='icon2' src={FacebookIcon} alt="" />

<button id='btnn2' className='btnfacebook' >Continue wih Facebook</button>
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
<p> Don't have an account? <Link to={"/Rigester"}><span id='sp2' data-bs-dismiss="modal">Create an account</span></Link></p>

</div>
</div>

<h4> User Logged In: </h4>
{userr?.email}
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div> */}
    </div>
  </div>
</div>
                    </form>
                    
                </div>
            </div>
        </nav>
    );
}

export default Header;

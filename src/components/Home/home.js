import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'
 
const Home = () => {
    return (
        <div>

            <div className="row " style={{ backgroundColor: "#ffeee5", minHeight: "15rem" }} >
                <div className='col-md-3  d-md-block  d-sm-none '>
                     <img style={{ width: "12rem" }} src='https://www.talabat.com/images/Talabat/marshmallow-banner-img-1.png' alt="" /></div>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='mb-5'>Order food online in Egypt</h1>
                    <div className='row '>
                        <input className='col-8 px-3 py-1 ' size={65} placeholder='Search for area , street name ,landmark...' />
                        {/* <i class="fa-solid fa-location-dot"></i>  <i class="fa-solid fa-location-crosshairs"></i> */}
                        <Link to="/searchToLocation" className="col-3 m-1">
                             <button className=" btn Orange OrangeBtn"> Let's go</button>

                        </Link>

                    </div>
                </div>
                <div className='col-md-3  d-md-block  d-sm-none '><img style={{ width: "22rem" }} src='https://www.talabat.com/images/Talabat/marshamallow-banner-img-2.png' />
                </div>
            </div>

            <div className=' d-md-none  d-sm-block m-3 p-3 rounded' style={{ backgroundColor: "#a8c0f3" }}>
                <div className="row ">
                    <div className='col-1 m-2'><img style={{ width: "3rem" }} src='https://www.talabat.com/images/Talabat/login-info-icon.png' /></div>
                    <div className='col-9'>
                        <div>Enjoy a personalized ordering experience</div>
                        <a className='Explore' >Login</a>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center m-5'>
                <h2>Your everyday, right away</h2>
                <div className='m-2' style={{ width: "40%", alignItems: "center", margin: "auto" }}>Order food and grocery delivery online from hundreds of restaurants and shops nearby.</div>
                <div className='row m-4'>
                    {/* <a> <img src='./appStore.png' /></a><a> <img src='./googlePlay.png' /></a><a> <img src='appGallery.png' /></a> */}
                    <a style={{ width: "10rem" }}><img src="https://www.talabat.com/images/Talabat/logo_appstore.svg" /></a>
                    <a style={{ width: "10rem" }}><img src="https://www.talabat.com/images/Talabat/logo_playstore.svg" /></a>
                    <a style={{ width: "10rem" }}><img src="https://www.talabat.com/images/talabat/logo_huaweistore1.svg" /></a>
                </div>
            </div>


            {/* cards */}
            <div className='row justify-content-center align-items-center'>
                <div className="card mb-3 m-2 cardoooo" style={{ maxWidth: "27rem" , minHeight:"10rem"}}>
                    <div className="row g-0  ">
                        <div className="col-md-5  ">
                            <img src="https://www.talabat.com/images/Talabat/vertical-restaurants.png"
                                className="img-fluid rounded-start" alt="..."
                                style={{ width: "100%", height: "100%", backgroundColor: "#ff493d" }} />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h5 className="card-title">Restaurant</h5>
                                <p className="card-text">Find deals, free delivery, and more from our restaurant partners.</p>
                                <a className="Explore">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 m-2 cardoooo" style={{ maxWidth: "27rem" , minHeight:"10rem"}}>
                    <div className="row g-0 ">
                        <div className="col-md-4">
                            <img src="https://www.talabat.com/images/Talabat/vertical-grocery.png"
                                className="img-fluid rounded-start" alt="..."
                                style={{ width: "100%", height: "100%", backgroundColor: "#f4aa33" }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Grocery</h5>
                                <p className="card-text">Don't stand in line - order online! Choose from top stores delivering groceries to you.</p>
                                <a className="Explore">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* =============================================== */}
            <div className='d-flex flex-column justify-content-center align-items-center m-5'>
                <h2>Join us</h2>
                <div className='m-2' >Be a part of the talabat story.</div>
            </div>

            {/* cards */}
            <div className='row justify-content-center align-items-center'>
            <div className="card mb-3 m-2 cardoooo" style={{ maxWidth: "27rem" , minHeight:"10rem"}}>
                {/* <div className="col-md-5 col-10 card mb-3 m-2 cardoooo" style={{ maxWidth: "27rem" , minHeight:"10rem"}}> */}
                    <div className="row g-0  ">
                        <div className="col-md-5  ">
                            <img src="https://www.talabat.com/images/talabat/become-a-partner.png"
                                className="img-fluid rounded-start" alt="..."
                                style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h5 className="card-title">Become a partner</h5>
                                <p className="card-text">Reach more customers and achieve growth with us</p>
                                <button className='btn OrangeBtn Orange'> Find out more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 m-2 cardoooo m-0" style={{ maxWidth: "27rem" , minHeight:"10rem"}}>
                {/* <div className="col-md-5 col-10 card mb-3 m-2 cardoooo" style={{ maxWidth: "27rem" , minHeight:"10rem"}}> */}

                    <div className="row g-0 m-0">
                        <div className="col-md-4 ">
                            <img  src="https://www.talabat.com/images/talabat/career-with-us.png"
                                className=" img-fluid rounded-start" alt="..."
                                style={{ width: "100%", height: "100%"}} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Build your career</h5>
                                <p className="card-text">Join the dynamic team that makes it all happen.</p>
                                <button className='btn OrangeBtn Orange'> Find jobs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================================================ */}

            <div className='row justify-content-center align-items-center m-4'>
                <div className='col-6 '> 
                    <h1 className='my-3'>Discover the new talabat app</h1>
                    <div>Get what you need, when you need it.</div>
                    <div className='row my-4'>
                        <a style={{ width: "12rem" }}><img src="https://www.talabat.com/images/Talabat/logo_appstore.svg" /></a>
                        <a style={{ width: "12rem" }}><img src="https://www.talabat.com/images/Talabat/logo_playstore.svg" /></a>
                        <a style={{ width: "12rem" }}><img src="https://www.talabat.com/images/talabat/logo_huaweistore1.svg" /></a>
                    </div>

                </div>
                <div className='col-4 '><img style={{width:"20rem"}} src='https://www.talabat.com/images/Talabat/app-view-en.png'/></div>

                
            </div>


        </div>

        
    );
}

export default Home;

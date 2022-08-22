// import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import  './allresturant.css'


const AllRestaurant = () => {
    return (
        <>
        <div className="d-flex justify-content-center  ">
            
        <div className="border mx-5 w-75 bordershadow" >
        <div>
            <div className="p-4">
                <p  className="fs-4 bg-light w-100 d-flex justify-content-start p-2">
                    All Restaurants
                </p>
                <div className=" d-flex justify-content-end ">
                <input   type="search" className=" w-25 mt-3 search  " placeholder='search Restaurants' />
                </div>

<div  >
                <div className="d-flex mt-3  flex-wrap ">
<Link to='./BasicDeta'>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/2.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">Elhenawy</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                </Link>
                <div className="card d-flex justify-content-center align-items-center mx-2" style={{width:"11.5rem" }} >
                    <img src={require("../assests/3.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">TBS</p>
                    <p className="mt-1 p-0">Desserts</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/4.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">shelter</p>
                    <p className="mt-1 p-0">Sandawiches</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2 " style={{width:"11.5rem" }} >
                    <img src={require("../assests/5.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">Dr7awawshy</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/6.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">kofta</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                </div>

                <div className="d-flex mt-3  flex-wrap">
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/7.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">Fruits</p>
                    <p className="mt-1 p-0">Healthy</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2" style={{width:"11.5rem" }} >
                    <img src={require("../assests/8.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">tmw</p>
                    <p className="mt-1 p-0">Desserts</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/9.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">Hadrmaowt</p>
                    <p className="mt-1 p-0">Restaurant</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2 " style={{width:"11.5rem" }} >
                    <img src={require("../assests/10.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">Burger</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/11.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">sharqawy</p>
                    <p className="mt-1 p-0">Restaurant</p>
                </div>
                </div>
                </div>

                <div className="d-flex mt-3 flex-wrap">
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/lo_636894221910572366.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">kerry</p>
                    <p className="mt-1 p-0">kfc</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2" style={{width:"11.5rem" }} >
                    <img src={require("../assests/12.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">pie</p>
                    <p className="mt-1 p-0">Desserts</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/13.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">habits</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2 " style={{width:"11.5rem" }} >
                    <img src={require("../assests/15.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">La Dolce</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/14.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">abu salma</p>
                    <p className="mt-1 p-0">kfc</p>
                </div>
                </div>
                </div>

                <div className="d-flex mt-3 flex-wrap">
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/16.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">hekaya</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2" style={{width:"11.5rem" }} >
                    <img src={require("../assests/18.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">mo'men</p>
                    <p className="mt-1 p-0">koshary</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/17.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">bassem</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2 " style={{width:"11.5rem" }} >
                    <img src={require("../assests/19.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">DALEX</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/20.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">pizza</p>
                    <p className="mt-1 p-0">pizza</p>
                </div>
                </div>
                </div>

                <div className="d-flex mt-3 flex-wrap">
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/21.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">MADNESS</p>
                    <p className="mt-1 p-0">Sandawiches</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2" style={{width:"11.5rem" }} >
                    <img src={require("../assests/22.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">khodarty</p>
                    <p className="mt-1 p-0">Fruits</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/23.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">emporio</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2 " style={{width:"11.5rem" }} >
                    <img src={require("../assests/24.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">fahmy</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/25.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">Bondok</p>
                    <p className="mt-1 p-0">Desserts</p>
                </div>
                </div>
                </div>

                <div className="d-flex mt-3 flex-wrap ">
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/26.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">Fruits</p>
                    <p className="mt-1 p-0">Fruits</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2" style={{width:"11.5rem" }} >
                    <img src={require("../assests/27.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">DOGZONE</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/28.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">HeartAttack</p>
                    <p className="mt-1 p-0">Fast Food</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center mx-2 " style={{width:"11.5rem" }} >
                    <img src={require("../assests/29.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">cherry</p>
                    <p className="mt-1 p-0">Desserts</p>
                </div>
                </div>
                <div className="card d-flex justify-content-center align-items-center " style={{width:"11.5rem" }} >
                    <img src={require("../assests/30.webp")}   className="m-3 h-50 w-50 "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body p-0">
                    <p className="m-0 p-0">DonerMisr</p>
                    <p className="mt-1 p-0">Desserts</p>
                </div>
                </div>
                </div>
</div>

            <div className="d-flex justify-content-center  align-items-center">    
            <div className= " mt-5 justify-content-center  align-items-center ">
            <nav className= "d-flex justify-content-center   ">
                <div className="bg-light me-2">
                {/* <i class="bi bi-arrow-left"></i> */}
                <BsArrowLeft className="fs-2 ms-2 icons bg-light"/>
                </div>
                    <div>
                    <ul className="pagination ">
                    <li className="page-item active bg-light">
                    <span className="page-link text-light pagi "style={{border:"orange"}}>1</span>
                    </li>
                    <li className="page-item "style={{color:"orange"}} ><a class="page-link  icons text-dark" href="#">2</a></li>
                    <li className="page-item icons"><a className="page-link icons text-dark px-3" >3</a></li>
                    <li className="page-item"><a className="page-link icons text-dark px-3">4</a></li>
                    <li className="page-item"><a className="page-link icons text-dark px-3" >5</a></li>
                    <li className="page-item"><a className="page-link icons text-dark px-3" >6</a></li>
                    <li className ="page-item"><a className="page-link icons text-dark px-3" >...</a></li>
                    <li className ="page-item bg-light icons">
                        <a className ="page-link bg-light icons text-dark" href="#">163</a>
                    </li>
                    </ul>
                    </div>
                    <div>
                    {/* <i class="bi bi-arrow-right"></i> */}
                    <BsArrowRight className="fs-2 ms-2 icons bg-light" />
                    </div>
                </nav>
                </div>
                </div>
                





















                {/* <div className="row mt-3">
                <div className="card " style={{width:"12rem",height:"13rem"}} >
                    <img src={require("../assests/cookDoor.jpg")} className="card-img-top "  alt="..."/>
                    <hr className="w-100"/>
                    <div class="card-body ">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                <div className="card mx-2"style={{width:"12rem"}} >
                    <img src={require("../assests/one.jpg")} className="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                <div className="card "style={{width:"12rem"}} >
                    <img src={require("../assests/two.jpg")} className="card-img-top " alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                <div className="card mx-2"style={{width:"12rem"}} >
                    <img src={require("../assests/cookDoor.jpg")} className="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                <div className="card " style={{width:"12rem"}}>
                    <img src={require("../assests/cookDoor.jpg")} className="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                </div>
                </div>
                </div> */}

                





                







                




            </div>
        </div>
        </div>
        </div>
            
        </>
    );
}

export default AllRestaurant;

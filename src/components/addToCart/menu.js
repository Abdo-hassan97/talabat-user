import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import React, { Component } from "react";  
import Swal from "sweetalert2";  
import withReactContent from "sweetalert2-react-content";

import {
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./../../firebase-config";
const MySwal = withReactContent(Swal);
export default function Menu() {
  const [userr, setUserr] = useState({});
function handleLogin (){
  onAuthStateChanged(auth, (currentUser) => {
    setUserr(currentUser);
    if (currentUser==null){
      MySwal.fire({
        title: <p>you must login first or registr</p>,
        footer: "Copyright 2022",
        onOpen: () => {

          setTimeout(() => MySwal.clickConfirm(), 2500);

        }
      }).then(() => {
        return window.location.replace("http://localhost:3000/Login");
      });
      
    }else{
     console.log("ok done")
    }
  });
}
    
    return (
        <>
<div className='row'>
<div className='col-md-4'>


<Card className=' d-flex align-items-center py-3'> 
<Card.Text  className='fs-5 fw-bold'>Categories </Card.Text>      
<Card.Text >Most Selling </Card.Text>      
<Card.Text >Salads </Card.Text>      
<Card.Text >Sandwiches </Card.Text>      
<Card.Text >Grills </Card.Text>      
<Card.Text >Side Items </Card.Text>      
<Card.Text >Desserts </Card.Text>      

    </Card>


</div>
<div className='col-md-8'>

<Form className="d-flex  my-1 ">
              <Form.Control
              className='searchStyle p-2'
                type="search"
                placeholder="Search Restaurants"
                aria-label="Search"
              />
            </Form>
            <div className="card CardRest " style={{width: "100%"}}>


                
<div className="row g-0  ">
  <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/4.PNG')} alt="" style={{width: "100%"}} className="imgBorder p-2"/>
  </div>


  <div className="col-md-7" >
    <div className="card-body">
      <p className="card-text text lh-1">Fried chicken
      <p className="card-text text-muted lh-1">  3 Pieces of shish tawook and 3 pieces of kofta, served with rice</p>
      </p>
    
    </div>
  </div>

  <div className="col-md-2">
      <p className="card-text text-muted  ">EGP 85.00
      <p><i className="fa-solid fa-face-smile " color='#cadbdb' ></i> Good</p>
      <i class="fa-solid fa-circle-plus ms-" style={{color: '#00A346'}} size="md"></i>
      </p>

</div>

</div>
</div>


<div className="card CardRest " style={{width: "100%"}}>


                
<div className="row g-0  " onClick={handleLogin}>
  <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/4.PNG')} alt="" style={{width: "100%"}} className="imgBorder p-2"/>
  </div>


  <div className="col-md-7" >
    <div className="card-body">
      <p className="card-text text lh-1">Fried chicken
      <p className="card-text text-muted lh-1">  3 Pieces of shish tawook and 3 pieces of kofta, served with rice</p>
      </p>
    
    </div>
  </div>

  <div className="col-md-2">
      <p className="card-text text-muted  ">EGP 85.00
      <p><i className="fa-solid fa-face-smile " color='#cadbdb' ></i> Good</p>
      <i class="fa-solid fa-circle-plus ms-" style={{color: '#00A346'}} size="md"></i>
      </p>

</div>

</div>
</div>


<div className="card CardRest " style={{width: "100%"}}>


                
<div className="row g-0  ">
  <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/4.PNG')} alt="" style={{width: "100%"}} className="imgBorder p-2"/>
  </div>


  <div className="col-md-7">
    <div className="card-body">
      <p className="card-text text lh-1">Fried chicken
      <p className="card-text text-muted lh-1">  3 Pieces of shish tawook and 3 pieces of kofta, served with rice</p>
      </p>
    
    </div>
  </div>

  <div className="col-md-2">
      <p className="card-text text-muted  ">EGP 85.00
      <p><i className="fa-solid fa-face-smile " color='#cadbdb' ></i> Good</p>
      <i class="fa-solid fa-circle-plus ms-" style={{color: '#00A346'}} size="md"></i>
      </p>

</div>

</div>
</div>
</div>
</div>










        
        </>
    
    )

}
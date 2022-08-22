import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsExclamationCircleFill } from "react-icons/bs";
import { useState } from 'react';
import './addToCard.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Info from './info';
import Menu from './menu';
import Reviews from './reviews';
import Cardd from './cart';



function AddToCard() {

const [key, setKey] = useState('Menu');


    return (
        <>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-2"></div>

  <div className="col-md-8 ridge">

                <Navbar bg="white" variant="light">
        <Container >
        <Nav  className="me-5">
            <Nav.Link href="#home" className="my-2" style={{color: 'black'}}  >Home</Nav.Link> 
            <p style={{color: 'orange', fontSize:'bold'}} className=" my-3 mx-1 "> &gt; </p>
            <Nav.Link href="#home" className="my-2  mx-1" style={{color: 'black'}}  >Location here</Nav.Link> 
            <p style={{color: 'orange', fontSize:'bold'}} className=" my-3 mx-1 "> &gt; </p>
            <p className="mx-2 my-3 text-muted"> Restrant Name here </p>
            </Nav>
            </Container>
        </Navbar>
            <div className="ms-3 mt">


<div className="card  cardBorder " >
  <div className="row">
    <div className="col-md-2 my-md-3">
<img src={require('./Capture.PNG')} alt="" style={{width: "100%"}} className="imgBorder  "/>
    </div>
    <div className="col-md-6 ">
      <div className="card-body">
        <h5 className="card-title">Restaurant Name</h5>
        <p className="card-text text-muted lineHeight-md">Cairo-Egypt</p>
        <p className="card-text text-muted lineHeight-md ">Fried chicken, Sandwiches, Burgers</p>
        <p className="card-text text-muted  lineHeight-md">Min. order: EGP 15.00</p>
      </div>
    </div>
<div className="col-md-4 my-4 d-flex flex-column  align-items-end">
<p  style={{color: 'green'}}>OPEN</p>
<p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
<div className=" d-flex d-row">
<img src={require('./123.PNG')} alt="/" />

</div>

</div>
  </div>
</div>

<div className="p-md-1 pt-md-2 " style={{background: '#FEF9F5', fontSize: '95%'}}>
  
  
<p className='mb-md-2 d-flex flex-none  flex-md-block'>  
<BsExclamationCircleFill className='mx-3 mb-1 ' size={19}/>
  Delivered by us, with live tracking
</p>
  
  
  </div>
            </div>




<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      
      className="  d-flex justify-content-evenly   fs-2 d-flex flex-nowrap"
    >

<Tab eventKey="Menu" title="menu " className='dd'>
<div className="row">
        <div className="col-lg-8 col-12 my-md-3 ">    
          <Menu></Menu>       
        </div>
        <div className="col-md-4 col-12 my-md-3">    
          <Cardd></Cardd>
        </div>
        </div>    
        </Tab>
      <Tab eventKey="Reviews" title="Reviews" className='dd'>
      <div className="row">
        <div className="col-md-8 col-12 my-md-3">    
        <Reviews></Reviews>
        </div>
        <div className="col-md-4 col-12 my-md-3">    
        <Cardd></Cardd>

        </div>
        </div>
</Tab>
      <Tab eventKey="Info" title="Info" className='dd'>
        <div className="row">
        <div className="col-md-8 col-12 my-md-3">    
        <Info></Info>       
        </div>
        <div className="col-md-4 col-12  my-md-3">    
        <Cardd></Cardd>
        </div>
        </div>
      </Tab>

    </Tabs>








                </div>
  <div className="col-md-2"></div>

            </div>
        </div>

        

        </>
    );
}

export default AddToCard;
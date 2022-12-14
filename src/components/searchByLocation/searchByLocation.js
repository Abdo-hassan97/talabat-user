import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './searchByLocation.css';
import { Link } from 'react-router-dom'

function SearchByLocation() {
    return (
        <>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-2"></div>







                <div className="col-md-8 ridge">

                <Navbar bg="white" variant="light">
        <Container >
        <Nav  className="me-5">
            <Nav.Link href="#home" className="my-2 fw-semibold  " style={{color: 'black'}} >Home</Nav.Link> 
            <p style={{color: 'orange', fontSize:'bold'}} className=" my-3 "> &gt; </p>
            <p className="mx-2 my-3 text-muted"> Location here </p>
            </Nav>
            </Container>
        </Navbar>
            <div className="ms-3">
            <h3 className="">Restaurants in Location here for delivery</h3>
            </div>



<div className="row my-3">

<div className="col-md-3 ">
<Form className="d-flex  my-3 ">
              <Form.Control
              className='searchStyle p-2'
                type="search"
                placeholder="Search Restaurants"
                aria-label="Search"
              />
            </Form>

            <Card className="mb-2">
      <Card.Body className="card-body" >
        <Card.Title >Filter By</Card.Title>
        <Card.Text className="mb-2" style={{color:"grey"}}>
        <Form>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Super Saver
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Flash Sale
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    The Big League
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Free Delivery
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Coffee Joy
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
   Desserts
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Your <i class="fa-solid fa-heart" style={{color:"#FF6F00"}}></i> Brands
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked" >
Newly Add  </label>
</div>
    </Form>
    
            </Card.Text>
    
      </Card.Body>





      
    <hr></hr>
      <Card.Body className="card-body ">
        <Card.Title>Cuisines</Card.Title>
        <Card.Text className="" style={{color:"grey"}}>
        <Form>
     <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Acai
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Afghani
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    African
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
   American
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Arabic
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Arabic sweets
  </label>
</div>
    </Form>
    
            </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className="col-md-9">

  <div className="row">
  <div className="col-md-12">

  <hr className="mb-0 "></hr>


<div className=" d-flex flex-row align-items-center text-muted flex-wrap " >

<p className="mt-3 mx-2 " style={{color: 'black'}} >Sort By:</p>
{/* <button type="button" className="btn btn-white filterBTN  m-1 " >Recommended</button>
<button type="button" className="btn btn-white filterBTN  m-1 " >Ratings</button>
<button type="button" className="btn btn-white filterBTN  m-1 " >Newest</button>
<button type="button" className="btn btn-white  filterBTN m-1 " >A to Z</button>
<button type="button" className="btn btn-white  filterBTN m-2 " >Min.Order Amount</button>
<button type="button" className="btn btn-white  filterBTN m-2 " >Fastest Delivery</button> */}
            <Nav.Link href="#home" className="m-3 "  >Recommended</Nav.Link> 
            <Nav.Link href="#home" className="m-3   ">Ratings</Nav.Link> 
            <Nav.Link href="#home" className="m-3  "  >A to Z</Nav.Link> 
            <Nav.Link href="#home" className="m-3 "  >Min.Order Amount</Nav.Link> 
            <Nav.Link href="#home" className="m-3   "  >Fastest Delivery</Nav.Link> 
</div>

<hr className="mt-0" ></hr>

  </div>
 
 
  <div className="col-md-12 m-0">


{/* /////////////////////////////////// */}
<Link to="/AddToCard"className="stylLink">
<div className="card  CardRest" style={{width: "100%"}}>
  <div className="row g-0  ">
    <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/Capture.PNG')} alt="" style={{width: "70%"}} className="imgBorder p-2"/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Restaurant Name</h5>
        <p className="card-text text-muted lh-1">Fried chicken, Sandwiches, Burgers</p>
        <p className="card-text text-muted lh-1"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
        <p className="card-text text-muted lh-1">Withn 30 min&nbsp; &nbsp; Delivery: 4.99  &nbsp;&nbsp;Min:15.00</p>

        <p className="card-text text-muted"><small className="text-muted">
          
        <i class="fa-solid fa-tag" style={{color: '#F90067'}}></i> <span style={{color: '#F90067'}}>Discount</span>
        &nbsp; 
        <i class="fa-duotone fa-circle-small"></i>
        &nbsp;
Live Tracking
&nbsp;
        &nbsp;
        Cash Only
          </small></p>
      </div>
    </div>
  </div>
</div>
</Link>
<div className="card  CardRest" style={{width: "100%"}}>
  <div className="row g-0  ">
    <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/2.PNG')} alt="" style={{width: "70%"}} className="imgBorder p-2"/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Restaurant Name</h5>
        <p className="card-text text-muted lh-1">Fried chicken, Sandwiches, Burgers</p>
        <p className="card-text text-muted lh-1"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
        <p className="card-text text-muted lh-1">Withn 30 min&nbsp; &nbsp; Delivery: 4.99  &nbsp;&nbsp;Min:15.00</p>

        <p className="card-text text-muted"><small className="text-muted">
          
        <i class="fa-solid fa-tag" style={{color: '#F90067'}}></i> <span style={{color: '#F90067'}}>Discount</span>
        &nbsp; 
        <i class="fa-duotone fa-circle-small"></i>
        &nbsp;
Live Tracking
&nbsp;
        &nbsp;
        Cash Only
          </small></p>
      </div>
    </div>
  </div>
</div>

<div className="card CardRest " style={{width: "100%"}}>
  <div className="row g-0  ">
    <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/3.PNG')} alt="" style={{width: "70%"}} className="imgBorder p-2"/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Restaurant Name</h5>
        <p className="card-text text-muted lh-1">Fried chicken, Sandwiches, Burgers</p>
        <p className="card-text text-muted lh-1"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
        <p className="card-text text-muted lh-1">Withn 30 min&nbsp; &nbsp; Delivery: 4.99  &nbsp;&nbsp;Min:15.00</p>

        <p className="card-text text-muted"><small className="text-muted">
          
        <i class="fa-solid fa-tag" style={{color: '#F90067'}}></i> <span style={{color: '#F90067'}}>Discount</span>
        &nbsp; 
        <i class="fa-duotone fa-circle-small"></i>
        &nbsp;
Live Tracking
&nbsp;
        &nbsp;
        Cash Only
          </small></p>
      </div>
    </div>
  </div>
</div>


<div className="card CardRest " style={{width: "100%"}}>
  <div className="row g-0  ">
    <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/4.PNG')} alt="" style={{width: "70%"}} className="imgBorder p-2"/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Restaurant Name</h5>
        <p className="card-text text-muted lh-1">Fried chicken, Sandwiches, Burgers</p>
        <p className="card-text text-muted lh-1"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
        <p className="card-text text-muted lh-1">Withn 30 min&nbsp; &nbsp; Delivery: 4.99  &nbsp;&nbsp;Min:15.00</p>

        <p className="card-text text-muted"><small className="text-muted">
          
        <i class="fa-solid fa-tag" style={{color: '#F90067'}}></i> <span style={{color: '#F90067'}}>Discount</span>
        &nbsp; 
        <i class="fa-duotone fa-circle-small"></i>
        &nbsp;
Live Tracking
&nbsp;
        &nbsp;
        Cash Only
          </small></p>
      </div>
    </div>
  </div>
</div>

<div className="card CardRest " style={{width: "100%"}}>
  <div className="row g-0  ">
    <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/5.PNG')} alt="" style={{width: "70%"}} className="imgBorder p-2"/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Restaurant Name</h5>
        <p className="card-text text-muted lh-1">Fried chicken, Sandwiches, Burgers</p>
        <p className="card-text text-muted lh-1"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
        <p className="card-text text-muted lh-1">Withn 30 min&nbsp; &nbsp; Delivery: 4.99  &nbsp;&nbsp;Min:15.00</p>

        <p className="card-text text-muted"><small className="text-muted">
          
        <i class="fa-solid fa-tag" style={{color: '#F90067'}}></i> <span style={{color: '#F90067'}}>Discount</span>
        &nbsp; 
        <i class="fa-duotone fa-circle-small"></i>
        &nbsp;
Live Tracking
&nbsp;
        &nbsp;
        Cash Only
          </small></p>
      </div>
    </div>
  </div>
</div>

<div className="card CardRest " style={{width: "100%"}}>
  <div className="row g-0  ">
    <div className="col-md-2 my-2  p-2  ">
<img src={require('./../img/Capture.PNG')} alt="" style={{width: "70%"}} className="imgBorder p-2"/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Restaurant Name</h5>
        <p className="card-text text-muted lh-1">Fried chicken, Sandwiches, Burgers</p>
        <p className="card-text text-muted lh-1"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
        <p className="card-text text-muted lh-1">Withn 30 min&nbsp; &nbsp; Delivery: 4.99  &nbsp;&nbsp;Min:15.00</p>

        <p className="card-text text-muted"><small className="text-muted">
          
        <i class="fa-solid fa-tag" style={{color: '#F90067'}}></i> <span style={{color: '#F90067'}}>Discount</span>
        &nbsp; 
        <i class="fa-duotone fa-circle-small"></i>
        &nbsp;
Live Tracking
&nbsp;
        &nbsp;
        Cash Only
          </small></p>
      </div>
    </div>
  </div>
</div>

{/* //////////////////////////////////// */}
<div className="m-5 d-flex justify-content-center">
<nav aria-label="Page navigation  ">
  <ul class="pagination ">
    <li class="page-item ">
      <a className="page-link" href="#kk" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link Active" href="#kk" >1</a></li>
    <li class="page-item"><a class="page-link" href="#l">2</a></li>
    <li class="page-item"><a class="page-link" href="#k">3</a></li>
    <li class="page-item"><a class="page-link" href="#k">4</a></li>
    <li class="page-item"><a class="page-link" href="#k">5</a></li>

    <li class="page-item">
      <a class="page-link" href="#l" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>

<div >
  <p className='fw-normal lh-sm'>Restaurants & Cafeterias in Helwan, Egypt.</p>

<p className='fw-normal lh-sm'> Feeling hungry today? Order all you need from your nearest restaurant or cafeteria in .</p>

<p className='fw-normal lh-sm'>Wide range of different cuisines including arabic, indian, fast food, asian, pizza, and many more.</p>

<p className='fw-normal lh-sm'>Enjoy a simple, fast, and easy online food delivery in Helwan with Talabat Egypt.</p>
</div>

  </div>

  </div>

</div>

</div>


                </div>
  <div className="col-md-2"></div>

            </div>
        </div>

        

        </>
    );
}

export default SearchByLocation;
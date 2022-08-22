import './cart.css';
import Card from 'react-bootstrap/Card';

export default function Reviews() {

    
    return (
    <>


<h5> (61) Reviews</h5>

<div className="row mx-1">


    <div className="col-md-3 styleborder text-muted">
    <p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
Order Packaging
    </div>
    <div className="col-md-3 styleborder text-muted">
    <p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
Delivery time
    </div>
    <div className="col-md-3 styleborder text-muted">
    <p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p>
Value for money
    </div>
    <div className="col-md-3 text-muted">
    <p className="card-text text-muted lh-1 mt-3"><i className="fa-solid fa-face-smile"color='#cadbdb'></i> &nbsp; Very Good</p>
Quality of food

    </div>

</div>


    <Card className='mt-5 cardbginReviews'>
      <Card.Body>
        <div className='d-flex'>
        <p className="card-text text-muted lh-1 mt-1"><i className="fa-solid fa-face-smile"color='#cadbdb'></i> &nbsp;Amazing &nbsp;&nbsp;Abdulaziz N***
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          27 July 2022

</p>
        </div>

<p>thanks wow</p>          
   
      </Card.Body>
    </Card>

    <Card className='mt-2 cardbginReviews'>
      <Card.Body>
<p className="card-text text-muted lh-1 mt-1"><i className="fa-solid fa-face-smile"color='#cadbdb'></i> &nbsp; Amazing &nbsp;&nbsp;ALi N***
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          27 July 2022

</p>
<p>v.good thanks</p>


      </Card.Body>
    </Card>

    <Card className='mt-2 cardbginReviews'>
      <Card.Body>
      <p className="card-text text-muted lh-1 mt-1"><i className="fa-solid fa-face-smile"color='#cadbdb'></i> 
      &nbsp;Amazing &nbsp;&nbsp;Tia A***
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          27 July 2022

      </p>
<p>good but try to be v.good the taste not wow</p>
      </Card.Body>
    </Card>


        </>
    
    )

}
import Card from 'react-bootstrap/Card';
import './cart.css';

export default function Cardd() {
  
    
    return (
        <>




<Card border="grey" style={{ width: '18rem' }} className="card-body111">
        <Card.Header className="card-header1">
        <Card.Title style={{ color: 'white'  }} >Your Cart</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text >
<img   src={require('./add.PNG')} alt="" className='me-2 '/> 
  
          </Card.Text>
        </Card.Body>
      </Card>






        
        </>
    
    )

}
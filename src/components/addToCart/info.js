export default function Info() {

    
        return (
            <>
<table className="table ">

  <thead className=" ">
    <tr className=" fs-3 my-3 ">
Restaurant Name
    </tr>
  </thead>

  <tbody className="fs-6 mt-2 py-3">
<tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td> Working Hours </td>
      <td> 12:00PM - 2:30AM </td>
    </tr>
    <tr>
      <td>  Delivery Time</td>
      <td> 34 mins </td>
    </tr>
    <tr>
      <td> Delivery fee </td>
      <td>EGP 4.99  </td>
    </tr>
    <tr>
      <td> Pre-Order </td>
      <td> Yes </td>
    </tr>
    <tr>
      <td> Payment </td>
      <td> <img src={require('./123.PNG')} alt="/" />
</td>
    </tr>
    <tr>
      <td>  Rating</td>
      <td> <p className="card-text text-muted lh-1 mt-3">
        <i className="fa-solid fa-face-smile" color='#cadbdb'></i> &nbsp; Very Good</p></td>
    </tr>
    <tr>
      <td>Cuisines  </td>
      <td> Fried chicken, Sandwiches, Burgers </td>
    </tr>

  </tbody>
</table>
            
            </>
        )}
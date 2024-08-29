import React from 'react'
import Product from "./Product.json";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Featured() {
  return (
    <>
    <h1 className="text-center">Top Featured Products 2024</h1>
    <h2 className="text-center">New Arrival | Best Sellers| Featured</h2>
   
    <div className='container'>
        <div className='row'>
            {Product.map((item) => {
                return(
                  <div className='col-lg-4'>
                    
                    <Card style={{ width: '23rem', height:'15rem' }}>
                    <Card.Img variant="right"  src={item.image} style={{ width: '100px', height:'150px' }}/>

                     <Card.Body>
                      <Card.Title>{item.tittle}</Card.Title>
                      <Card.Text>
                        {item.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </div>


                );
            })}

        </div>
    </div>
      




    </>
  )
}

export default Featured

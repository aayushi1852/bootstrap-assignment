import React from 'react'
import { Button,Card } from 'react-bootstrap';


const Confectionary = ({img,tittle,description}) => {

 
  return (
      <div>

    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={img} />
         <Card.Body>
         <Card.Title>{tittle}</Card.Title>
          <Card.Text className='text'>
            {description} 
          </Card.Text>
          <Button variant="primary">Order Now</Button>
        </Card.Body>
     </Card>
</div>


  )
}

export default Confectionary


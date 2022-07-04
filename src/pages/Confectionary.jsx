import React from 'react'
import { Button,Card } from 'react-bootstrap';
import styles from "./WaitList.module.css"


const Confectionary = ({img,tittle,description,qty,price}) => {

 
  return (
      <div>

    <Card className='card1'style={{ width: '20rem', height: '40rem' }}>
        <Card.Img variant="top" src={img} />
         <Card.Body>
         <Card.Title>{tittle}</Card.Title>
          <Card.Text className='text'>
            {description} 
          </Card.Text>
          <Card.Text className='text2'>
            {qty === 0 ? ' Out of Stock' : <p> Available</p>}
          </Card.Text>

          <Card.Text className='text'> Price: $
            {price}
          </Card.Text>
          {qty === 0 ? <button className ={styles.button}> Pre Order </button> : <Button variant="primary">Order Now</Button>} 
        </Card.Body>
     </Card>
</div>


  )
}

export default Confectionary


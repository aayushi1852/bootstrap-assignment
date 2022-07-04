import React from 'react'
import {Card,Button } from 'react-bootstrap';


import styles from "./WaitList.module.css"


const Food = ({img,tittle,description,qty,price}) => {

return (
    <div>
    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{tittle}</Card.Title>
          <Card.Text className='text'>
            {description} 
          </Card.Text>
          <Card.Text className='text'>
          {/* {qty} Products  */}
            {qty === 0 ? ' Out of Stock' : ' Available'}
          </Card.Text>
          <Card.Text className='text'> Price $
            {price}
          </Card.Text>
          {qty === 0 ? <button className ={styles.button}> Pre Order </button> : <Button variant="primary">Order Now</Button>} 
    </Card.Body>
</Card>
</div>



  )
}

export default Food



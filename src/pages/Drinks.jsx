import React from 'react'

import { Card } from 'react-bootstrap';

import styles from "./WaitList.module.css"


const Food = ({img,tittle,description}) => {
    
return (
  
  
  <div>
    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{tittle}</Card.Title>
              <Card.Text className='text'>
                {description} 
              </Card.Text>
              <button className ={styles.button}> Pre Order </button>
        </Card.Body>
    </Card>
  </div>
    )
}
  
export default Food


import React from 'react'
import { Button,Card } from 'react-bootstrap';


import rice from "../img/rice1.jpeg"
import plantain from "../img/plantain.jpeg"
import yam from "../img/yam.jpeg"
import eba from "../img/eba.jpeg"
import chaat from "../img/chaat.jpeg"
import barfi from "../img/barfi.jpeg"

import styles from "./WaitList.module.css"


const Food = (props) => {
  console.log('jdjdj',props.tittle1)
return (


<div className='cards'>
    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
         <Card.Img variant="top" src={plantain} />
            <Card.Body>
              <Card.Title>{props.tittle0}</Card.Title>
                <Card.Text className='text'>
                {props.description0} 
                </Card.Text>
              <Button variant="primary">Order Now</Button>
            </Card.Body>
     </Card>

     <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
      <Card.Img variant="top" src={rice} />
          <Card.Body>
            <Card.Title>{props.tittle1}</Card.Title>
                <Card.Text className='text'>
                {props.description1} 
                </Card.Text>
              <button className ={styles.button}> Pre Order </button>
          </Card.Body>
    </Card>

  <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
      <Card.Img variant="top" src={yam} />
      <Card.Body>
        <Card.Title>{props.tittle2}</Card.Title>
              <Card.Text className='text'>
              {props.description2} 
              </Card.Text>
        <button className ={styles.button}> Pre Order </button>
      </Card.Body>
  </Card>

  <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
    <Card.Img variant="top" src={barfi} />
      <Card.Body>
        <Card.Title>{props.tittle3}</Card.Title>
            <Card.Text className='text'>
            {props.description3} 
          </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
  </Card>

  <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
      <Card.Img variant="top" src={eba} />
      <Card.Body>
        <Card.Title>{props.tittle4}</Card.Title>
            <Card.Text className='text'>
              {props.description4} 
            </Card.Text>
        <button className ={styles.button}> Pre Order </button>
      </Card.Body>
  </Card>
  <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
      <Card.Img variant="top" src={chaat} />
      <Card.Body>
        <Card.Title>{props.tittle5}</Card.Title>
            <Card.Text className='text'>
              {props.description5} 
            </Card.Text>
        <button className ={styles.button}> Pre Order </button>
      </Card.Body>
  </Card>
</div>
  )
}

export default Food
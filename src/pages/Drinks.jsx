import React from 'react'

import { Button,Card } from 'react-bootstrap';

import apple from "../img/apple.jpeg"
import banana from "../img/banana.jpeg"
import mango from "../img/mango.jpeg"
import wmelon from "../img/w-melon.jpeg"
import papple from "../img/p-apple.jpeg"
import carrott from "../img/carrott.jpeg"

import styles from "./WaitList.module.css"


const Food = (props) => {
    console.log('jdjdj',props.tittle1)
return (
  
  
  <div className='cards'>
      <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
           <Card.Img variant="top" src={carrott} />
              <Card.Body>
                <Card.Title>{props.tittle0}</Card.Title>
                <Card.Text className='text'>
                {props.description0} 
                </Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
       </Card>
  
       <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={papple} />
            <Card.Body>
              <Card.Title>{props.tittle1}</Card.Title>
                  <Card.Text className='text'>
                  {props.description1} 
                  </Card.Text>
                  <Button variant="primary">Order Now</Button>  
            </Card.Body>
      </Card>
  
    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={wmelon} />
        <Card.Body>
          <Card.Title>{props.tittle2}</Card.Title>
                <Card.Text className='text'>
                {props.description2} 
                </Card.Text>
          <button className ={styles.button}> Pre Order </button>
        </Card.Body>
    </Card>
  
    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
      <Card.Img variant="top" src={mango} />
        <Card.Body>
          <Card.Title>{props.tittle3}</Card.Title>
              <Card.Text className='text'>
              {props.description3} 
            </Card.Text>
          <Button variant="primary">Order Now</Button>
        </Card.Body>
    </Card>
  
    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={banana} />
        <Card.Body>
          <Card.Title>{props.tittle4}</Card.Title>
              <Card.Text className='text'>
                {props.description4} 
              </Card.Text>
          <button className ={styles.button}> Pre Order </button>
        </Card.Body>
    </Card>
    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={apple} />
        <Card.Body>
          <Card.Title>{props.tittle5}</Card.Title>
              <Card.Text className='text'>
                {props.description5} 
              </Card.Text>
              <Button variant="primary">Order Now</Button>
        </Card.Body>
    </Card>
  </div>
    )
}
  
export default Food

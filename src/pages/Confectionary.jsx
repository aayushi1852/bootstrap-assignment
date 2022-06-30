import React from 'react'
import { Button,Card } from 'react-bootstrap';

// import bcake from "../../img/b-cake.jpeg"
import bcake from "../img/b-cake.jpeg"
import chcake from "../img/ch-cake.jpeg"
import pie from "../img/pie.jpeg"
import vcake from "../img/van-cake.jpeg"
import dnuts from "../img/d-nuts.jpeg"
import cucake from "../img/cup-cake.jpeg"
import styles from "./WaitList.module.css"



// import styles from "../components/WaitList.module.css"

const Confectionary = (props) => {

 

      console.log('jdjdj',props.tittle1)
  return (

  
    <div className='cards'>
        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={bcake} />
                <Card.Body>
                <Card.Title>{props.tittle0}</Card.Title>
                <Card.Text className='text'>
                {props.description0}
                </Card.Text>
                <Button variant="primary">Order Now</Button>
                </Card.Body>
        </Card>

         <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={chcake} />
                <Card.Body>
                <Card.Title>{props.tittle1}</Card.Title>
                <Card.Text className='text'>
                {props.description1} 
                </Card.Text>
                {/* <Button variant="primary">Order Now</Button> */}
                <button className ={styles.button}> Pre Order </button>
                </Card.Body>
         </Card>

        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={pie} />
            <Card.Body>
            <Card.Title>{props.tittle2}</Card.Title>
            <Card.Text className='text'>
            {props.description2} 
            </Card.Text>
            {/* <Button variant="primary">Order Now</Button> */}
            <button className ={styles.button}> Pre Order </button>
            </Card.Body>
        </Card>

        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={vcake} />
            <Card.Body>
            <Card.Title>{props.tittle3}</Card.Title>
            <Card.Text className='text'>
            {props.description3} 
            </Card.Text>
            <Button variant="primary">Order Now</Button>
            </Card.Body>
        </Card>

        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={dnuts} />
            <Card.Body>
            <Card.Title>{props.tittle4}</Card.Title>
            <Card.Text className='text'>
            {props.description4} 
            </Card.Text>
            {/* <Button variant="primary">Order Now</Button> */}
            <button className ={styles.button}> Pre Order </button>
            </Card.Body>
        </Card>
        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={cucake} />
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

export default Confectionary


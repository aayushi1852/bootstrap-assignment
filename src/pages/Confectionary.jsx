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
  return (
    <div className='cards'>
        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={bcake} />
                <Card.Body>
                <Card.Title>{props.tittle}</Card.Title>
                {/* <Card.Text className='text'>
                A classic Vannila Cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you've never had before.
                </Card.Text> */}

                <Card.Text className='text'>
                {props.description}
                </Card.Text>
                <Button variant="primary">Order Now</Button>
                </Card.Body>
        </Card>

         <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={chcake} />
                <Card.Body>
                <Card.Title>{props.tittle}</Card.Title>
                <Card.Text className='text'>
                {props.description} 
                </Card.Text>
                {/* <Button variant="primary">Order Now</Button> */}
                <button className ={styles.button}> Pre Order </button>
                </Card.Body>
         </Card>

        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={pie} />
            <Card.Body>
            <Card.Title>{props.tittle}</Card.Title>
            <Card.Text className='text'>
            {props.description} 
            </Card.Text>
            {/* <Button variant="primary">Order Now</Button> */}
            <button className ={styles.button}> Pre Order </button>
            </Card.Body>
        </Card>

        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={vcake} />
            <Card.Body>
            <Card.Title>{props.tittle}</Card.Title>
            <Card.Text className='text'>
            {props.description} 
            </Card.Text>
            <Button variant="primary">Order Now</Button>
            </Card.Body>
        </Card>

        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={dnuts} />
            <Card.Body>
            <Card.Title>{props.tittle}</Card.Title>
            <Card.Text className='text'>
            {props.description} 
            </Card.Text>
            {/* <Button variant="primary">Order Now</Button> */}
            <button className ={styles.button}> Pre Order </button>
            </Card.Body>
        </Card>
        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" src={cucake} />
            <Card.Body>
            <Card.Title>{props.tittle}</Card.Title>
            <Card.Text className='text'>
            {props.description} 
            </Card.Text>
            <button className ={styles.button}> Pre Order </button>
            </Card.Body>
        </Card>
</div>
  )
}

export default Confectionary
import React from 'react'
import { Button,Card } from 'react-bootstrap';

// import bcake from "../../img/b-cake.jpeg"
// import bcake from "../img/b-cake.jpeg"
// import chcake from "../img/ch-cake.jpeg"
// import pie from "../img/pie.jpeg"
// import vcake from "../img/van-cake.jpeg"
// import dnuts from "../img/d-nuts.jpeg"
// import cucake from "../img/cup-cake.jpeg"
import styles from "./WaitList.module.css"


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
          {/* <button className ={styles.button}> Pre Order </button> */}
        </Card.Body>
     </Card>
</div>


  )
}

export default Confectionary


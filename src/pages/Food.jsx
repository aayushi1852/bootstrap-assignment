import React from 'react'
import { Button,Card } from 'react-bootstrap';


// import rice from "../img/rice1.jpeg"
// import plantain from "../img/plantain.jpeg"
// import yam from "../img/yam.jpeg"
// import eba from "../img/eba.jpeg"
// import chaat from "../img/chaat.jpeg"
import barfi from "../img/barfi.jpeg"

import styles from "./WaitList.module.css"


const Food = ({img,tittle,description}) => {
  return (
    <div className='cards'>
        
<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
     {/* <Card.Img variant="top" src={img} /> */}

     <Card.Img variant="top" src= {"../img/barfi.jpeg"}/>
     {/* <Card.Img variant="top" src={props.img} /> */}
    <Card.Body>
    <Card.Title>{tittle}</Card.Title>
    <Card.Text className='text'> {description}
    </Card.Text>
    <button className ={styles.button}> Pre Order </button>
   
    </Card.Body>
</Card>
</div>
  )
}

export default Food





// <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
//         <Card.Img variant="top" src={plantain} />
//             <Card.Body>
//             <Card.Title>Banana Chips</Card.Title>
//             <Card.Text className='text'>
//             Banana chips are deep-fried or dried, generally crispy slices of bananas.They can be sweet or savory and covered with sugar, honey, salt, or various spices.
//             </Card.Text>
//             <Button variant="primary">Order Now</Button>
//             </Card.Body>
//     </Card>

//     <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
//     <Card.Img variant="top" src={rice} />
//         <Card.Body>
//         <Card.Title>Jollof Rice</Card.Title>
//         <Card.Text className='text'>
//         Jollof rice is a unifying dish across West Africa.The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot,
//         </Card.Text>
//         {/* <Button variant="primary">Order Now</Button> */}
//         <button className ={styles.button}> Pre Order </button>
//         </Card.Body>
//     </Card>

// <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
//     <Card.Img variant="top" src={yam} />
//     <Card.Body>
//     <Card.Title>Yam And Egg</Card.Title>
//     <Card.Text className='text'>
//     Yam and eggs recipe made with succulent boiled yam and fried eggs garnished with vegetables. Yam is highly nutritious and contains less starch than potatoes.
//     </Card.Text>
//     {/* <Button variant="primary">Order Now</Button> */}
//     <button className ={styles.button}> Pre Order </button>
//     </Card.Body>
// </Card>

// <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
// <Card.Img variant="top" src={barfi} />
//     <Card.Body>
//     <Card.Title>Barfi</Card.Title>
//     <Card.Text className='text'>
//     Barfi is a popular Indian milk based sweet recipe.Milk Barfi or Milk Powder Burfi is a super delicious and one of the best gluten free, no bake dessert.
//     </Card.Text>
//     <Button variant="primary">Order Now</Button>
//     </Card.Body>
// </Card>

// <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
//      <Card.Img variant="top" src={eba} />
//     <Card.Body>
//     <Card.Title>Eba</Card.Title>
//     <Card.Text className='text'>
//     EBA is a staple food mainly eaten in the West Africa, particularly in Nigeria.It is made with fried cassava and hot boiling water to form a smooth stiff dough.
//     </Card.Text>
//     {/* <Button variant="primary">Order Now</Button> */}
//     <button className ={styles.button}> Pre Order </button>
//     </Card.Body>
// </Card>
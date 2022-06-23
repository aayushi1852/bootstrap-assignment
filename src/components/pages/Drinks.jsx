import React from 'react'

import { Button,Card } from 'react-bootstrap';

import apple from "../../img/apple.jpeg"
import banana from "../../img/banana.jpeg"
import mango from "../../img/mango.jpeg"
import wmelon from "../../img/w-melon.jpeg"
import papple from "../../img/p-apple.jpeg"
import carrott from "../../img/carrott.jpeg"

const Drinks = (props) => {

    
    console.log('wwww',props.title)

  return (

    <div className='cards'>
        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={carrott} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className='text'>
            Carrot juice is extracted from whole carrots and extremely nutritious.
            It not only provides potassium and vitamin C but also is very rich in provitamin A. 
            </Card.Text>
            <Button variant="primary">Order Now</Button>
            </Card.Body>
    </Card>

    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
    <Card.Img variant="top" src={papple} />
        <Card.Body>
        <Card.Title>Orange Juice</Card.Title>
        <Card.Text className='text'>
            Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges.
            It is a favorite beverage high in antioxidants.
        </Card.Text>
        <Button variant="primary">Order Now</Button>
        </Card.Body>
    </Card>

<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
    <Card.Img variant="top" src={wmelon} />
    <Card.Body>
    <Card.Title>Watermelomn Juice</Card.Title>
    <Card.Text className='text'>
    Watermelon's high water content, antioxidants, and amino acids may make for a better workout.It is Refreshingly sweet and hydrating.
    </Card.Text>
    <Button variant="primary">Order Now</Button>
    </Card.Body>
</Card>

<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
<Card.Img variant="top" src={mango} />
    <Card.Body>
    <Card.Title>Mango Juice</Card.Title>
    <Card.Text className='text'>
    Mangoes are rich in vitamin C, iron, beta carotene and many other nutrients! Mango helps you fight infections and strengthens your bones.
    </Card.Text>
    <Button variant="primary">Order Now</Button>
    </Card.Body>
</Card>

<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
     <Card.Img variant="top" src={banana} />
    <Card.Body>
    <Card.Title>Banana Juice</Card.Title>
    <Card.Text className='text'>
    Banana juice is a sweet and creamy combination of ripe banana, apple, honey and milk (or water).One of the benefit of banana juice is it increases immunity. 
    </Card.Text>
    <Button variant="primary">Order Now</Button>
    </Card.Body>
</Card>
<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
     <Card.Img variant="top" src={apple} />
    <Card.Body>
    <Card.Title>Apple Juice</Card.Title>
    <Card.Text className='text'>
        Apple juice is a fruit juice made by the maceration and pressing of an apple.When apples are juiced, their hydrating quality is maximized.
    </Card.Text>
    <Button variant="primary">Order Now</Button>
    </Card.Body>
</Card>
</div>
  )
  
}

export default Drinks
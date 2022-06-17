import React from 'react'
import { Button,Card } from 'react-bootstrap';

import bcake from "../../img/b-cake.jpeg"
import chcake from "../../img/ch-cake.jpeg"
import pie from "../../img/pie.jpeg"
import vcake from "../../img/van-cake.jpeg"
import dnuts from "../../img/d-nuts.jpeg"
import cucake from "../../img/cup-cake.jpeg"

const Confectionary = () => {
  return (
    <div className='cards'>
        <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={bcake} />
            <Card.Body>
            <Card.Title>Vanilla Cake</Card.Title>
            <Card.Text className='text'>
            A classic Vannila Cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you've never had before.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
            </Card.Body>
    </Card>

    <Card className='card1'style={{ width: '20rem', height: '30rem' }}>
    <Card.Img variant="top" src={chcake} />
        <Card.Body>
        <Card.Title>Chocolate Cake</Card.Title>
        <Card.Text className='text'>
        Chocolate Cake with a super moist crumb and fudgy yet light texture. Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor. 
        </Card.Text>
        <Button variant="primary">Order Now</Button>
        </Card.Body>
    </Card>

<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
    <Card.Img variant="top" src={pie} />
    <Card.Body>
    <Card.Title>Chicken and Meat Pies</Card.Title>
    <Card.Text className='text'>
    A delicious, homemade chicken pot pie made from carrots, peas, and celery. This comfort food classic will be a hit with your family.
    </Card.Text>
    <Button variant="primary">Order Now</Button>
    </Card.Body>
</Card>

<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
<Card.Img variant="top" src={vcake} />
    <Card.Body>
    <Card.Title>Chesse Cake</Card.Title>
    <Card.Text className='text'>
    Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar. 
    </Card.Text>
    <Button variant="primary">Order Now</Button>
    </Card.Body>
</Card>

<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
     <Card.Img variant="top" src={dnuts} />
    <Card.Body>
    <Card.Title>Donuts</Card.Title>
    <Card.Text className='text'>
    Donuts come with dipped, drizzled, and glazed with every sweet and savoury topping that can possibly taste good on a ring of fried dough.
    </Card.Text>
    <Button variant="primary">Order Now</Button>
    </Card.Body>
</Card>
<Card className='card1'style={{ width: '20rem', height: '30rem' }}>
     <Card.Img variant="top" src={cucake} />
    <Card.Body>
    <Card.Title>Cup Cake</Card.Title>
    <Card.Text className='text'>
    Moist, perfect cupcakes everyone will love.It comes with many flavours.A cupcake is a small cake designed to serve one person.
    </Card.Text>
    <Button variant="primary">Order Now</Button>
    </Card.Body>
</Card>
</div>
  )
}

export default Confectionary
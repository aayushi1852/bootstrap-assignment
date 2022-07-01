import React from 'react'
import Confectionary from './Confectionary'

// import bcake from "../../img/b-cake.jpeg"
// import bcake from "../img/b-cake.jpeg"
// import chcake from "../img/ch-cake.jpeg"
// import pie from "../img/pie.jpeg"
// import vcake from "../img/van-cake.jpeg"
// import dnuts from "../img/d-nuts.jpeg"
// import cucake from "../img/cup-cake.jpeg"

const CardConfectionary = () => {

  const confectionaryInfo = [
    {
        
        tittle: "Vanilla Cake",
        description: "A classic Vannila Cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you've never had before.",
        // img:'../img/van-cake2.jpeg'
        img:'../../public/logo192.png'
    },
    {
      
      tittle: "Chocolate Cake",
      description: "Chocolate Cake with a super moist crumb and fudgy yet light texture. Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor.",
      img:"../img/ch-cake.jpeg"
  },
  {
    
    tittle: "Chicken and Meat Pies",
    description: "A delicious, homemade chicken pot pie made from carrots, peas, and celery. This comfort food classic will be a hit with your family.",
    img: "../img/pie.jpeg"
  },
  {
    
    tittle: "Chesse Cake",
    description: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.",
    img:"../img/ch-cake.jpeg"
  },
  {
    
    tittle: "Donuts",
    description: "Donuts come with dipped, drizzled, and glazed with every sweet and savoury topping that can possibly taste good on a ring of fried dough.",
    img:"../img/d-nuts.jpeg"
  },
  {
    
    tittle: "Cup Cake",
    description: "Moist, perfect cupcakes everyone will love.It comes with many flavours.A cupcake is a small cake designed to serve one person.",
    img:"../img/cup-cake.jpeg"
  },
  
  ];
  
  
  const ConfectionaryCardFood = (FoodCard, index) => {
    return (

      <Confectionary key={index}
      tittle = {FoodCard.tittle}
      description={FoodCard.description}
      img={FoodCard.img}
      />
    );
  };

  
    return (
      <div>
     <div>
            <h3>Working on Dynamic props.</h3>   
              {confectionaryInfo.map(ConfectionaryCardFood)}  
      </div>

        
      </div>
    )
  }
  
  export default CardConfectionary
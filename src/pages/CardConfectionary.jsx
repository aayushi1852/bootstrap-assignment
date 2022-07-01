import React from 'react'
import Confectionary from './Confectionary'

const CardConfectionary = () => {

  const confectionaryInfo = [
    {
        
        tittle: "Vanilla Cake",
        description: "A classic Vannila Cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you've never had before.",
    },
    {
      
      tittle: "Chocolate Cake",
      description: "Chocolate Cake with a super moist crumb and fudgy yet light texture. Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor.",
  },
  {
    
    tittle: "Chicken and Meat Pies",
    description: "A delicious, homemade chicken pot pie made from carrots, peas, and celery. This comfort food classic will be a hit with your family.",
  },
  {
    
    tittle: "Chesse Cake",
    description: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.",
  },
  {
    
    tittle: "Donuts",
    description: "Donuts come with dipped, drizzled, and glazed with every sweet and savoury topping that can possibly taste good on a ring of fried dough.",
  },
  {
    
    tittle: "Cup Cake",
    description: "Moist, perfect cupcakes everyone will love.It comes with many flavours.A cupcake is a small cake designed to serve one person.",
  },
  
  ];
  
  
  console.log('here',confectionaryInfo)
  
    return (
      <div>
            <Confectionary 

            tittle0 = {confectionaryInfo[0].tittle}
            tittle1 = {confectionaryInfo[1].tittle}
            tittle2 = {confectionaryInfo[2].tittle}
            tittle3 = {confectionaryInfo[3].tittle}
            tittle4 = {confectionaryInfo[4].tittle}
            tittle5 = {confectionaryInfo[5].tittle}

            description0 = {confectionaryInfo[0].description}
            description1 = {confectionaryInfo[1].description}
            description2 = {confectionaryInfo[2].description}
            description3 = {confectionaryInfo[3].description}
            description4 = {confectionaryInfo[4].description}
            description5 = {confectionaryInfo[5].description}


            />
        
      </div>
    )
  }
  
  export default CardConfectionary
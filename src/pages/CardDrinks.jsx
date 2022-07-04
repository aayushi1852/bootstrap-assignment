import React from 'react'
import Drinks from './Drinks'
import {drinksInfo} from './db'


const CardDrinks = () => {
  
  const drinksCard = (DrinksCard, index) => {
    return (

      <Drinks key={index}
      tittle = {DrinksCard.tittle}
      description={DrinksCard.description}
      img={DrinksCard.img}
      qty={DrinksCard.qty}
      price={DrinksCard.price}
      />
    );
  }
  
    return (
      
      <div className='gridheader'>
         <h3>Drinks</h3>
          <div className='grid'>
              {drinksInfo.map(drinksCard)}  
          </div> 

      </div>
    )
  }
  



export default CardDrinks
import React from 'react'
import Drinks from './Drinks'
import {drinksInfo} from './db'


const CardDrinks = () => {
  
  const DrinksCardFood = (DrinksCard, index) => {
    return (

      <Drinks key={index}
      tittle = {DrinksCard.tittle}
      description={DrinksCard.description}
      img={DrinksCard.img}
      />
    );
  }
  
    return (
      
      <div className='gridheader'>
         <h3>Drinks</h3>
          <div className='grid'>
              {drinksInfo.map(DrinksCardFood)}  
          </div> 

      </div>
    )
  }
  



export default CardDrinks
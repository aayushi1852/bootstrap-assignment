import React from 'react'
import Confectionary from './Confectionary'
import {confectionaryInfo} from './db'

const CardConfectionary = () => {


  
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
      <div className='gridheaderc'>
            <h3>Confectionary</h3>   
     <div className='grid'>
             {confectionaryInfo.map(ConfectionaryCardFood)}  
      </div>

        
      </div>
    )
  }
  
  export default CardConfectionary
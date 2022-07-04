
import React from 'react'
import Food from './Food'
import {FoodInfo} from './db'


const CardFood = () => {

  const renderCardFood = (FoodCard, index) => {
    return (

      <Food key={index}
      tittle = {FoodCard.tittle}
      description={FoodCard.description}
      img={FoodCard.img}
      qty={FoodCard.qty}
      price={FoodCard.price}
      />
    );
  };

    return (
      <div className='gridheader'>
            <h3>Food</h3>   
            <div className='grid'>
                {FoodInfo.map(renderCardFood)}  
            </div>
             
      </div>



    )
  }
  
  export default CardFood
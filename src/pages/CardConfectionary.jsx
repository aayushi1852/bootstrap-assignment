import React from 'react'
import Confectionary from './Confectionary'
import {confectionaryInfo} from './db'

const CardConfectionary = () => {


  
  const confectionaryCard = (ConfectionaryCard, index) => {
    return (

      <Confectionary key={index}
      tittle = {ConfectionaryCard.tittle}
      description={ConfectionaryCard.description}
      img={ConfectionaryCard.img} 
      qty={ConfectionaryCard.qty}
      price={ConfectionaryCard.price}
      />
    );
  };

  
    return (
      <div className='gridheaderc'>
            <h3>Confectionary</h3>   
     <div className='grid'>
             {confectionaryInfo.map(confectionaryCard)}  
      </div>

        
      </div>
    )
  }
  
  export default CardConfectionary
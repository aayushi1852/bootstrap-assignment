
import React from 'react'
import Food from './Food'

import rice from "../img/rice1.jpeg"
import plantain from "../img/plantain.jpeg"
import yam from "../img/yam.jpeg"
import eba from "../img/eba.jpeg"
import chaat from "../img/chaat.jpeg"
import barfi from "../img/barfi.jpeg"


const CardFood = () => {

  const FoodInfo = [
    {
        
        tittle: "Plantain",
        description: "Plantain are deep-fried or dried, generally crispy slices of bananas.They can be sweet or savory and covered with sugar, honey, salt, or various spices.",
        img : {plantain},
        // photo: "../img/plantain.jpeg"
    },
    {
      
      tittle: "Jollof Rice",
      description: "Jollof rice is a unifying dish across West Africa.The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot.",
        img : {rice},
  },
  {
    
    tittle: "Yam And Egg",
    description: "Yam and eggs recipe made with succulent boiled yam and fried eggs garnished with vegetables. Yam is highly nutritious and contains less starch than potatoes.",
    img : {yam},
  },
  {
    
    tittle: "Barfi",
    description: "Barfi is a popular Indian milk based sweet recipe.Milk Barfi or Milk Powder Burfi is a super delicious and one of the best gluten free, no bake dessert.",
    img : {barfi},
  },
  {
    
    tittle: "Eba",
    description: "EBA is a staple food mainly eaten in the West Africa, particularly in Nigeria.It is made with fried cassava and hot boiling water to form a smooth stiff dough.",
    img : {eba},
  },
  {
    
    tittle: "Chaat",
    description: "With its aromatic spices and tangy sauces, chaat describes an entire category of Indian street foods that offers the palate of exotic flavors and textures",
    img : {chaat},
  },
  
  ];

  

  const renderCardFood = (FoodCard, index) => {
    return (
  
      <Food key={index}
      tittle = {FoodCard.tittle}
      description={FoodCard.description}
      img={FoodCard.img}
      />
    );
  };
  
    return (
      <div>
        
        <h3>Working on Dynamic props.</h3>   
          {FoodInfo.map(renderCardFood)}
      </div>
    )
  }
  
  export default CardFood
import React from 'react'
import Drinks from './Drinks'


const CardDrinks = () => {

  const drinksInfo = [
    {
        
        tittle: "Carrot Juice",
        description: "Carrot juice is extracted from whole carrots and extremely nutritious. It not only provides potassium and vitamin C but also is very rich in provitamin A.",
        img: require("../img/carrott.jpeg")
    },
    {
      
      tittle: "Orange Juice",
      description: " Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges.It is a favorite beverage high in antioxidants.",
      img: require("../img/orange.jpeg")
    },
    {
    
    tittle: "Watermelon Juices",
    description: "Watermelon's high water content, antioxidants, and amino acids may make for a better workout.It is Refreshingly sweet and hydrating.",
    img: require("../img/w-melon.jpeg")
   },
   {
    
    tittle: "Mango Juice",
    description: "Mangoes are rich in vitamin C, iron, beta carotene and many other nutrients! Mango helps you fight infections and strengthens your bones.",
    img: require("../img/mango.jpeg")
   },
   {
    
    tittle: "Banana Juice",
    description: "Banana juice is a sweet and creamy combination of ripe banana, apple, honey and milk (or water).One of the benefit of banana juice is it increases immunity. ",
    img: require("../img/banana.jpeg")
   },
   {
    
    tittle: "Apple Juice",
    description: "Apple juice is a fruit juice made by the maceration and pressing of an apple.When apples are juiced, their hydrating quality is maximized.",
    img: require("../img/apple.jpeg")
   },
  
  ];
  
  
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
      <div>
          
          <div>
            <h3>Juice.</h3>  
              {drinksInfo.map(DrinksCardFood)}  
          </div> 

      </div>
    )
  }
  



export default CardDrinks
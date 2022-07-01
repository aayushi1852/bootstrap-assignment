import React from 'react'
import Drinks from './Drinks'
const CardDrinks = () => {

  const DrinksInfo = [
    {
        
        tittle: "Carrot Juice",
        description: "Carrot juice is extracted from whole carrots and extremely nutritious. It not only provides potassium and vitamin C but also is very rich in provitamin A.",
    },
    {
      
      tittle: "Orange Juice",
      description: " Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges.It is a favorite beverage high in antioxidants.",
    },
    {
    
    tittle: "Watermelon Juices",
    description: "Watermelon's high water content, antioxidants, and amino acids may make for a better workout.It is Refreshingly sweet and hydrating.",
   },
   {
    
    tittle: "Mango Juice",
    description: "Mangoes are rich in vitamin C, iron, beta carotene and many other nutrients! Mango helps you fight infections and strengthens your bones.",
   },
   {
    
    tittle: "Banana Juice",
    description: "Banana juice is a sweet and creamy combination of ripe banana, apple, honey and milk (or water).One of the benefit of banana juice is it increases immunity. ",
   },
   {
    
    tittle: "Apple Juice",
    description: "Apple juice is a fruit juice made by the maceration and pressing of an apple.When apples are juiced, their hydrating quality is maximized.",
   },
  
  ];
  
  
  console.log('here',DrinksInfo)
  
    return (
      <div>
          

            
            <Drinks 

            tittle0 = {DrinksInfo[0].tittle}
            tittle1 = {DrinksInfo[1].tittle}
            tittle2 = {DrinksInfo[2].tittle}
            tittle3 = {DrinksInfo[3].tittle}
            tittle4 = {DrinksInfo[4].tittle}
            tittle5 = {DrinksInfo[5].tittle}

            description0 = {DrinksInfo[0].description}
            description1 = {DrinksInfo[1].description}
            description2 = {DrinksInfo[2].description}
            description3 = {DrinksInfo[3].description}
            description4 = {DrinksInfo[4].description}
            description5 = {DrinksInfo[5].description}

            />

      </div>
    )
  }
  



export default CardDrinks
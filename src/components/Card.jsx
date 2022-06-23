import React from 'react'
import Drinks from './pages/Drinks'
import Orders from './Orders'

// import Drinks from './pages/Drinks'

const Card = () => {
  const tt = 'sjsksks'
  return (
    <>
    <Drinks title='kekekeekk'/>
    <Drinks />
    <Drinks />
    <Drinks  />

     <Orders name={tt}/>
     <Orders ans='yes'/>
    <Orders  /> 

      <Orders name="Sara" />
      <Orders name="Cahal" />
      <Orders name="Edite" />
    </>
  )
}

export default Card
import React from 'react'
import Card from './Card'

const Orders = (props) => {

  console.log('name is A',props.name)
  console.log('name is An',props.ans)
  return (
    <div><h2>Testing react project2 here, {props.name}</h2>{props.name}</div>
  )
}

export default Orders
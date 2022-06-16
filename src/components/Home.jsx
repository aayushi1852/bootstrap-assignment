import React from 'react'
import { Link } from 'react-router-dom'
import video from '../video/vid.mp4'


const Home = () => {
  return (
    <div className='Home'> 
    <div className='cover '></div>
    <video src={video} autoPlay loop muted/>      
        <div className="main">
            
        <li> <Link to="/food">food</Link></li>
        <li> <Link to="/confectionary">confectionary</Link></li>
        <li> <Link to="/drinks">drinks</Link></li>

{/* 
            <li>   <a href="/food" target="_blank">Food</a></li>
            <li>   <a href="/confectionary" target="_blank">Confectionary</a></li>
            <li>   <a href="/drinks" target="_blank">Drinks</a></li> */}
    </div>
  </div>
  )
}

export default Home




{/* <li> <Link to='/food'>Food</Link> </li>
<li> <Link to='/Confectionary'>Confectionary</Link> </li>
<li> <Link to='/Drinks'>Drinks</Link> </li> */}
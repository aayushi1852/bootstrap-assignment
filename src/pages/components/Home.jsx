import React from 'react'
import { Link } from 'react-router-dom'
import video from '../../video/vid.mp4'
import About from './About'


const Home = () => {
  return (
    <div className='Home'> 
    <div className='cover '></div>
    <video src={video} autoPlay loop muted/>      
        <div className="main">
            
        <li> <Link to="/food">Food</Link></li>
        <li> <Link to="/confectionary">Confectionary</Link></li>
        <li> <Link to="/drinks">Drinks</Link></li>
       
    </div>
    {/* <About /> */}
  </div>
  )
}

export default Home




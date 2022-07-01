import React from 'react';
import {Link } from 'react-router-dom'
import { Container,Navbar } from 'react-bootstrap';

const Nav = () => {
  return (
    <div>
        
<Navbar className='nav'>
  <Container className='navhome'>
    <Navbar.Brand><Link to="/bootstrap-assignment">Home</Link></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end"> 
      <Navbar.Text>
          <ul className='links'>
            <li> <Link to="/food">Food</Link></li>
            <li> <Link to="/confectionary">Confectionary</Link></li>
            <li> <Link to="/drinks">Drinks</Link></li>
            
          </ul>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
       
    </div>
  )
}

export default Nav


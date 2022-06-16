import React from 'react';

import { Container,Navbar } from 'react-bootstrap';

const Nav = () => {
  return (
    <div>
        
<Navbar className='nav'>
  <Container>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
          <ul className='links'>
            <li>   <a className="buttons"href="/food">Food</a></li>
            <li>   <a href="/confectionary">Confectionary</a></li>
            <li>   <a href="/drinks">Drinks</a></li>
          </ul>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
       
    </div>
  )
}

export default Nav


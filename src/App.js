import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menucomponent';
import './App.css';

function App() {
  return (
      <div className="App">
          <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">KOHLI</NavbarBrand>
                  

              </div>
          </Navbar>
          <Menu />
      </div>
  );
}

export default App;

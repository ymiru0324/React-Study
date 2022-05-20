/* eslint-disable */ // 터미널에 뜨는 warning eslint 제거
import React, { useState, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import shoesData from './data.js';
import Detail from './Router/Detail.js';
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';

let stockContext = React.createContext();

function App() {

  let [shoes, shoesChange] = useState(shoesData);
  let [stock, stockChange] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    <Switch>

    
      <Route exact path="/">
        <Jumbotron className="background">
          <h1>20% Season Off</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <div className="container">

          <stockContext.Provider value={stock}>

          <div className="row">
            {
              shoes.map( (a, i) => {
                return <Card shoes = {shoes[i]} i = {i} key={i}/>
              })
            }
          </div>

          </stockContext.Provider>
          <button className="btn btn-primary" onClick={() => {

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result) => {
              console.log(result.data);
              shoesChange( [...shoes, ...result.data] )
            })
            .catch(() => {
              console.log('실패');
            })

          }}>더보기</button>
        </div>
      </Route>
      
      <Route path="/detail/:id">
        <Detail shoes={shoes} stock={stock} stockChange={stockChange}/>
      </Route>

      <Route path="/:id">
        <div>test</div>
      </Route>
    </Switch>
    </div>
  );
}

function Card(props) {

  let stockCard = useContext(stockContext);

  return (
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
      {stockCard[props.i]}
    </div>
  )
}

export default App;

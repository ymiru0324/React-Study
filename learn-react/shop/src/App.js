/* eslint-disable */ // 터미널에 뜨는 warning eslint 제거
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import shoesData from './data.js'

function App() {

  let [shoes, shoesChange] = useState(shoesData);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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

      {
        // shoes.map(function(shoes, i) {
        //   return(
        //     <div className="container" key={i}>
        //       <div className="row">
        //         <div className="col-md-4">
        //           <h4>{ shoes[i].title }</h4>
        //           <p>{ shoes[i].content } & { shoes[i].price }</p>
        //         </div>
        //       </div>
        //     </div>
        //   )
        // })
      }
      <div className="container">
        <div className="row">
          {
            shoes.map( (a, i) => {
              return <Card shoes = {shoes[i]} i = {i} key={i}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return(
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;

import React, { Component } from 'react'
import {Navbar, Nav, Image} from 'react-bootstrap'
import { ReactComponent as Logo } from './Logo.svg';

class Headers extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <Logo fill="white" src="/Logo.svg" width="30" height="30" className="d-inline-block align-top" />{' '}
          Recipes Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {this.props.isLoaded &&
          <Nav className="mr-auto">
            <Nav.Link href="#Charts">Charts</Nav.Link>
            <Nav.Link href="#Cards">Cards</Nav.Link>
            <Nav.Link href="#Map">Map</Nav.Link>
            <Nav.Link href="#List">List</Nav.Link>
          </Nav>}
          {this.props.isLoaded &&
          <Nav className="ml-auto">
            <Nav.Link href={this.props.recipes[0].recipe.url} rel="noopener noreferrer" target="_blank">{this.props.recipes[0].recipe.label}</Nav.Link>{' '}
            <Nav.Item>
              <Image
                src={this.props.recipes[0].recipe.image} 
                width="40" 
                height="40" 
                roundedCircle
              />
            </Nav.Item>
          </Nav>}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Headers
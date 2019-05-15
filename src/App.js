import React, { Component } from 'react';
import { Button, Container, Alert , Jumbotron } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }
  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
     <>
      //code goes here 
     </>

    );
        }
      }
      
export default App;
import React, { Component } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {
  Card, 
} from 'reactstrap';
import { Button } from 'reactstrap';
import {
   CardText, CardBody,
  CardTitle,  
} from 'reactstrap';
import "./styles.css";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
    <CardBody>
      <CardTitle>Owen Parker</CardTitle>
      <CardText>
      owepar8721@students.ecpi.edu
    </CardText>
    </CardBody>
  </Card>
  

  <Card style={{ width: '18rem' }}>
    <CardBody>
      <CardTitle>Shallan Brown</CardTitle>
      <CardText>
      shabro0600@students.ecpi.edu
    </CardText>
    </CardBody>
  </Card>


  <Card style={{ width: '18rem' }}>
    <CardBody>
      <CardTitle>Amy Niyonzima</CardTitle>
      <CardText>
      amyniy0231@students.ecpi.edu
    </CardText>
    </CardBody>
  </Card>
  
        
      </div>
    );
  }
}
 
export default Contact;
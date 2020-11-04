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
 
class About extends Component {
  render() {
    return (
      <div>
      <Card>
    <CardBody>
      <CardTitle>GOT QUESTIONS?</CardTitle>
      <CardText>
      For our project, our team will be creating a phishing web application scanner.  The purpose of the website will be to assist companies in detecting phishing emails prior to an attack.  Our end users would include any company that currently does not have this security measure in place via their internal security system.  This application could also be used by the general public or anyone that wishes to block phishing emails for their personal email accounts.   
We will be using HTML, CSS, and Java and JavaScript as our scripting language.  Our website will be hosted on Git Hub pages and executing via React.  We will be using MongoDB to house our five data tables. 
For security we will include a registration/sign in page that will allow the end user to register, create, and change their password.  Our five pages will consist of a home page, registration page, an about us page, contact page, and scanning page.  
So far this week with have created the font end web page including the shell for the home page, registration page, about us page, contact page, and scanning page.  We have also selected our 30 word/phrases.

    </CardText>
    </CardBody>
  </Card>
  
      </div>
    );
  }
}
 
export default About;
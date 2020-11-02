import React, { Component } from "react";
 import ReactDOM from 'react-dom';
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

 

 
class Home extends Component {
  render() {
    return (
      <div className="Main">

<Card>
    <CardBody>
      <CardTitle>What is phishing?</CardTitle>
      <CardText>
      Phishing is the fraudulent attempt to obtain sensitive information or data, such as usernames, passwords and credit card details, by disguising oneself as a trustworthy entity in an electronic communication
    </CardText>
      <Button href="https://www.phishing.org/what-is-phishing">View More</Button>
    </CardBody>
  </Card>


  <Card >
    <CardBody>
      <CardTitle>Prevent Phishing Attacks:</CardTitle>
      <CardText>
      While it would be virtually impossible to keep a current and fully comprehensive archive of these examples, it's a really good idea to keep updated on what's out there to make phishing attacks less likely.
    </CardText>
      <Button href="https://www.phishing.org/phishing-examples">View More</Button>
    </CardBody>
  </Card>

  
  <Card >
    <CardBody>
      <CardTitle>10 Ways To Avoid Phishing Scams</CardTitle>
      <CardText>
      Nobody wants to fall prey to a phishing scam. There’s a good reason that such scams will continue, though: They are successful enough for cybercriminals to make massive profits. Phishing scams have been around practically since the inception of the Internet, and they will not go away any time soon. Fortunately, there are ways to avoid becoming a victim yourself. Here are 10 basic guidelines in keeping yourself safe:
    </CardText>
      <Button href="https://www.phishing.org/phishing-examples">View More</Button>
    </CardBody>
  </Card>


  
      </div>
    );
    ReactDOM.render( document.getElementById('root'));
  }
}
 
export default Home;
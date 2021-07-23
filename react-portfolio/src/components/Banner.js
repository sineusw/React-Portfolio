import React from 'react'; 
import {Jumbotron, Button} from 'react-bootstrap'; 
import './Banner.css'
function Banner(){
    return (
        <Jumbotron className="banner">
  <h1>Welcome To My React Portfolio!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
    )
}

export default Banner
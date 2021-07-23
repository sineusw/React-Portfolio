import React from 'react'
import './Project.css'
import {Card, Button, ButtonGroup} from 'react-bootstrap'
import laptop from '../images/laptop.jpeg'
function Project({name, gitHub, image, description, live}) {
    return (
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={laptop} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <ButtonGroup className="button-group">
    <a href={live} target="_blank">Live Version</a>
    <a href={gitHub} target="_blank">GitHub</a>
    </ButtonGroup>
  </Card.Body>
</Card>
    )
}

{/* <img src= 'asdasdasfgsd'/> */}


export default Project

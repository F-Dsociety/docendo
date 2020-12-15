import React from 'react';
import {Accordion,Card,Button} from 'react-bootstrap'

export default function Student({data}){
  return(
    <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          My teachers list
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">

        <Card.Body>
          {
            data.teachersList.length
            ?
            data.teachersList.map(teacher=><div></div>)
            :
            <div>no teachers yet</div>
          
          }
        </Card.Body>

      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Lessons list
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
        {
          data.lessons.length
            ?
            data.lessons.map(lesson=><div></div>)
            :
            <div>no lessons yet</div>
          
          }
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="2">
          Interests list
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
        {
          data.interests.length
            ?
            data.interests.map(interest=><div></div>)
            :
            <div>no interests yet</div>
          
          }
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  )
}
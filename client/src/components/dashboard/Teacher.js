import React from 'react';
import {Accordion,Card,Button} from 'react-bootstrap'

export default function Teacher({data}){
  return(
    <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Students list
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">

        <Card.Body>
          {
            data.studentsList.length
            ?
            data.studentsList.map(student=><div></div>)
            :
            <div>no students yet</div>
          
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
          Responces list
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
        {
          data.responces.length
            ?
            data.responces.map(responce=><div></div>)
            :
            <div>no responces yet</div>
          
          }
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  )
}
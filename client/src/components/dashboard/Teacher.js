import React from 'react';
import { Link } from 'react-router-dom'
import {Accordion,Card,Button} from 'react-bootstrap'

export default function Teacher({data}){
  console.log(data);
  return(
    <div className="teacher-index-container">
      <h2>Hi {data.firstname}</h2>
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
                <div>No Lessons yet</div>
              
            
            }
            <Link to={`/lesson/add-lesson`} {...data}>Create New Lesson</Link>

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
  </div>
  )
}
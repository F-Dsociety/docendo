import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Accordion, Card, Button, Container } from 'react-bootstrap'
import Teacher from './items/Teacher'
import Interest from './items/Interest'
import InterestInput from './InterestInput'

export default function Student({ data }) {
  let [teachers, setTeachers] = useState([])
  let [interests, setInterests] = useState([])

  function getInterests(){
    axios
      .post('/api/dashboard/interests_list', {id:data._id})
      .then(response => {
        return setInterests(response.data||[])
      })
      .catch(err => {
        return err.response;
      });
  }
  useEffect(() => {
    axios
      .post('/api/dashboard/teachers_list', {})
      .then(response => {
        return setTeachers(response.data||[])
      })
      .catch(err => {
        return err.response.data;
      });
    getInterests()
  }, [])
  
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            My teachers
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">

          <Card.Body className='d-flex-column'>
            <Container>

              {
                data.teachersList.length
                  ?
                  data.teachersList.map(teacher => <div></div>)
                  :
                  <div>no teachers yet</div>

              }
            </Container>
          </Card.Body>

        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            My lessons
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {
              data.lessons.length
                ?
                data.lessons.map(lesson => <div></div>)
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
              interests.length
                ?
                interests.map(interest => <Interest interest={interest} />)
                :
                <div>no interests yet</div>
            }
            <InterestInput getInterests={getInterests} owner={data._id}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            All teachers list
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            {
              teachers.length
                ?
                teachers.map(teacher => <Teacher teacher={teacher} />)
                :
                <div>no teachers yet</div>

            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}
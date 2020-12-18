import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import {Accordion,Card,Button} from 'react-bootstrap'
import Lesson from './items/Lesson'
import axios from 'axios'
import LessonInput from './LessonInput'


export default function Teacher({data}){
  let [lessons, setLessons] = useState([])
  let [response, setResponse] = useState([])

  console.log(data);
  
  function getLessons(){
    axios.get(`/api/lesson/byTeacher_id/${data._id}`)
      .then(response => {
        setLessons(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(()=>{
    getLessons()
  },[])

  function getLessons(){
    axios.get(`/api/lesson/byTeacher_id/${data._id}`)
      .then(response => {
        setLessons(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(()=>{
    getLessons()
  },[])

  return(
    <div className="teacher-index-container">
      <h2>Hi {data.firstname}</h2>

      <Accordion defaultActiveKey="0">

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Your students
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey="0">

          <Card.Body class="card-body">
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
            Your lessons
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
          {
            lessons.length
              ?
              lessons.map(lesson=><Lesson lesson={lesson} />)
              :
                <div>No lessons yet</div>
              
            
            }
            <LessonInput getLessons={getLessons} owner={data._id}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Your responses
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
          {
            data.responces.length
              ?
              data.responces.map(responce=><div></div>)
              :
              <div>no responses yet</div>
            
            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
  )
}
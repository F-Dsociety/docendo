import React,{useState,useEffect} from 'react';
import {Modal,Button,Row} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Student({id,teacher_id,lessons}){
  let [show, setShow] = useState(false)
  let [student, setStudent] = useState({})
  useEffect(()=>{
    axios.post(`/api/dashboard/student/${id}`)
      .then(response => {
        setStudent(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])
  return(
    <Row>
      <Button onClick={() => setShow(true)}>
        {student.firstname} {student.lastname}
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {student.firstname} {student.lastname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>social network: {student.socialNetwork}</p>
        <p>phone: {student.phone}</p>
        booked lessons
        <ul>
          {
            student.lessons &&  student.lessons.filter(lesson=>lessons.includes(lesson.lesson)).map(lesson=>
              <li>{lesson.date} {lesson.comments}</li>
            )
          }
        </ul>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-around'>
          <Button onClick={()=>setShow(false)}>Contact</Button>
          <Button onClick={()=>setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}
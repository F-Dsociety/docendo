import React,{useState,useEffect} from 'react';
import {Modal,Button,Row} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Teacher({teacher:{firstname,lastname, _id}}){
  let [show, setShow] = useState(false)
  let [lessons, setLessons] = useState([])
  useEffect(()=>{
    axios.get(`/api/lesson//byTeacher_id/${_id}`)
      .then(response => {
        setLessons(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])
  return(
    <Row>
      <Button onClick={() => setShow(true)}>
        {firstname} {lastname.substr(0,1)}. available lessons: {lessons.length}
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {firstname} {lastname.substr(0,1)}. available lessons: {lessons.length}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
          lessons.map(element => 
              <div key={element._id} className="course-container">
                <h3>
                  <Link to={`/lesson/details/${element._id}`}>{element.title}</Link>
                </h3>
                <p>{element.description}</p>
                {/* <Button onClick={`/lesson/details/${project._id}`}>More Info</Button> */}
              </div>
          )
        }
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-around'>
          <Button onClick={()=>setShow(false)}>Buy set of lessons</Button>
          <Button onClick={()=>setShow(false)}>Book trial lesson</Button>
          <Button onClick={()=>setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}
import React,{useState} from 'react';
import {Modal,Button,Row} from 'react-bootstrap'

export default function Teacher({teacher:{firstname,lastname,lessons}}){
  let [show, setShow] = useState(false)
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
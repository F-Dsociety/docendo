import React,{useState} from 'react';
import {Modal,Button,Row} from 'react-bootstrap'

export default function Interest({interest:{title,description,propositions}}){
  let [show, setShow] = useState(false)
  return(
    <Row>
      <Button onClick={() => setShow(true)}>
        {title} available proposition: {propositions.length}
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {title} available proposition: {propositions.length}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-around'>
          <Button variant='danger' onClick={()=>setShow(false)}>Remove</Button>
          <Button onClick={()=>setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}